'use client';

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

// In a real application, credentials should be stored securely 
// with hashed passwords, preferably in a database
// This is a simplified version for demonstration purposes
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'jvacations2024'  // In production, use a strong password
};

type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  error: string | null;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isLoading: true,
  login: async () => false,
  logout: () => {},
  error: null,
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if user is already logged in (via session storage)
    const checkAuth = () => {
      const authStatus = sessionStorage.getItem('jv_admin_auth');
      setIsAuthenticated(authStatus === 'true');
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    setError(null);
    setIsLoading(true);

    // Simulate API call with a small delay (for UX)
    await new Promise(resolve => setTimeout(resolve, 500));

    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true);
      sessionStorage.setItem('jv_admin_auth', 'true');
      setIsLoading(false);
      return true;
    } else {
      setError('Invalid username or password');
      setIsAuthenticated(false);
      sessionStorage.removeItem('jv_admin_auth');
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('jv_admin_auth');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

// Higher-order component to protect routes
export function withAuth<P extends object>(Component: React.ComponentType<P>) {
  return function AuthenticatedComponent(props: P) {
    const { isAuthenticated, isLoading } = useAuth();
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
      setIsClient(true);
    }, []);

    if (!isClient || isLoading) {
      return <div className="flex h-screen items-center justify-center">Loading...</div>;
    }

    if (!isAuthenticated) {
      // If we're on the client, use router for redirection
      if (typeof window !== 'undefined') {
        window.location.href = '/admin';
        return null;
      }
      return <div className="flex h-screen items-center justify-center">Redirecting to login...</div>;
    }

    return <Component {...props} />;
  };
} 