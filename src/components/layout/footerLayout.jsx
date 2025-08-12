import Logo from './logo';
import { cn } from '@utils/cn';
import { FaFacebookMessenger, FaFacebook, FaInstagram, FaSquareInstagram } from "react-icons/fa6";
import usePathname from '@services/usePathname';
import Link from 'next/link';

export default function FooterLayout() {

  const pathname = usePathname()
  const footerClassName = pathname === '/' ? 'index-footer' : ''
  return (
    <footer className={cn('footer-wrapper flex flex-col items-center justify-center bg-primary', footerClassName)}>
      <div className='flex text-white text-[24px] md:text-[24px] font-[300] items-center justify-center px-[24px]'>
        <div className='flex items-center justify-center divide-x-2'>
        <div className="px-[16px]">痞米行銷</div>
        <div className="px-[16px]">服務項目</div>
        <div className="px-[16px]">聯絡我們</div>
        <div className="px-[16px]">行銷趨勢</div>
        </div>
        <div className='flex items-center justify-center gap-8 ml-6 flex-col md:flex-row'>
          <FaFacebook size={56} />
          <FaSquareInstagram size={56} />
        </div>
      </div>
      <div className='text-center flex items-center justify-center gap-4 flex-col text-[18px] font-[300] text-white mt-8'>
        <div>Mail: service@pickme.tw</div>
        <div>Copyright ©  2025 痞米行銷有限公司 Pickme Marketing Ltd.</div>
      </div>
    </footer>
  );
}
