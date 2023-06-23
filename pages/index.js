import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import DesktopTopBar from '/pages/Components/nav-bar/desktop-top-bar.js'
import MobileTopBar from '/pages/Components/nav-bar/mobile-top-bar.js'
import TabletTopBar from '/pages/Components/nav-bar/tablet-top-bar'
import DesktopNavBar from '/pages/Components/nav-bar/desktop-nav-bar.js';
import TabletNavBar from '/pages/Components/nav-bar/tablet-nav-bar.js';
import MobileNavBar from '/pages/Components/nav-bar/mobile-nav-bar.js';
import MobileBottomNavBar from '/pages/Components/nav-bar/mobile-bottom-nav-bar.js'
import DesktopContent from '/pages/Components/home-page/desktop-content.js'
import MobileContent from '/pages/Components/home-page/mobile-content.js'
import TabletContent from '/pages/Components/home-page/tablet-content'
import DesktopFooter from '/pages/Components/footer/desktop-footer'
import MobileFooter from '/pages/Components/footer/mobile-footer'
import TabletFooter from '/pages/Components/footer/tablet-footer'
import LogoNav from '/pages/Components/logo-nav/logo-nav';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';
import { schemaData } from '/pages/core/info'

import FormDeLaiThongTin from '/pages/Components/form/form-de-lai-thong-tin';

export default function Home() {
  //Không sử dụng chuột phải
  if (process.browser){
  document.oncontextmenu = new Function("return false;");
  }
  /*Code bảo lưu
      <div className="page-container">
            <div className="page-nav-bar">
              <div className="page-top-bar">
                <div className="page-mobile-top-bar">
                  <MobileTopBar />
                </div>
                <div className="page-tablet-top-bar">
                  <TabletTopBar />
                </div>
                <div className="page-desktop-top-bar">
                  <DesktopTopBar />
                </div>
              </div>
              <div className="page-nav-bar">
                <div className="page-mobile-nav-bar">
                  <MobileNavBar />
                </div>
                <div className="page-tablet-nav-bar">
                  <TabletNavBar />
                </div>
                <div className="page-desktop-nav-bar">
                  <DesktopNavBar />
                </div>
              </div>
              <div className="page-bottom-nav-bar">
                <div className="mobile-bottom-nav-bar">
                  <MobileBottomNavBar />
                </div>
              </div>
            </div>
            <div className="page-content">
              <div className="page-desktop-content">
                  <DesktopContent />
              </div>
              <div className="page-mobile-content">
                <MobileContent />
              </div>
              <div className="page-tablet-content">
                <TabletContent />
              </div>
              <div>
                <FormDeLaiThongTin />
              </div>
            </div>
            
            
            <div className="page-footer">
              <div className="page-desktop-footer">
                <DesktopFooter />
              </div>
              <div className="page-mobile-footer">
                <MobileFooter />
              </div>
              <div className="page-tablet-footer">
                <TabletFooter />
              </div>
            </div>  
          </div>
  */
  return (
    
    <>
        <Head>
          <title>{thongTinTiem2.titleContent}</title>
          <meta name="description" 
            content= {thongTinTiem2.metaDescriptionContent} />
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          <link rel="icon" href={thongTinTiem1.icon} />
          <meta name="geo.position" content={thongTinTiem2.geoPositionContent} />
          <meta name="geo.placename" content={thongTinTiem2.geoPlaceNameContent} />
          <meta name="geo.region" content={thongTinTiem1.geoRegionContent} />
          <link rel="canonical" href={thongTinTiem1.websiteTiem} />
          <link rel="alternate" hrefLang="en" href={thongTinTiem1.websiteTiem} />
          <link rel="alternate" href={thongTinTiem1.websiteTiem} hrefLang="x-default" />

          <meta property='og:title' content={thongTinTiem2.sloganTiem} />
          <meta property='og:image' content={thongTinTiem1.ogImage} />
          <meta property='og:description' 
            content={thongTinTiem2.metaDescriptionContent} />
          <meta property='og:url' content={thongTinTiem1.websiteTiem} />
          <meta property='og:image:width' content='1164' />
          <meta property='og:image:height' content='1032' />
          <meta property="og:type" content='website' />

          <meta name="google-site-verification" content="NHoXXlbVMFbrtORj5fhJFNim8Qdum1k3yeUVIkoM_TQ" />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
        </Head>
        <div className="announcement">
          <div>
            Website đang trong quá trình được xây dựng và sẽ được ra mắt để phục vụ quý anh chị sớm nhất có thể
          </div>
          <div>
          Mọi thông tin liên quan, quý anh chị có thể liên hệ tới Facebook Page chính thức của Best Salon Marketing
          </div>
          <Link href="https://www.facebook.com/BestSalonMarketingAgency/">
            <img className="announcement-image" src="/images/icons/icon-facebook.png" />
          </Link>
        </div>
    </>
  )
}
