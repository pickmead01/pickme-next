import React, { useEffect } from 'react';
import styles from './css/about.module.css';
import AOS from 'aos';
import Link from "next/link";
import { cn } from '@utils/cn';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { useAppContext } from "@store/context";
import useInitial from "@services/useInitial";
import useLoadImage from "@services/useLoadImage";

import {
  bg,
  welcome,
  top,
  musenseCanHelp,
  reply,
  triangleBox,
  triangleRangeOrange_right,
  triangleRangeOrange_left
} from "@components/index/images";
import logo from '@assets/logo/logo_color.svg';

export default function About() {
  const { state, dispatch } = useAppContext();
  useInitial({
    state,
    dispatch
  });

  const backgroundImage = useLoadImage(bg);
  const welcomeImage = useLoadImage(welcome);
  const musenseCanHelpImage = useLoadImage(musenseCanHelp);
  const topImage = useLoadImage(top);
  const replyImage = useLoadImage(reply);
  const triangleBoxImage = useLoadImage(triangleBox);
  const triangleRangeOrangeRightImage = useLoadImage(triangleRangeOrange_right);
  const triangleRangeOrangeLeftImage = useLoadImage(triangleRangeOrange_left);

  useEffect(() => {

    AOS.init({
      offset: 500,
      delay: 50, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms);
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <div className={styles['about-us']}>
      <div id='about' className="flex flex-col items-center w-full h-auto md:h-[1724px] md:max-h-[1724px] relative bg-gradient-to-b from-[#fff] from-30% to-[#ED781E]">
        <div className='relative mt-24 z-10 md:mr-80 scale-[60%] md:scale-100'>
          <div className={styles['logo-color']} />
          <div className="flex flex-col items-center">
            <div className="font-myriad text-[62px] font-normal whitespace-nowrap">抓住流量 掌握商機</div>
            <div className="font-myriad text-[38px] text-primary whitespace-nowrap">Pickme投放精準出擊!</div>
            <Link
              className={styles['contact-button']}
              href="http://m.me/musense.marketing"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className={styles['contact-button-icon']}>
                <div>立即免費諮詢</div>
              </div>
            </Link>
          </div>
          <div className={styles['bg1']}></div>
          <div className={styles['bg2']}></div>
        </div>
        <div 
          className={cn('w-[900px] h-[790px] top-[-200px] md:top-[55px] relative md:ml-[600px] md:absolute ', styles['bg-container'])}
        >
            <div className={styles['bg12']}></div>
            <div className={styles['bg3']}></div>

            <div className={styles['bg4']}></div>
            <div className={styles['bg5']}></div>
            <div className={styles['bg6']}></div>
          </div>
          <div className={cn(styles['bg13'], 'hidden md:block')}></div>
      </div>

      <div className='md:pb-[100px] flex flex-col items-center w-full mt-[300px] md:mt-[-657px] relative bg-gradient-to-br from-transparent from-30% to-[#DCDCDC]'>
        <div className='w-full min-w-[1920px] flex flex-col items-center  md:scale-100 scale-[60%] origin-top'>
          {/* <div className={styles['bg7']} /> */}
          <div className={cn(styles['bg8'], 'flex flex-col items-center justify-center text-white')}>
            <div className={styles['bg10']} />
            <div className={styles['bg11']} />
            <div className='text-[76px]'>全方位行銷團隊</div>
            <div className='text-[40px] font-[200] flex items-center mt-[28px]'>
              Pickme痞米團隊擁有
              <div className='text-[36px] font-[600]'>多產業別</div>
              服務經驗
            </div>
            <div className='text-[40px] font-[200] flex items-center'>
              執行
              <div className='text-[36px] font-[600]'>數百間</div>
              品牌廣告、操盤
              <div className='text-[36px] font-[600]'>上千萬</div>
              行銷預算
            </div>
            <div className='text-[40px] font-[200] mt-[28px]'>依產品特性打造專屬客製的行銷策略</div>
            <div className='text-[40px] font-[200]'>從頭到尾一手包辦、成為你的行銷後盾！</div>
           
            <div className={styles['bg9']} />
          </div>
        </div>
      </div>

      <div className='py-[40px] z-10 relative w-full flex flex-col items-center h-[1155px] scale-[70%] md:scale-100'>
        <div className='text-[72px] font-[400] text-primary font-myriad whitespace-nowrap'>你有以下行銷問題嗎？</div>
        <div className={cn(styles['bg14'], 'flex flex-col justify-center text-white text-[48px] pl-[350px]')}>
          <p>投放廣告卻看不見成效</p>
        </div>
        <div className={cn(styles['bg15'], 'flex flex-col justify-center my-[20px] text-white text-[48px] pl-[350px]')}>
          <p>行銷管道好多，</p>
          <p>但哪一個才適合我？</p>
        </div>
        <div className={cn(styles['bg16'], 'flex flex-col justify-center text-white text-[48px] pl-[350px]')}>
          <p>沒人手經營社群</p>
          <p>想不到發什麼內容</p>
        </div>
        <div className={cn(styles['bg17'], 'mt-[40px]')}></div>
      </div>
    </div>
  );
}

function BubbleBoxMobile() {
  return <div className={'bubble-box-mobile'}>
    <div>
      <div
        className={'orange-bubble-product'} >
        要怎麼讓消費者能夠快速地<br />了解我的產品特色？
      </div>
      <div
        className={'orange-bubble-view'}>
        如何在網路上增加瀏覽數，<br />並且讓客人願意付費呢？
      </div>
    </div>
    <div>
      <div
        className={'blue-bubble-seo'} >
        公司要辦發新品表會，<br />該怎麼執行才好？
      </div>
      <div
        className={'blue-bubble-time'} >
        為什麼花錢做一堆廣告<br />卻沒有效果？
      </div>
    </div>
  </div>;
}

function BubbleBox() {
  return <div className={'bubble-box'}>
    <div>
      <div
        className={'orange-bubble-left'}
        data-aos='orange-slide-left'
        data-aos-delay='0' >
        如何在網路上增加瀏覽數，<br />並且讓客人願意付費呢？
      </div>
      <div
        className={'orange-bubble-right'}
        data-aos='orange-slide-right'
        data-aos-delay='400' >
        要怎麼讓消費者能夠快速地<br />了解我的產品特色？
      </div>
    </div>
    <div>
      <div
        className={'blue-bubble-left'}
        data-aos='blue-slide-left'
        data-aos-delay='600' >
        公司要辦發新品表會，<br />該怎麼執行才好？
      </div>
      <div
        className={'blue-bubble-right'}
        data-aos='blue-slide-right'
        data-aos-delay='1000' >
        為什麼花錢做一堆廣告<br />卻沒有效果？
      </div>
    </div>
  </div>;
}

