export default function Services() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-4xl font-bold mb-4 text-yanmarRed">サービス</h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl text-center">
          当社の提供するサービスについてご紹介します。
        </p>
        <ul className="w-full max-w-md space-y-4">
          <li className="bg-white p-4 rounded-lg shadow-md">サービス1</li>
          <li className="bg-white p-4 rounded-lg shadow-md">サービス2</li>
          <li className="bg-white p-4 rounded-lg shadow-md">サービス3</li>
        </ul>
      </div>
    );
  }
  