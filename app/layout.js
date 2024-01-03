import Navbar from './components/navbar/Navbar';
import './globals.css';
import Providers from './Providers';
import { Source_Sans_Pro } from 'next/font/google';

const ssp = Source_Sans_Pro({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ssp.className}>
        <Providers>
          <header>
            <Navbar />
          </header>
          {/* <SkeletonCard /> */}
          <body>{children}</body>
        </Providers>
      </body>
    </html>
  );
}
