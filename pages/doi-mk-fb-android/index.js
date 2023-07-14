import DesktopFacebookAndroidContent from '/pages/doi-mk-fb-android/desktop-facebook-android-content'
import MobileFacebookAndroidContent from '/pages/doi-mk-fb-android/mobile-facebook-android-content'
import TabletFacebookAndroidContent from '/pages/doi-mk-fb-android/tablet-facebook-android-content'
import DesktopNavBar from '/pages/Components/nav-bar/desktop-nav-bar.js';
import TabletNavBar from '/pages/Components/nav-bar/tablet-nav-bar.js';
import MobileNavBar from '/pages/Components/nav-bar/mobile-nav-bar.js';
import MobileBottomNavBar from '/pages/Components/nav-bar/mobile-bottom-nav-bar.js'
    

export default function DoiMKFBAndroi(){
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
                        <TabletFacebookAndroidContent />
                    </div>
                    <div className="page-desktop-content">
                        <DesktopFacebookAndroidContent />
                    </div>
                    <div className="page-mobile-content">
                        <MobileFacebookAndroidContent />
                    </div>
                </div>    
            </div>
        </>
    )
}
   

    
    
    