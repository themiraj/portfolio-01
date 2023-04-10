import '@/styles/globals.css'

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Layout from '@/Components/layout'


export default function App({ Component, pageProps }: AppProps) {
  return <Layout> <Component {...pageProps} /> </Layout>
}