import DesktopGoogleContent from "/pages/doc-va-tra-loi-tin-nhan-GG/desktop-content";
import DesktopNavBar from '/pages/Components/nav-bar/desktop-nav-bar.js';
import TabletNavBar from '/pages/Components/nav-bar/tablet-nav-bar.js';
import MobileNavBar from '/pages/Components/nav-bar/mobile-nav-bar.js';
import MobileBottomNavBar from '/pages/Components/nav-bar/mobile-bottom-nav-bar.js'
import { thongTinTiem1 } from "/pages/Components/core/info";



export default function DocvatraloiGG(){
    if (process.browser){
        document.oncontextmenu = new Function("return false;");
    }

    return(
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
                    <div className="page-tablet-content">
                        
                    </div>
                    <div className="page-mobile-content">
                        
                    </div>
                    <div className="page-desktop-content">
                        <DesktopGoogleContent />
                    </div>
                </div>    
            </div>
        </>
    )
}