import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html>
      <Head>

      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w, d, x, id){
              s=d.createElement('script');
              s.src='https://dtn7rvxwwlhud.cloudfront.net/amazon-connect-chat-interface-client.js';
              s.async=1;
              s.id=id;
              d.getElementsByTagName('head')[0].appendChild(s);
              w[x] =  w[x] || function() { (w[x].ac = w[x].ac || []).push(arguments) };
            })(window, document, 'amazon_connect', '90885fda-65c9-4077-86aa-d57d42b5e84b');
            amazon_connect('styles', { openChat: { color: '#31B237', backgroundColor: '#181818'}, closeChat: { color: '#ffffff', backgroundColor: '#423d33'} });
            amazon_connect('snippetId', 'QVFJREFIaUczMG9CY2pZeGVON3dIRFJwVkJlRHFKcW1kTTRlazcxajNHMVd5VzM1ZWdFb21jOGN5Wm5lMjhVaTVUN3d5QnNiQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNMGxCUm9wa2JjaDIrWWNXSkFnRVFnQ3ZEUGlzZDREcmR5STk0NGJVTzFOcjJQbVRad3F4SnUwbis2NWJVdHI4Z2VQKy9BUWNrdVRHY0NUUGY6OjV3VXQyTlVsTVUyUHdtQURNdG5zTWZ1RWZ1MVhVTmxaM2k2aW9JVHhZc2NoV05WbURja0VtYWZ0cVh2NHJHeEsvZHpaUm5uYkRSV2Q0dTQ1TTI2dUFmREI5Uyt1M0h5SlhDVDkvSUVwZVRsUzZTc2hqenU3Yyt6dWswOEQ0dFpWTzNFODFhemF4Zy9mQjFzU2ZlaEFPVFpscm9kVUZpdz0=');
            amazon_connect('supportedMessagingContentTypes', [ 'text/plain', 'text/markdown' ]);
          `
        }}
      />


        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />

      </body>
    </Html>
  );
}
