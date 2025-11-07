import Logo from './logo';
import { cn } from '@utils/cn';
import { FaFacebookMessenger, FaFacebook, FaInstagram, FaSquareInstagram } from "react-icons/fa6";
import usePathname from '@services/usePathname';
import Link from 'next/link';
import { useCallback } from 'react';

export default function FooterLayout() {

  const pathname = usePathname()
  const footerClassName = pathname === '/' ? 'index-footer' : ''

  // 自定義滾動處理函數
  const handleScrollClick = useCallback((e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const { top } = element.getBoundingClientRect();
      window.scrollBy({
        top: top - 80, // 調整 offset 以配合 header 高度
        behavior: 'smooth',
      });
    }
  }, []);
  return (
    <footer className={cn('footer-wrapper flex flex-col items-center justify-center bg-primary', footerClassName)}>
      <div className='flex text-white text-[24px] md:text-[24px] font-[300] items-center justify-center px-[24px]'>
        <div className='flex items-center justify-center divide-x-2'>
        <Link href="/" className="text-white px-[16px]">痞米行銷</Link>
        <Link 
          href="/#service" 
          className="text-white px-[16px]"
          onClick={(e) => pathname === '/' && handleScrollClick(e, '#service')}
        >
          服務項目
        </Link>
        <Link 
          href="/#contact" 
          className="text-white px-[16px]"
          onClick={(e) => pathname === '/' && handleScrollClick(e, '#contact')}
        >
          聯絡我們
        </Link>
        <Link href="/trend" className="text-white px-[16px]" target="_blank" rel="noopener noreferrer">行銷趨勢</Link>
        </div>
        <div className='flex items-center justify-center gap-8 ml-6 flex-col md:flex-row'>
          <Link href="https://www.facebook.com/pickme.no1" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <FaFacebook className="fill-white" size={56} />
          </Link>
          <Link href="https://www.instagram.com/pickme.tw1/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <FaSquareInstagram className="fill-white" size={56} />
          </Link>
        </div>
      </div>
      <div className='text-center flex items-center justify-center gap-4 flex-col text-[18px] font-[300] text-white mt-8'>
        <div>Mail: service@pickme.tw</div>
        <div>Copyright ©  2025 痞米行銷有限公司 Pickme Marketing Ltd.</div>
      </div>
    </footer>
  );
}
