import React from 'react';

export default function BtnMarketingWrapper({ children, position, sitemapUrl }) {
  return <div className={`btn-marketing-wrapper ${position} ${sitemapUrl ? '!mt-[72px]' : ''}`}>{children}</div>;
}
