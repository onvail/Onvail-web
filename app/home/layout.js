import HomeNavbar from '@/components/nav/HomeNavbar'
import '../globals.css'
import '../styles.css'

export const metadata = {
  title: 'Onvail Music - Home',
  description: 'Onvail Music',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <HomeNavbar />
        <div className='mt-4'>{children}</div>
      </body>
    </html>
  )
}
