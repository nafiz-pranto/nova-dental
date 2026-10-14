import React, { createContext, useContext, useState, useEffect } from 'react';

interface RouterContextType {
  path: string;
  queryParams: Record<string, string>;
  navigate: (to: string) => void;
  isActive: (to: string) => boolean;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

// Helper to normalize paths
const getCleanPath = (): { path: string; query: Record<string, string> } => {
  // Support both hash-based fallback (for nested iframes) and standard path
  const hash = window.location.hash;
  let fullPath = window.location.pathname;

  if (hash && hash.startsWith('#/')) {
    fullPath = hash.substring(1);
  }

  const [pathOnly, queryString] = fullPath.split('?');
  const query: Record<string, string> = {};

  if (queryString) {
    const params = new URLSearchParams(queryString);
    params.forEach((value, key) => {
      query[key] = value;
    });
  }

  return { path: pathOnly || '/', query };
};

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [current, setCurrent] = useState(() => getCleanPath());

  useEffect(() => {
    const handlePopState = () => {
      setCurrent(getCleanPath());
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigate = (to: string) => {
    // If it's an on-page hash on the home page like #services, handle smoothly
    if (to.startsWith('#') && !to.startsWith('#/')) {
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    const [targetPath, queryString] = to.split('?');
    const query: Record<string, string> = {};
    if (queryString) {
      const params = new URLSearchParams(queryString);
      params.forEach((v, k) => { query[k] = v; });
    }

    // Update history state
    window.history.pushState({}, '', to);
    setCurrent({ path: targetPath || '/', query });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (to: string): boolean => {
    if (to === '/' && current.path === '/') return true;
    if (to !== '/' && current.path.startsWith(to)) return true;
    return false;
  };

  return (
    <RouterContext.Provider
      value={{
        path: current.path,
        queryParams: current.query,
        navigate,
        isActive,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};

export const Link: React.FC<{
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  activeClassName?: string;
}> = ({ to, children, className = '', onClick, activeClassName = '' }) => {
  const { navigate, isActive } = useRouter();
  const active = isActive(to);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.();
    navigate(to);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`${className} ${active ? activeClassName : ''}`}
    >
      {children}
    </a>
  );
};
