import { thongTinTiem1 } from "/pages/Components/core/info"


export default function MobileContent(){
    return(
        <>
            <div className="mobile-content">
                <div className="mobile-text-1">
                    Hướng dẫn đặt ngày nghỉ cho tiệm
                </div>
                <div className="mobile-text-2">
                    Khi sử dụng Setmore, để tắt thời gian làm việc của tiệm thì về bản chất, quý anh chị sẽ cần <b>đặt lịch nghỉ cho tất cả các nhân viên.</b>
                </div>
                <div className="mobile-logo-text">
                    <div className="mobile-text-3">
                        <ul>
                            <li> Hướng dẫn dành cho ứng dụng trên điện thoại:</li>
                        </ul>
                    </div>
                </div>
                <div className="mobile-text-4">
                    Bước 1: Quý anh/chị nhấn vào biểu tượng ứng dụng để mở Setmore.
                </div>
                <div className="mobile-image-1">
                    <img className="mobile-image-1-1" src={thongTinTiem1.image1Setmore}/>
                </div>
                <div className="mobile-text-7">
                    Bước 2: Từ màn hình chính của ứng dụng, quý anh/chị nhấn vào <b>Account.</b>
                </div>
                <div className="mobile-image-2">
                    <img className="mobile-image-2-1" src={thongTinTiem1.image2Setmore}/>
                </div>
                <div className="mobile-text-9">
                    Bước 3: Quý anh/chị nhấn vào mục <b>Staff.</b>
                </div>
                <div className="mobile-image-3">
                    <img className="mobile-image-3-1" src={thongTinTiem1.image3Setmore}/>
                </div>
                <div className="mobile-text-11">
                    Bước 4: Quý anh chị bấm chọn 1 nhân viên.
                </div>
                <div className="mobile-image-4">
                    <img className="mobile-image-4-1" src={thongTinTiem1.image4Setmore}/>
                </div>
                <div className="mobile-text-14">
                    Bước 5: Quý anh chị cuộn xuống và chọn mục <b>Time Off</b>
                </div>
                <div className="mobile-image-5">
                    <img className="mobile-image-5-1" src={thongTinTiem1.image5Setmore}/>
                </div>
                <div className="mobile-text-15">
                    Bước 6:	 Nhấn + <b>Time Off</b> để thêm thời gian Time Off của nhân viên này. 
                </div>
                <div className="mobile-image-6">
                    <img className="mobile-image-6-1" src={thongTinTiem1.image6Setmore}/>
                </div>
                <div className="mobile-text-16">
                    Bước 7: Lựa chọn các thông tin về thời gian. 
                </div>
                <div className="mobile-image-text">
                    <div className="mobile-text-17">
                        <ul>
                            <li><b>All day:</b> Sử dụng khi tiệm nghỉ cả ngày. </li>
                        </ul>
                    </div>
                    <img className="mobile-image-7" src={thongTinTiem1.image10Setmore}/>
                </div>
                <div className="mobile-image-text-2">
                    <div className="mobile-text-18">
                        <ul>
                            <li><b>Starts: </b>Thời điểm Time Off bắt đầu.</li>
                        </ul>
                    </div>
                    <img className="mobile-image-8" src={thongTinTiem1.image8Setmore}/>
                </div>
                <div className="mobile-image-text-3">
                    <div className="mobile-text-19">
                        <ul>
                            <li><b>Ends:</b>Thời điểm Time Off kết thúc.</li>
                        </ul>
                    </div>
                    <img className="mobile-image-9" src={thongTinTiem1.image9Setmore}/>
                </div>
                <div className="mobile-text-20">
                    <b>Lưu ý:</b> quý anh/chị vui lòng chọn thời điểm Time Off kết thúc trước rồi mới chọn thời điểm bắt đầu để tránh phần mềm báo lỗi là “
                    <span className="mobile-text-20-1">
                        End time cannot be before or the same as the start time
                    </span>”
                </div>
                <div className="mobile-text-21">
                    Ví dụ: Quý anh/chị muốn cài đặt Time Off vào ngày 20 tháng 4 năm 2023. 
                </div>
                <div className="mobile-text-image">
                    <div className="mobile-text-22">
                        Đầu tiên, quý anh/chị chỉnh mục <b>Ends</b> thành
                        <img className="mobile-image-10" src={thongTinTiem1.image9Setmore}/>
                    </div>
                </div>
                <div className="mobile-text-image-2">
                    <div className="mobile-text-23">
                        và sau đó mới chỉnh mục <b>Starts</b> như hình
                        <img className="mobile-image-11" src={thongTinTiem1.image8Setmore}/>
                    </div>
                </div>
                <div className="mobile-text-24">
                    Bước 8: Quý anh/chị kiểm tra lại thời gian Starts và Ends rồi nhấn vào <b>Create</b> để lưu lịch Time Off của nhân viên này.
                </div>
                <div className="mobile-image-12">
                    <img className="mobile-image-12-1" src={thongTinTiem1.image11Setmore}/>
                </div>
                <div className="mobile-text-25">
                    Bước 9: Lặp lại với tất cả các nhân viên.
                </div>
                <div className="mobile-image-13">
                    <img className="mobile-image-13-1" src={thongTinTiem1.image12Setmore}/>
                </div>
            </div>
            
            <style jsx>{`
                 
            `}</style>
        </>
    )
}