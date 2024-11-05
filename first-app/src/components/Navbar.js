import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-yanmarRed p-4 w-full fixed top-0 left-0">
      <ul className="flex space-x-4 justify-start pl-4">
        <li><Link href="/" className="text-white hover:text-gray-300">ホーム</Link></li>
        <li><Link href="/about" className="text-white hover:text-gray-300">会社概要</Link></li>
        <li><Link href="/services" className="text-white hover:text-gray-300">サービス</Link></li>
        <li><Link href="/portfolio" className="text-white hover:text-gray-300">実績</Link></li>
        <li><Link href="/blog" className="text-white hover:text-gray-300">ブログ</Link></li>
        <li><Link href="/faq" className="text-white hover:text-gray-300">よくある質問</Link></li>
        <li><Link href="/contact" className="text-white hover:text-gray-300">お問い合わせ</Link></li>
      </ul>
    </nav>
  );
}
