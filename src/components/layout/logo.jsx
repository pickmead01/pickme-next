import logo_white from '@assets/logo/logo_white.webp';
import logo_gray from '@assets/logo/logo_gray.webp';
import nav_logo from '@assets/content/PICKME_WEB_B-01.svg';
import logo_bg from '@assets/content/PICKME_WEB_B-02.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ color = 'gray', position = "header" }) {
  const logo = color === 'gray' ? logo_gray : logo_white

  return (
    <Link
      className={`logo ${position}`}
      href={'/'}
      style={{
        overflow: 'hidden',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Image
        title="Musense Marketing"
        src={logo_bg.src}
        alt="Musense Marketing"
        width={200}
        height={200}
        style={{
          minWidth: 462,
          marginTop: 307,
          marginLeft: -101,
          pointerEvents: 'none',
        }}
      />
      <Image
        title="Musense Marketing"
        src={nav_logo.src}
        alt="Musense Marketing"
        width={200}
        height={200}
        style={{
          position: 'absolute',
        }}
      />
    </Link>
  )
}
