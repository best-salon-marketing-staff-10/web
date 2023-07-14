import Link from 'next/link';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LogoNav from '/pages/Components/logo-nav/logo-nav';
import { menu } from '/pages/Components/core/info';
import { serviceCategory } from '/pages/Components/core/info';


export default function MobileNavBar(){
    return(
        <>
            <Head>
                
            </Head>
            <div className="nav-bar">
                <LogoNav />
                <div className="nav-bar-menu">
                    <Navbar bg="#FFFFFF" expand={false}>
                        <Container fluid>
                            <Navbar.Brand href="#"></Navbar.Brand>
                            <Navbar.Toggle aria-controls="offcanvasNavbar" />
                            <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                            >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel">
                                    <Link href="/">
                                        <LogoNav />
                                    </Link>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <div className="nav-bar-main-category">
                                        <Link href="/doi-mk-insta">
                                            <a className="nav-bar-link-main-menu">
                                                Đổi mật khẩu Instagram
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="nav-bar-main-category">
                                        <Link href="/doi-mk-fb-ios">
                                            <a className="nav-bar-link-main-menu">
                                                Đổi mật khẩu Facebook (IOS)
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="nav-bar-main-category">
                                        <Link href="/doi-mk-fb-androi">
                                            <a className="nav-bar-link-main-menu">
                                                Đổi mật khẩu Facebook (Android)
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="nav-bar-main-category">
                                        <Link href="/bai-huong-dan-setmore">
                                            <a className="nav-bar-link-main-menu">
                                                Đặt ngày nghỉ cho tiệm (Setmore)
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="nav-bar-main-category">
                                        <Link href="/">
                                            <a className="nav-bar-link-main-menu">
                                                
                                            </a>
                                        </Link>
                                    </div>
                                </Nav>
                            </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>        
                </div>
            </div>
            
            <style jsx>{`
                
            `}</style>
        </>
    )
}