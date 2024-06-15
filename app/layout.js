// import { Inter, Poppins, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import './styles.css'

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Onvail Music',
  description: 'Onvail Music',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
