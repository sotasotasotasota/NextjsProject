import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-blue-500">
        <h1 className="text-4xl font-bold text-white">ここはホームページです</h1>
      </div>
    </div>
  );
}
