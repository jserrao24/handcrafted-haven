import '@/app/styles/global.css';
import { inter } from '@/app/styles/fonts';
import NavBarWrapper from './components/nav-wrapper';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NavBarWrapper />
        <main className="flex flex-col bg-lightGreen p-6">{children}</main>
      </body>
    </html>
  );
}
