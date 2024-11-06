// src/app/layout.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: '発送トレサビシステム',
  description: '日本語で提供される Next.js アプリ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="m-0 p-0">
        <Navbar />
        <main className="mt-16 p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
