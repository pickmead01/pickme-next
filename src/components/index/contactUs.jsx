import React, { useRef, useState, useEffect } from 'react';
import styles from './css/contactUs.module.css';
import Modal from "./modal";
import { cn } from '@utils/cn';
import sendEmail from "@services/emailService";
import EnterBox from "./EnterBox";
import CheckBoxList from './CheckBoxList';
import Image from 'next/image';
import contactUsTitle from '@assets/index/PICKME_WEB-91.svg';
import contactUsSubTitle from '@assets/index/PICKME_WEB-92.svg';
import { contactUs, imageDown } from "@components/index/images";
import useLoadImage from "@services/useLoadImage";
import { createPortal } from 'react-dom'
import useModalRootRef from '@services/useModalRootRef'

const enterBoxList = [
  { title: '姓名', name: 'name', type: 'text' },
  { title: '電子信箱', name: 'email', type: 'email' },
  { title: '聯絡電話', name: 'phone', type: 'tel' },
  { title: '品牌/公司名稱', name: 'company-name', type: 'text' },
  { title: '品牌官網', name: 'website', type: 'url' },
]

export default function ContactUs() {


  const [modalIsOpen, setIsOpen] = useState(false);
  const [headerContent, setHeaderContent] = useState(null);
  const [bodyContent, setBodyContent] = useState(null);

  const modalRoot = useModalRootRef()

  const contactUsImage = useLoadImage(contactUs);
  const imageDownImage = useLoadImage(imageDown);

  const checkBoxListRef = useRef(null);
  function getAskString(checkList) {
    if (!checkList) return
    let askString = '';
    for (const { select, alias } of checkList.values()) {
      select === 1 && (askString += `${alias}/`)
    }
    return askString.lastIndexOf("/") === askString.length - 1 && (askString = askString.slice(0, -1))
  }
  function getFormData(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("🚀 ~ file: contactUs.jsx:34 ~ getFormData ~ Object.fromEntries(formData):", Object.fromEntries(formData))

    const askString = getAskString(checkBoxListRef.current)
    const userData = Object.fromEntries(formData);
    const templateParams = {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      companyName: userData['company-name'],
      website: userData.website,
      askString: askString,
      ask: userData.ask
    };
    console.log("🚀 ~ file: contactUs.jsx:46 ~ getFormData ~ templateParams:", templateParams)
    sendEmail(templateParams)
      .then(message => {
        console.log("🚀 ~ file: contactUs.jsx:48 ~ subFormData ~ message:", message)
        openModal()
      })
      .catch(err => {
        console.log("🚀 ~ file: contactUs.jsx:52 ~ subFormData ~ err:", err)

        openModal(err)
      })
  }
  function openModal(err) {
    if (err) {
      setHeaderContent("資料錯誤")
      if (typeof err === 'string') {
        const errorMessage = '「請填寫完整欄位資訊後再點擊送出」';
        setBodyContent(errorMessage)
      } else {
        setBodyContent('出了點問題，請稍後再試！')
      }
    } else {
      setHeaderContent()
      setBodyContent()
    }
    setIsOpen(true)
  }
  function closeModal() {
    console.log("🚀 ~ file: contactUs.jsx:49 ~ closeModal ~ closeModal: clicked!!!!!")

    setIsOpen(false)
  }

  return (
    <div id="contact" className={cn(styles['contact-us-wrapper'], 'md:pb-[400px] pb-[200px]')}>
      {
        modalRoot && createPortal(
          <Modal
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            headerContent={headerContent}
            bodyContent={bodyContent}
          />,
          modalRoot
        )
      }
      <div className="w-full relative">
        <div className={cn(styles['bg1'], '')}>
          <div className='text-white flex flex-col items-start justify-center absolute top-[80px] left-[50vw] md:left-[300px] md:translate-x-0 translate-x-[-50%]'>
            <Image src={contactUsTitle.src} className='mb-[20px]' alt="聯絡我們" width={320} height={100} />
            <Image src={contactUsSubTitle.src} alt="聯絡我們" width={520} height={100} />
            {/* <div className="text-[60px] font-[500] md:text-[80px]">聯絡我們</div>
            <div className="text-[24px] font-[400] md:text-[40px]">免費策略諮詢</div>
            <div className="text-[24px] font-[200] md:text-[40px]">立即留下您的聯絡資訊</div>
            <div className="text-[24px] font-[200] md:text-[40px]">我們將安排專業顧問與您接洽</div> */}
          </div>
        </div>
        <div className={cn(styles['bg2'], 'hidden xl:block absolute right-0 bottom-0')}></div>
      </div>
      {/* {contactUsImage && <Image
        alt=""
        src={contactUsImage.default.src}
        width={contactUsImage.default.width}
        height={contactUsImage.default.height}
        style={{
          width: '100%',
          objectFit: 'contain'
        }}
      />} */}
      <div className={styles['contact-us-content']}>
        {/* <div className={styles['img-wrapper']}>
          {imageDownImage && <Image
            alt=""
            className={styles['image-down']}
            src={imageDownImage.default.src}
            width={imageDownImage.default.width}
            height={imageDownImage.default.height}
            style={{
              width: '100%',
              objectFit: 'contain'
            }}
          />}
          <div className={styles['orange-box']} />
        </div> */}
        <form
          name='contactForm'
          className={styles['contact-us-form']}
          onSubmit={getFormData}
        >

          <div className={cn(styles['left-form'], 'mb-[20px]')}>
            {
              enterBoxList.map((enterBox, index) => (
                <EnterBox
                  styles={styles}
                  key={index}
                  title={enterBox.title}
                  name={enterBox.name}
                  type={enterBox.type}
                />
              ))
            }
          </div>

          <div className={styles['right-form']}>

            <CheckBoxList
              styles={styles}
              checkBoxListRef={checkBoxListRef}
            />
            <EnterBox
              large
              styles={styles}
              title={'其他需求'}
              name={'ask'}
              type={'text'}
            />
            <button
              title='send button'
              className={cn(styles['send-button'], 'w-[180px] h-[80px] bg-primary text-white rounded-full text-[28px]')}
              type='submit'
            >
              送出
            </button>
          </div>
        </form>
      </div>
      <div className={cn(styles['bg3'], 'md:block hidden absolute bottom-[-33px] left-[24%]')}></div>
    </div>
  );
}


