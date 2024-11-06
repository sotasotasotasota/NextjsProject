export default function Contact() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-4xl font-bold mb-4 text-yanmarRed">お問い合わせ</h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl text-center">
          ご質問があれば、お気軽にお問い合わせください。
        </p>
        <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <label className="block mb-4">
            <span className="text-gray-700">お名前</span>
            <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">メールアドレス</span>
            <input type="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">メッセージ</span>
            <textarea className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"></textarea>
          </label>
          <button type="submit" className="w-full bg-yanmarRed text-white py-2 rounded-md hover:bg-red-700 transition">
            送信
          </button>
        </form>
      </div>
    );
  }
  