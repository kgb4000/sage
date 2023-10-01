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
              <div className='relative'>
                <h1>SageRD<span className='sup'>&trade;</span></h1>
              </div>
              <p className='subtext'>Illuminate Data</p>
            </section>
          </div>
        
      </main>
    </>
  )
}
