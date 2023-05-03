import { createBrowserHistory } from 'history';
import { Component, ErrorInfo } from 'react';

import styles from './styles.module.css';
import { ErrorBoundaryProps, State } from './types';
import { ErrorBoundaryContext } from './useErrorHandler';

const isDev = process.env['REACT_APP_NODE_ENV'] === 'development';
export const history = createBrowserHistory();

class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null, errorInfo: null };

    this.handleError = this.handleError.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    const { onError } = this.props;

    if (onError) {
      onError(error);
    }

    this.setState({ error, errorInfo });
  }

  handleReset = (): void => {
    const { beforeReset } = this.props;

    if (beforeReset) {
      beforeReset();
    }

    this.setState({ error: null, errorInfo: null });
  };

  handleError = (error?: Error | unknown): void => {
    const { onError } = this.props;

    const parsedError = (error as Error) || Error('Something wrong');
    const errorInfo = { componentStack: parsedError.stack || '' };

    if (onError) {
      onError(error);
    }

    this.setState({
      error: parsedError,
      errorInfo,
    });
  };

  handleReload = (): void => {
    const { fallbackRedirect, withRedirectToBase = false } = this.props;

    if (withRedirectToBase) {
      history.push(fallbackRedirect || '/');
    }

    window.location.reload();
  };

  override render() {
    const {
      state: { error, errorInfo },
      props: { children, FallbackComponent, handleReload },
    } = this;

    if (error && FallbackComponent) {
      return (
        <FallbackComponent
          error={error}
          handleReload={handleReload || this.handleReload}
          onResetErrorBoundary={this.handleReset}
        />
      );
    }

    if (errorInfo) {
      return (
        <div className={styles.wrapper}>
          <h1>
            {'Something went wrong'}
            &nbsp;&#129301; {/* confused smile 🤕 */}
          </h1>
          <div className={styles.buttonsWrapper}>
            <button onClick={handleReload || this.handleReload}>{'Reload page'}</button>
            <button onClick={this.handleReset}>{'Reset'}</button>
          </div>
          {isDev && (
            <div className={styles.description}>
              <p>{error?.stack}</p>
            </div>
          )}
        </div>
      );
    }

    return (
      <ErrorBoundaryContext.Provider value={{ handleError: this.handleError }}>
        {children}
      </ErrorBoundaryContext.Provider>
    );
  }
}

export default ErrorBoundary;
