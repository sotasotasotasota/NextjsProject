export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4 text-yanmarRed">ホームページ</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-2xl text-center">
        ここはホームページです。
      </p>
      <button className="bg-yanmarRed text-white py-2 px-4 rounded-lg hover:bg-red-700 transition">
        詳しく見る
      </button>
    </div>
  );
}
