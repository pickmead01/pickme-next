/**
 * 環境配置檢查工具
 * 用於檢查必要的環境變數是否正確配置
 */

export const checkEnvironment = () => {
    const requiredEnvVars = {
        'NEXT_PUBLIC_SERVER_URL': process.env.NEXT_PUBLIC_SERVER_URL,
        'NEXT_PUBLIC_EMAIL_SERVICE_KEY': process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY,
        'NEXT_PUBLIC_EMAIL_TEMPLATE_KEY': process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_KEY,
        'NEXT_PUBLIC_EMAIL_PUBLIC_KEY': process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
    };

    const missingVars = [];
    const configuredVars = [];

    Object.entries(requiredEnvVars).forEach(([key, value]) => {
        if (!value || value === 'your_service_key_here' || value === 'your_template_key_here' || value === 'your_public_key_here') {
            missingVars.push(key);
        } else {
            configuredVars.push(key);
        }
    });

    return {
        isValid: missingVars.length === 0,
        missingVars,
        configuredVars,
        serverUrl: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:8000'
    };
};

export const logEnvironmentStatus = () => {
    const status = checkEnvironment();
    
    console.log('🔧 環境配置檢查結果:');
    console.log('📍 服務器 URL:', status.serverUrl);
    
    if (status.configuredVars.length > 0) {
        console.log('✅ 已配置的環境變數:', status.configuredVars);
    }
    
    if (status.missingVars.length > 0) {
        console.warn('⚠️ 缺少的環境變數:', status.missingVars);
        console.warn('請創建 .env.local 文件並設置以下變數:');
        status.missingVars.forEach(varName => {
            console.warn(`${varName}=your_value_here`);
        });
    }
    
    return status;
};

// 在開發環境中自動檢查
if (process.env.NODE_ENV === 'development') {
    logEnvironmentStatus();
}

