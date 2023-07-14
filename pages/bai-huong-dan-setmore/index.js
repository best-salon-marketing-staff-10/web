import DesktopNavBar from '/pages/Components/nav-bar/desktop-nav-bar.js';
import MobileNavBar from '/pages/Components/nav-bar/mobile-nav-bar.js';
import TabletNavBar from '/pages/Components/nav-bar/tablet-nav-bar.js';
import MobileBottomNavBar from '/pages/Components/nav-bar/mobile-bottom-nav-bar.js';
import DesktopContent from '/pages/bai-huong-dan-setmore/desktop-content.js';
import MobileContent from '/pages/bai-huong-dan-setmore/mobile-content.js';
import TabletContent from '/pages/bai-huong-dan-setmore/tablet-content.js';


export default function Home() {
  //Không sử dụng chuột phải
  if (process.browser){
  document.oncontextmenu = new Function("return false;");
  }

  return (
    <>
      <div className="page-container">
        <div className="page-nav-bar">
          <div className="page-desktop-nav-bar">
            <DesktopNavBar/>
          </div>
          <div className="page-mobile-nav-bar">
            <MobileNavBar />
          </div>
          <div className="page-tablet-nav-bar">
            <TabletNavBar />
          </div>          
          <div className="page-mobile-bottom-nav-bar">
            <MobileBottomNavBar/>
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
        </div>    
      </div>
    </>
  )
}
