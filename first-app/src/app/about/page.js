export default function About() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-4xl font-bold mb-4 text-yanmarRed">会社概要</h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl text-center">
          当社の歴史、使命、ビジョンについてご紹介します。
        </p>
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-yanmarRed mb-2">会社の歴史</h2>
            <p className="text-gray-700">当社は100年以上の歴史を持ち、技術革新を通じて社会に貢献してきました。</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-yanmarRed mb-2">ミッション</h2>
            <p className="text-gray-700">私たちの使命は、持続可能な社会の実現に向けた革新的なソリューションを提供することです。</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-yanmarRed mb-2">ビジョン</h2>
            <p className="text-gray-700">世界中で信頼される企業として、次世代に続く価値を提供します。</p>
          </div>
        </div>
      </div>
    );
  }
  