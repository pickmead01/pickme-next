import React from 'react'
import Link from "next/link";
import styles from './css/fbMessengerButton.module.css'
import { FaFacebookMessenger } from "react-icons/fa6";
export default function FbMessengerButton() {

  return (
    <div className={styles['fb-container']}>
      <Link
        className={styles['fb-button']}
        href="http://m.me/musense.marketing"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaFacebookMessenger size={24} /> 向我們詢問
      </Link>
    </div>
  )
}
