import { Inter } from 'next/font/google';
import './globals.css';
import Naver from './Compment/Naver';
import Footer from './Compment/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Naver></Naver>
        {children}

        <Footer></Footer>
      </body>
    </html>
  );
}
