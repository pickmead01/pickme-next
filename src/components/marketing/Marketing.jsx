import React from "react";
import MarketingButtonList from '@components/marketing/marketingButtonList';
import CardWrapper from '@components/marketing/cardWrapper';
import PopularArticles from '@components/marketing/popularArticles';
import PageWrapper from '@components/marketing/PageWrapper';
import { useAppContext } from "@store/context";

import MarketingBanner from "./marketingBanner";
import useInitial from "@services/useInitial";

export default function MarketingPage({
    openTitleName = '',
    commonPageItems,
    categoryList = null,
    popularContents,
    sitemapUrl = '',
}) {
    const { state, dispatch } = useAppContext();
    useInitial({ state, dispatch })
    
    // 假資料用於測試
    // const mockPopularContents = [
    //     {
    //         title: "2024年最新SEO優化策略：提升網站排名的10個關鍵技巧",
    //         sitemapUrl: "seo-optimization-strategies-2024"
    //     },
    //     {
    //         title: "社群媒體行銷完整指南：如何打造高互動率的內容",
    //         sitemapUrl: "social-media-marketing-guide"
    //     },
    //     {
    //         title: "品牌形象設計：從視覺識別到品牌故事的完整規劃",
    //         sitemapUrl: "brand-identity-design-guide"
    //     },
    //     {
    //         title: "數位廣告投放技巧：Google Ads與Facebook廣告的預算分配策略",
    //         sitemapUrl: "digital-advertising-budget-strategy"
    //     },
    //     {
    //         title: "內容行銷實戰：如何撰寫吸引人的部落格文章",
    //         sitemapUrl: "content-marketing-blog-writing"
    //     },
    //     {
    //         title: "電商網站優化指南：提升轉換率的使用者體驗設計",
    //         sitemapUrl: "ecommerce-conversion-optimization"
    //     }
    // ];
    const banner = sitemapUrl === '' && <MarketingBanner />
    const buttonList = <MarketingButtonList categoryList={categoryList} openTitleName={openTitleName} sitemapUrl={sitemapUrl}/>
    const cardWrapper = <CardWrapper commonPageItems={commonPageItems} />
    const cardFooter = <PageWrapper sitemapUrl={sitemapUrl} />
    const popularArticles = <PopularArticles contents={popularContents} sitemapUrl={sitemapUrl}/>

    return (<>
        {banner}
        {buttonList}
        {cardWrapper}
        {cardFooter}
        {popularArticles}
    </>);
}

