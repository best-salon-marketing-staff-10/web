import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { images } from '/pages/Components/core/info';
import { menu } from '/pages/Components/core/info';


export default function MobileBottomNavBar(){
    return(
        <>
            
            <div className="mobile-bottom-nav-bar-section-bottom-nav-bar">
                <Navbar expand={false} bg="white" variant="d" fixed="bottom">
                    <div className="mobile-bottom-nav-bar-section">
                        <Link href="/">
                            <a className="mobile-bottom-nav-bar-link-a">
                                <div className="mobile-bottom-nav-bar-home">
                                    <div>
                                        <img className="mobile-bottom-nav-bar-img" alt="" src="" />
                                    </div>
                                    <div className="mobile-bottom-nav-bar-section-content">
                                        svffaswedg
                                    </div>   
                                </div>
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="mobile-bottom-nav-bar-link-a">
                                <div className="mobile-bottom-nav-bar-services">
                                    <div>
                                        <img className="mobile-bottom-nav-bar-img" alt="" src="" />
                                    </div>
                                    <div className="mobile-bottom-nav-bar-section-content">  
                                        sfwedf
                                    </div> 
                                </div>
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="mobile-bottom-nav-bar-link-a">
                                <div className="mobile-bottom-nav-bar-contact-us">
                                    <div>
                                        <img className="mobile-bottom-nav-bar-img" alt="" src="" />
                                    </div>
                                    <div className="mobile-bottom-nav-bar-section-content">
                                        Appointment&nbsp;now 
                                    </div> 
                                </div>
                            </a>
                        </Link>
                    </div>    
                </Navbar>
            </div>

            <style jsx>{`
                

            `}</style>
        </>
    )
}