import React, { useContext } from 'react';

interface ContextProps {
  handleError: (error?: Error | unknown) => void;
}

export const ErrorBoundaryContext = React.createContext({} as ContextProps);

export const useErrorHandler = (): ContextProps => useContext(ErrorBoundaryContext);
