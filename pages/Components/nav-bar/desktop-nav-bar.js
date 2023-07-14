import Link from 'next/link';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavDropdown } from 'react-bootstrap';
import LogoNav from '/pages/Components/logo-nav/logo-nav';
import { menu } from '/pages/Components/core/info';
import { serviceCategory } from '/pages/Components/core/info';



export default function DesktopNavBar(){
    return(
        <>
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
                                    <h2 className="nav-bar-main-category">
                                        <Link href="/doi-mk-insta">
                                            <a className="nav-bar-link-main-menu">
                                                Đổi mật khẩu Instagram
                                            </a>
                                        </Link>
                                    </h2>
                                    <div className="nav-bar-main-category">
                                        <h2>
                                            <Link href="/doi-mk-fb-ios">
                                                <a className="nav-bar-link-main-menu">
                                                    Đổi mật khẩu Facebook (IOS)
                                                </a>
                                            </Link>
                                        </h2>
                                    </div>   
                                    <h2 className="nav-bar-main-category">
                                        <Link href="/doi-mk-fb-android">
                                            <a className="nav-bar-link-main-menu">
                                                Đổi mật khẩu Facebook (Android)
                                            </a>
                                        </Link>
                                    </h2>
                                    <h2 className="nav-bar-main-category">
                                        <Link href="/bai-huong-dan-setmore">
                                            <a className="nav-bar-link-main-menu">
                                                Đặt ngày nghỉ cho tiệm (Setmore)
                                            </a>
                                        </Link>
                                    </h2>
                                    <h2 className="nav-bar-main-category">
                                        <Link href="/doc-va-tra-loi-tin-nhan-GG">
                                            <a className="nav-bar-link-main-menu">
                                                Đọc và trả lời tin nhắn Google
                                            </a>
                                        </Link>
                                    </h2>
                                   
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