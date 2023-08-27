import { Inter } from 'next/font/google'
import BackgroundVideo from './components/BackgroundVideo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>
        <BackgroundVideo />
          <div className='container'>
            <section className='into'>
              <h1>SageRD</h1>
              <p className='subtext'>Coming Soon</p>
            </section>
          </div>
        
      </main>
    </>
  )
}
