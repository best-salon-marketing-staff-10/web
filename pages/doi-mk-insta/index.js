import DesktopInstaContent from "/pages/doi-mk-insta/desktop-insta-content";
import MobileInstaContent from "/pages/doi-mk-insta/mobile-insta-content";
import TabletInstaContent from "/pages/doi-mk-insta/tablet-insta-content";
import DesktopNavBar from "/pages/Components/nav-bar/desktop-nav-bar";
import MobileNavBar from "/pages/Components/nav-bar/mobile-nav-bar";
import TabletNavBar from "/pages/Components/nav-bar/tablet-nav-bar";
import MobileBottomNavBar from "/pages/Components/nav-bar/mobile-bottom-nav-bar";


export default function DoiMKInsta(){
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
                    <div className="page-desktop-insta-content">
                        <DesktopInstaContent />
                    </div>
                    <div className="page-mobile-insta-content">
                        <MobileInstaContent />
                    </div>
                    <div className="page-tablet-insta-content">
                        <TabletInstaContent />
                    </div>
                </div>    
            </div>
        </>
    )
}