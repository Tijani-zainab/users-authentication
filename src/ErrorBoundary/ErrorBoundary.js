import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import styles from './ErrorBoundary.module.css';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className={styles.errorBoundaryPage}>
      <p>Something's not right:</p>
      <pre>{error.message}</pre>
      <button className={styles.tryAgainBtn} onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const ErrorBoundary = ({ children }) => {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;

