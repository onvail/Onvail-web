import UpcomingPartiesNav from '@/components/nav/UpcomingPartiesNav'
import '../../../app/globals.css'
import '../../../app/styles.css'

export const metadata = {
  title: 'Onvail Music - Upcoming parties',
  description: 'Onvail Music',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <UpcomingPartiesNav />
        <div className='mt-4'>{children}</div>
      </body>
    </html>
  )
}
