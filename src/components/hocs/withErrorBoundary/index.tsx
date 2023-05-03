import { FC } from 'react';

import { ErrorBoundary } from '@/components/wrappers/error-boundary';

import { Props } from './types';

// eslint-disable-next-line @typescript-eslint/ban-types
export function withErrorBoundary<T extends {}>(
  Component: FC<T>,
  errorBoundaryProps: Props = {},
): FC<T> {
  return (props: T): React.ReactElement => {
    return (
      <ErrorBoundary {...errorBoundaryProps}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}
