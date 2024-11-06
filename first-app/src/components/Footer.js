import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4 w-full fixed bottom-0 left-0">
      <ul className="flex justify-center space-x-4 text-white">
        <li><Link href="/privacy" className="hover:text-gray-300">プライバシーポリシー</Link></li>
        <li><Link href="/terms" className="hover:text-gray-300">利用規約</Link></li>
      </ul>
      <p className="text-center text-gray-400 mt-2">© 2024 会社名. All rights reserved.</p>
    </footer>
  );
}
