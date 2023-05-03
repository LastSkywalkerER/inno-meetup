import { ErrorInfo, ReactNode } from 'react';

export interface FallbackComponentProps {
  error: Error;
  handleReload: () => void;
  onResetErrorBoundary: () => void;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
  FallbackComponent?: (props: FallbackComponentProps) => React.ReactElement;
  onError?: (error: Error | unknown) => void;
  fallbackRedirect?: string;
  handleReload?: () => void;
  beforeReset?: () => void;
  withRedirectToBase?: boolean;
}

export interface State {
  errorInfo: ErrorInfo | null;
  error: Error | null;
}
