import Head from 'next/head'
import MiMenuNinosApp from '../components/MiMenuNinosApp'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MiMenuNiños</title>
      </Head>
      <main className="min-h-screen bg-blue-50">
        <MiMenuNinosApp />
      </main>
    </div>
  )
}