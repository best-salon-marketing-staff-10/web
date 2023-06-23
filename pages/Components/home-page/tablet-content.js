import Button1 from '/pages/Components/buttons/button-1.js';
import TimeSchedule from '/pages/Components/time-schedule/time-schedule';
import Location from '/pages/Components/location/location';
import CustomerReview from '/pages/Components/customer-review.js';
import DongVien1 from '/pages/Components/dong-vien/dong-vien-1.js';
import DongVien2 from '/pages/Components/dong-vien/dong-vien-2.js';
import DongVien3 from '/pages/Components/dong-vien/dong-vien-3.js';
import Service1 from '/pages/services/service-1.js';
import Service2 from '/pages/services/service-2.js';
import Service3 from '/pages/services/service-3.js';
import Service4 from '/pages/services/service-4.js';
import Service5 from '/pages/services/service-5.js';
import Service6 from '/pages/services/service-6.js';
import Carousel from 'react-bootstrap/Carousel';
import NhanManh1 from '/pages/Components/dong-vien/nhan-manh-1.js';
import NhanManh2 from '/pages/Components/dong-vien/nhan-manh-2.js';
import NhanManh3 from '/pages/Components/dong-vien/nhan-manh-3.js';
import NhanManh4 from '/pages/Components/dong-vien/nhan-manh-4.js';
import React, { useEffect } from "react";
import FormDeLaiThongTin from '/pages/Components/form/form-de-lai-thong-tin';
import Offers from '/pages/Components/offers/offers';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function TabletContent(){

    useEffect(() => {
        if (typeof window !== 'undefined'){
            document.getElementById('first-screen-block-tablet').style.background = 'url('+thongTinTiem1.tabletCarouselImage1+')';
        }
      });

    return(
        <>
            <div className="tablet-content">

                <div className="first-screen-block" id="first-screen-block-tablet">
                    <div className="first-screen-block-content">
                        <div className="first-screen-block-video">
                            <iframe className="first-screen-video" width={thongTinTiem1.firstScreenVideoTabletWidth}height={thongTinTiem1.firstScreenVideoTabletHeight} src={thongTinTiem1.firstScreenVideoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
                        </div>
                        <div className="first-screen-block-bottom">
                            <h1 className="first-screen-block-title">
                                {thongTinTiem2.carouselHeading}
                            </h1>
                            <div className="button">
                                <Button1 />
                            </div>
                        </div> 
                        
                        
                    </div>      
                </div>
                <div id="t-section-1">
                    <NhanManh1 />
                </div>
                <div>
                    <CustomerReview />
                </div>
                <div>
                    <NhanManh2 />
                </div>
                <div>
                    <NhanManh3 />
                </div>
                <div>
                    <NhanManh4 />
                </div>

                <div className="homepage-tablet-services">
                    <div className="services-list-1">
                        <div className="service-container">
                            <Service1 />
                        </div>
                    </div>
                    <div className="services-list-2">
                        <div className="service-container">
                            <Service2 />
                        </div>
                    </div>
                    <div className="services-list-3">
                        <div className="service-container">
                            <Service3 />
                        </div>
                    </div>
                    <div className="services-list-4">
                        <div className="service-container">
                            <Service4 />
                        </div>
                    </div>
                    <div className="services-list-5">
                        <div className="service-container">
                            <Service5 />
                        </div>
                    </div>
                    <div className="services-list-6">
                        <div className="service-container">
                            <Service6 />
                        </div>
                    </div>
                </div>
                

            
            </div>
        </>
    )
}