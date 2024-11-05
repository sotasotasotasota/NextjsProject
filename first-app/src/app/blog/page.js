export default function Blog() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-4xl font-bold mb-4 text-yanmarRed">ブログ</h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl text-center">
          最新の記事やニュースをご覧ください。
        </p>
        <ul className="w-full max-w-md space-y-4">
          <li className="bg-white p-4 rounded-lg shadow-md">記事1</li>
          <li className="bg-white p-4 rounded-lg shadow-md">記事2</li>
          <li className="bg-white p-4 rounded-lg shadow-md">記事3</li>
        </ul>
      </div>
    );
  }
  