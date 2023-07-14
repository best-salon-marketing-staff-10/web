import { thongTinTiem1 } from "/pages/Components/core/info";

export default function DesktopContent(){
    return(
        <>
            <div className="desktop-content">
                <div className="desktop-nd">
                    <div className="desktop-text-1">
                        Hướng dẫn đặt ngày nghỉ cho tiệm
                    </div>
                    <div className="desktop-text-2">
                        Khi sử dụng Setmore, để tắt thời gian làm việc của tiệm thì về bản chất, quý anh chị sẽ cần <b>đặt lịch nghỉ cho tất cả các nhân viên.</b>
                    </div>
                    <div className="desktop-logo-text">
                        <div className="desktop-text-3">
                            <span className="desktop-text-3-1">
                                .
                            </span>
                            Hướng dẫn dành cho ứng dụng trên điện thoại:
                        </div>
                    </div>
                    <div className="desktop-text-4">
                        Bước 1: Quý anh/chị nhấn vào biểu tượng ứng dụng để mở Setmore.
                    </div>
                    <div className="desktop-image-1">
                        <img className="desktop-image-1-1" src={thongTinTiem1.image1Setmore}/>
                    </div>
                    <div className="desktop-text-7">
                        Bước 2: Từ màn hình chính của ứng dụng, quý anh/chị nhấn vào <b>Account.</b>
                    </div>
                    <div className="desktop-image-2">
                        <img className="desktop-image-2-1" src={thongTinTiem1.image2Setmore}/>
                    </div>
                    <div className="desktop-text-9">
                        Bước 3: Quý anh/chị nhấn vào mục <b>Staff.</b>
                    </div>
                    <div className="desktop-image-3">
                        <img className="desktop-image-3-1" src={thongTinTiem1.image3Setmore}/>
                    </div>
                    <div className="desktop-text-11">
                    Bước 4: Quý anh chị bấm chọn 1 nhân viên.
                    </div>
                    <div className="desktop-image-4">
                        <img className="desktop-image-4-1" src={thongTinTiem1.image4Setmore}/>
                    </div>
                    <div className="desktop-text-14">
                        Bước 5: Quý anh chị cuộn xuống và chọn mục <b>Time Off</b>
                    </div>
                    <div className="desktop-image-5">
                        <img className="desktop-image-5-1" src={thongTinTiem1.image5Setmore}/>
                    </div>
                    <div className="desktop-text-15">
                        Bước 6:	 Nhấn + <b>Time Off</b> để thêm thời gian Time Off của nhân viên này. 
                    </div>
                    <div className="desktop-image-6">
                        <img className="desktop-image-6-1" src={thongTinTiem1.image6Setmore}/>
                    </div>
                    <div className="desktop-text-16">
                        Bước 7: Lựa chọn các thông tin về thời gian. 
                    </div>
                    <div className="desktop-image-text">
                        <div className="desktop-text-17">
                        <ul>
                            <li><b>All day:</b> Sử dụng khi tiệm nghỉ cả ngày. </li>
                        </ul>
                        </div>
                        <img className="desktop-image-7" src={thongTinTiem1.image10Setmore}/>
                    </div>
                    <div className="desktop-image-text-2">
                        <div className="desktop-text-18">
                            <ul>
                                <li><b>Starts: </b>Thời điểm Time Off bắt đầu.</li>
                            </ul>
                        </div>
                        <img className="desktop-image-8" src={thongTinTiem1.image8Setmore}/>
                    </div>
                    <div className="desktop-image-text-3">
                        <div className="desktop-text-19">
                            <ul>
                                <li><b>Ends: </b>Thời điểm Time Off kết thúc.</li>
                            </ul>
                        </div>
                        <img className="desktop-image-9" src={thongTinTiem1.image9Setmore}/>
                    </div>
                    <div className="desktop-text-20">
                        <b>Lưu ý:</b> quý anh/chị vui lòng chọn thời điểm Time Off kết thúc trước rồi mới chọn thời điểm bắt đầu để tránh phần mềm báo lỗi là “
                        <span className="desktop-text-20-1">
                            End time cannot be before or the same as the start time
                        </span>”
                    </div>
                    <div className="desktop-text-21">
                        Ví dụ: Quý anh/chị muốn cài đặt Time Off vào ngày 20 tháng 4 năm 2023. 
                    </div>
                    <div className="desktop-text-image">
                        <div className="desktop-text-22">
                            Đầu tiên, quý anh/chị chỉnh mục <b>Ends</b> thành
                            <img className="desktop-image-10" src={thongTinTiem1.image9Setmore}/>
                        </div>
                    </div>
                    <div className="desktop-text-image-2">
                        <div className="desktop-text-23">
                            và sau đó mới chỉnh mục <b>Starts</b> như hình
                            <img className="desktop-image-11" src={thongTinTiem1.image8Setmore}/>
                        </div>
                    </div>
                    <div className="desktop-text-24">
                        Bước 8: Quý anh/chị kiểm tra lại thời gian Starts và Ends rồi nhấn vào <b>Create</b> để lưu lịch Time Off của nhân viên này.
                    </div>
                    <div className="desktop-image-12">
                        <img className="desktop-image-12-1" src={thongTinTiem1.image11Setmore}/>
                    </div>
                    <div className="desktop-text-25">
                        Bước 9: Lặp lại với tất cả các nhân viên.
                    </div>
                    <div className="desktop-image-13">
                        <img className="desktop-image-13-1" src={thongTinTiem1.image12Setmore}/>
                    </div>
                </div>
            </div>

            <style jsx>{`
                    
            `}</style>
        </>
    )
}