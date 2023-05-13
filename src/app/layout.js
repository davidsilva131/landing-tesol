import Overlay from '@/components/Overlay'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tesol',
  description: 'Tejido Solidario es un proceso barrial cuyo objetivo es construir una comunidad basada en la solidaridad y apoyo mutuo.',
}

export default function RootLayout ({ children }) {
  return (
    <html lang="es" className='w-full h-full m-0 p-0'>
      <body className={`${inter.className} w-full h-full m-0 p-0 overscroll-none bg-[#151515] text-gray-200`}>
        <Overlay />
        {children}
      </body>
    </html>
  )
}
