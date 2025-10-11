import axios from "axios";

// 創建 axios 實例並添加錯誤處理
export const instance = (apiUrl) => {
    const axiosInstance = axios.create({
        withCredentials: 'include',
        baseURL: apiUrl || process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:8000',
        timeout: 10000, // 10秒超時
    });

    // 添加響應攔截器來處理錯誤
    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            console.error('API 請求錯誤:', {
                url: error.config?.url,
                method: error.config?.method,
                status: error.response?.status,
                message: error.message,
                baseURL: error.config?.baseURL
            });
            
            // 如果是 500 錯誤，提供更友好的錯誤信息
            if (error.response?.status === 500) {
                error.message = '服務器內部錯誤，請稍後再試或聯繫管理員';
            } else if (error.code === 'ECONNREFUSED' || error.code === 'ERR_NETWORK') {
                error.message = '無法連接到服務器，請檢查網路連接或服務器狀態';
            }
            
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export const formInstance = (apiUrl) => {
    const axiosInstance = axios.create({
        headers: {
            "Content-type": "multipart/form-data",
        },
        withCredentials: 'include',
        baseURL: apiUrl || process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:8000',
        timeout: 10000,
    });

    // 添加相同的錯誤處理
    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            console.error('表單 API 請求錯誤:', {
                url: error.config?.url,
                method: error.config?.method,
                status: error.response?.status,
                message: error.message,
                baseURL: error.config?.baseURL
            });
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};