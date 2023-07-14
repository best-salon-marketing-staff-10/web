import Link from "next/link";
import { thongTinTiem1 } from "/pages/Components/core/info";

export default function LogoNav(){

    return(
        <>
            <Link href="/">
                <div className="logo-container">
                    <div className="logo">
                        <img className="logo"src="/images/logo.jpg" />
                    </div>
                    <div className="logo-text">
                        <h2 className="logo-text-1">
                            {thongTinTiem1.tenTiem}
                        </h2>
                        <div className="logo-text-2">

                        </div>
                    </div>
                </div>
            </Link>
            <style>{`
                
            `}</style>
        </>
    );
}