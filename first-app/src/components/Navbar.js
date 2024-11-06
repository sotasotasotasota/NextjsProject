import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white">home</Link>
        </li>
        <li>
          <Link href="/about" className="text-white">about</Link>
        </li>
      </ul>
    </nav>
  );
}
