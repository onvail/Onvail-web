import '../../../app/globals.css'
import '../../../app/styles.css'
import AccountDetailsNav from '@/components/nav/AccountDetailsNav'

export const metadata = {
  title: 'Onvail Music - Account',
  description: 'Onvail Music',
}


export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <AccountDetailsNav />
        <div className='mt-4'>{children}</div>
      </body>
    </html>
  )
}
