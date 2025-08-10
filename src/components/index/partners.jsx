import styles from './css/Partners.module.css';
import { cn } from '@utils/cn';

const Partners = () => {

    const content = () => {
        const content = [];
        for (let i = 46; i <= 90; i++) {
            content.push(<div key={i} className={cn(styles[`partner-item-${i}`],styles['logo'], 'w-[120px] h-[100px] m-2 flex items-center justify-center')}>
            </div>)
        }
        return content;
    }
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="text-[72px] font-[500] text-primary">客戶夥伴</div>
            <div className="text-[32px] font-[200] text-black text-center bg-[#F6BF96] rounded-full px-[40px] py-[4px]">
                100+服務品牌，攜手創造亮眼成績！
            </div>
            <div className="mt-[40px] w-full md:w-[840px] flex flex-wrap items-center justify-center gap-[40px]">
               {content()}
            </div>
        </div>
    )
}

export default Partners;