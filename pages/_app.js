import Layout from '@/comps/Layout'
import '@/styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Script 
      strategy='afterInteractive'
      src="https://www.googletagmanager.com/gtag/js?id=G-MYBLBE82C9" />

      <Script id='google-analytics' strategy='afterInteractive'>

        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', 'G-MYBLBE82C9');
        `}

      </Script>

      

    </Layout>
  )
}
