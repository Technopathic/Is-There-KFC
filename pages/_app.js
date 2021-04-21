import React from 'react'
import Head from 'next/head'

import '../styles/globals.css'

const App = (props) => {
  const { Component, pageProps } = props
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="ie=edge" httpEquiv="x-ua-compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        <meta name="og:image" property="og:image" content={process.env.APP_IMAGE} />
        <meta name="og:image:secure_url" property="og:image:secure_url" content={process.env.APP_IMAGE} />

        <title>{process.env.APP_TITLE}</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App