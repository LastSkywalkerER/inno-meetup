import 'normalize.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import { Sepolia } from '@thirdweb-dev/chains';
import {
  coinbaseWallet,
  metamaskWallet,
  safeWallet,
  ThirdwebProvider,
  walletConnect,
  walletConnectV1,
} from '@thirdweb-dev/react';
import { FC, lazy, memo, Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';

import { NavBar } from './components/blocks/NavBar';
import { withHelmet } from './components/hocs/with-helmet.hoc';
import { ErrorBoundary } from './components/wrappers/error-boundary';
import { PageWrapper } from './components/wrappers/PageWrapper';
import { queryOptions } from './config/query.config';
import { materialTheme } from './config/theme';
import { GlobalStyle } from './config/theme/GlobalStyle';
import i18n from './config/translations.config';
import { mainHelmet } from './constants/helmets/main';
import { FCWithChildren } from './types';

const Router = lazy(() => import('./components/Router'));

export const queryClient = new QueryClient({ defaultOptions: { queries: queryOptions } });

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

export const App: FC = withHelmet(() => {
  return (
    <AppWrapper>
      <NavBar />
      <PageWrapper>
        <Router />
      </PageWrapper>
    </AppWrapper>
  );
})(mainHelmet);

const AppWrapper: FC<FCWithChildren> = memo(({ children }) => {
  return (
    <ErrorBoundary>
      <Suspense>
        <CacheProvider value={muiCache}>
          <ThemeProvider theme={materialTheme}>
            <GlobalStyle />
            <ThirdwebProvider
              activeChain={Sepolia}
              supportedWallets={[
                coinbaseWallet(),
                metamaskWallet(),
                safeWallet(),
                walletConnect(),
                walletConnectV1(),
              ]}
            >
              <I18nextProvider i18n={i18n}>
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
              </I18nextProvider>
            </ThirdwebProvider>
          </ThemeProvider>
        </CacheProvider>
      </Suspense>
      {/* <Analytics /> */}
    </ErrorBoundary>
  );
});
