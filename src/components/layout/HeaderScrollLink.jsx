import React, { useCallback, useEffect, useRef } from 'react';
import styles from './css/headerScrollLink.module.css'
import buttonAbout from '@assets/button/PICKME_WEB-06.svg'
import buttonService from '@assets/button/PICKME_WEB-07.svg'
import buttonContact from '@assets/button/PICKME_WEB-08.svg'
import buttonMarketing from '@assets/button/PICKME_WEB-09.svg'
import Link from 'next/link';
import navMap from './navMap'
import { useAppContext } from "@store/context";
import Image from 'next/image';

const buttonMap = new Map([
  ['About', buttonAbout],
  ['Service', buttonService],
  ['Contact', buttonContact],
  ['Marketing', buttonMarketing],
])

const HeaderScrollLink = ({
  offset,
  href = '',
  to,
  name,
  className,
  disableScroll = false,
}) => {
  const { dispatch } = useAppContext();
  const destRef = useRef(null)

  useEffect(() => {
    if (!to) return
    destRef.current = document.querySelector(to)
  }, [to]);

  const scrollHandler = useCallback((e, destObject) => {
    dispatch({ type: 'CLOSE_MENU' })
    if (!destObject) return
    if (disableScroll) return
    e.preventDefault()
    const { top: destTop } = destObject.getBoundingClientRect()
    window.scrollBy({
      top: destTop + offset,
      behavior: 'smooth',
    })
  }, [dispatch, offset, disableScroll]);

  const color = name === 'marketing' ? 'blue' : 'orange'
  const mainClassName = className ? className : styles['nav-button']

  return (
    <Link
      title={navMap.get(name).name.ch}
      onClick={(e) => scrollHandler(e, destRef.current)}
      href={href}
      className={mainClassName}
    >
      <div className={styles['nav-text-wrapper']}>
        <Image src={buttonMap.get(navMap.get(name).name.en)} alt="buttonAbout" width="auto" height={25} />
      </div>
    </Link>
  )
}

export default HeaderScrollLink