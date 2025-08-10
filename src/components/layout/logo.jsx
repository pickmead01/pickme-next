import logo_white from '@assets/logo/logo_white.webp';
import logo_gray from '@assets/logo/logo_gray.webp';
import nav_logo from '@assets/content/nav_logo.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ color = 'gray', position = "header" }) {
  const logo = color === 'gray' ? logo_gray : logo_white

  return <Link style={{ height: '100%' }} className={`logo ${position}`} href={'/'}>
      <Image
        title="Musense Marketing"
        src={nav_logo.src}
        alt="Musense Marketing"
        width={logo.width}
        height={logo.height}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
  </Link>
}
