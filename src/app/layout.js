import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: "400" })


export const metadata = {
  title: 'Teorema De Bayes by @sr_all3x',
  description: 'so por diversão',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${roboto.varible} font-roboto`}>{children}</body>
    </html >
  )
}
