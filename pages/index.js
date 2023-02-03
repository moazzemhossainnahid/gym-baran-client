import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '@/Components/Header/Navbar'
import Footer from '@/Components/Footer/Footer'
import Testimonials from '@/Components/Testimonials/Testimonials'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>GYM Baran</title>
        <meta name="description" content="it's a Body Builing application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Navbar />
        <Testimonials/>
        <Footer />
      </main>
    </>
  )
}
