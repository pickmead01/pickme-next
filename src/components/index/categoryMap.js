const categoryMap = [
  {
    className: 'advertising',
    zn_title: '全方位行銷規劃',
    en_title: 'Advertising\nAgency',
    content: `最全面的一條龍行銷服務\n數位行銷比想像中的多還多`,
    sitemapUrl: process.env.NEXT_PUBLIC_ADVERTISING || '#'
  },
  {
    //! className should be changed
    className: 'event-planning',
    zn_title: '數位媒體採購',
    en_title: 'Event Planning',
    content: `制定最適性的媒體安排\n預算每一份都在刀口上`,
    sitemapUrl: process.env.NEXT_PUBLIC_EVENT_PLANNING || '#'
  },
  {
    className: 'social-media',
    zn_title: '廣告優化分析',
    en_title: 'Social Media',
    content: `廣告數據即時監控調整\n把關成本效益最大化`,
    sitemapUrl: process.env.NEXT_PUBLIC_SOCIAL_MEDIA || '#'
  },
  {
    className: 'cis',
    zn_title: '創意內容企劃',
    en_title: 'Digital Image\nDesign',
    content: `各式議題切角、靈感發想\n找出產品亮點、放大優勢`,
    sitemapUrl: process.env.NEXT_PUBLIC_CIS || '#'
  },
]

export default categoryMap