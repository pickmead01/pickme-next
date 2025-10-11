import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Custom500() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    router.push('/');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="mb-6">
                    <div className="text-6xl text-red-500 mb-4">⚠️</div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">服務器錯誤</h1>
                    <p className="text-gray-600">很抱歉，服務器遇到了問題</p>
                </div>
                
                <div className="mb-6 p-4 bg-red-50 rounded-lg">
                    <h2 className="text-lg font-semibold text-red-800 mb-2">可能的原因：</h2>
                    <ul className="text-sm text-red-700 text-left space-y-1">
                        <li>• 後端 API 服務器未運行</li>
                        <li>• 網路連接問題</li>
                        <li>• 服務器內部錯誤</li>
                        <li>• 環境配置問題</li>
                    </ul>
                </div>

                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                    <h2 className="text-lg font-semibold text-blue-800 mb-2">解決方法：</h2>
                    <ul className="text-sm text-blue-700 text-left space-y-1">
                        <li>• 檢查網路連接</li>
                        <li>• 重新整理頁面</li>
                        <li>• 稍後再試</li>
                        <li>• 聯繫技術支援</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <button
                        onClick={() => window.location.reload()}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        重新整理頁面
                    </button>
                    
                    <button
                        onClick={() => router.push('/')}
                        className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        返回首頁
                    </button>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                    {countdown > 0 ? `${countdown} 秒後自動返回首頁` : '正在返回首頁...'}
                </p>
            </div>
        </div>
    );
}