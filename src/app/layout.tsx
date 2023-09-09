import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './Providers';

export const metadata: Metadata = {
  title: 'Gabriel Portfolio V1',
  description: 'My first portfolio site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='dark:bg-stone-900'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
