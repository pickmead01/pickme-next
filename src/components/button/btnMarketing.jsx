import Link from "next/link";
import React from "react";
import image7 from '@assets/marketing/PICKME_WEB_NN2-07.svg'
import image8 from '@assets/marketing/PICKME_WEB_NN2-08.svg'
import image20 from '@assets/marketing/PICKME_WEB_NN2-20.svg'
import image21 from '@assets/marketing/PICKME_WEB_NN2-21.svg'
import image33 from '@assets/marketing/PICKME_WEB_NN2-33.svg'
import Image from "next/image";

const imageMap = {
  '回首頁': image7,
  '看更多文章': image8,
  '上一篇': image20,
  '下一篇': image21,
  '返回': image33,
}

export default function BtnMarketing({
  name,
  to,
  title,
  className = '',
  type = "link",
  callback = null,
  active = false,
  cancelHoverState = false,
}) {
  console.log('erte', name, type)
  const linkProps = {
    title: title,
    className: `btn-marketing ${className}`,
    href: to,
    onClick: callback
  }

  const buttonProps = {
    title: title,
    className: cancelHoverState
      ? `btn-marketing ${className} `
      : `btn-marketing ${className} ${active ? "active" : ""}`,
    onClick: callback,
  }

  const getImage = (key) => {
    if (imageMap[key]) {
      return <Image src={imageMap[key]} alt={key} width={162} height={39} />
    }
    return key
  }
  const linkComponent = <Link {...linkProps}>{getImage(name)}</Link>;
  const buttonComponent = <button {...buttonProps}>{getImage(title)}</button>
  const titleComponent = <div {...buttonProps} style={{ cursor: 'default' }}>{title}</div>;

  switch (type) {
    case "link":
      return linkComponent;
    case "title":
      return titleComponent;
    case "button":
      return buttonComponent;
    default:
      return linkComponent;
  }
}
