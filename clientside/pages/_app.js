import Head from 'next/head';
import Layout from '@components/layout/layout';
import '@styles/globals.css';
import '@styles/index.css';

import { NotificationContextProvider } from 'store/notification-context';
import { AppProvider } from '../store/context';
import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <AppProvider>
        <Layout>
          <Head>
            <title>Code World</title>
            <meta
              name="description"
              content="Code world offering bright futures for young people!"
            />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>

          <ParallaxProvider scrollAxis="vertical">
            <Component {...pageProps} c />
          </ParallaxProvider>
        </Layout>
      </AppProvider>
    </NotificationContextProvider>
  );
}

export default MyApp;
