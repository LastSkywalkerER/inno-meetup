import { ErrorBoundaryProps } from '@/components/wrappers/error-boundary';

export type Props = Omit<ErrorBoundaryProps, 'children' | 'classes'>;
