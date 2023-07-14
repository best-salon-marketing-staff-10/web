import DesktopFacebookIOSContent from '/pages/doi-mk-fb-ios/desktop-facebook-ios-content'
import MobileFacebookIOSContent from '/pages/doi-mk-fb-ios/mobile-facebook-ios-content'
import TabletFacebookIOSContent from '/pages/doi-mk-fb-ios/tablet-facebook-ios-content'
import DesktopNavBar from '/pages/Components/nav-bar/desktop-nav-bar.js';
import TabletNavBar from '/pages/Components/nav-bar/tablet-nav-bar.js';
import MobileNavBar from '/pages/Components/nav-bar/mobile-nav-bar.js';
import MobileBottomNavBar from '/pages/Components/nav-bar/mobile-bottom-nav-bar.js'


export default function DoiMKFBIOS(){
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
                        <TabletFacebookIOSContent />
                    </div>
                    <div className="page-mobile-content">
                        <MobileFacebookIOSContent />
                    </div>
                    <div className="page-desktop-content">
                        <DesktopFacebookIOSContent />
                    </div>
                </div>    
            </div>
        </>
    )
}