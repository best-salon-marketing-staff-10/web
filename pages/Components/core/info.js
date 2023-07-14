// Phần info này bố trí như sau
//  thongTinTiem1 gồm:
//    1. Thông tin cơ bản của tiệm
//    2. Các ảnh của tiệm
//    3. Các đường link của tiệm
//    4. Nội dung các nút

//  thongtinTiem2 gồm:
//    1. Các nội dung của tiệm
//    2. Các thẻ Alt

const thongTinTiem1 = {
    // Thông tin cơ bản của tiệm
    tenTiem: "Best Salon Marketing",
    addressTiemLine1: "5/96 Linh Quang",
    areaTiem: "Văn Chương",
    districtTiem:"Đống Đa",
    cityTiem: "Hà Nội",
    addressRegionTiem: "HN",
    postcodeTiem: "100000",
    countryTiem: "Việt Nam",
    addressCountryTiem: "VN",
  
    phoneTiem: "+84 983088896",
    
    linkBookingMapTiem: "",
    linkToMapTiem: "https://g.page/r/CZSo8ynJ5KRoEAI",
    linkAppBookingTiem: "",
    linkToBusinessFacebook: "https://www.facebook.com/BestSalonMarketingAgency",

    firstScreenVideoLink: "https://www.youtube.com/embed/k15PxcQc1A4",
    firstScreenVideoDesktopWidth: "840",
    firstScreenVideoDesktopHeight: "472",

    firstScreenVideoTabletWidth: "1024",
    firstScreenVideoTabletHeight: "500",

    firstScreenVideoMobileWidth: "100%",
    firstScreenVideoMobileHeight: "300",

    priceRange: "££",
  
    geoLatitude: 21.023072632734625,
    geoLongitude: 105.83638731250389,
    
    geoRegionContent: "VN-HN",

    schemaType: "Corporation",

    personReviewAuthorName: "Kimanh Tran",
    ratingValue: "5",
    bestRating: "5",

    websiteTiem:"https://bestsalonmarketing.com",
    //Website tiệm KO có dấu / ở cuối

    //Phần footer copyright
    copyrightStatement: "© Copyright and Powered by ",
    copyrightCompanyName: "Best Salon Marketing",
    websiteLink: "https://bestsalonmarketing.com",

    
  
      //Thời gian làm việc cần chỉnh lại cho khớp
      monOpeningTime: "09:00",
      monClosingTime: "22:00",

      tueOpeningTime: "09:00",
      tueClosingTime: "22:00",

      wedOpeningTime: "09:00",
      wedClosingTime: "22:00",

      thuOpeningTime: "09:00",
      thuClosingTime: "22:00",

      friOpeningTime: "09:00",
      friClosingTime: "22:00",

      satOpeningTime: "09:00",
      satClosingTime: "22:00",

      sunOpeningTime: "09:00",
      sunClosingTime: "22:00",
  
      //iframe map
    iframeMapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65367853.284469955!2d-8.594400498367595!3d0.36550226339101066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abf2e9cf2353%3A0x68a4e4c929f3a894!2sBest%20Salon%20Marketing!5e0!3m2!1sen!2s!4v1667552784367!5m2!1sen!2s",
  
  
      // Các ảnh của tiệm
    ogImage:"https://i.ibb.co/NWBfkwN/logo.jpg",
    icon:"/icon.jpg",
    logoTiem:"/logo.jpg",
        //Ảnh ở Homepage carousel
    mobileCarouselImage1: "/images/mobile-best-salon-marketing-first-image.jpg",
  
    tabletCarouselImage1: "/images/desktop-best-salon-marketing-first-image.jpg",
  
    desktopCarouselImage1: "/images/desktop-best-salon-marketing-first-image.jpg",
        //Ảnh ở Homepage khi vuốt xuống
    NhanhManh2Image1: "/images/nail-extension-1.jpg",
  
    NhanhManh3Image1: "/images/nail-extension-2.jpg",
  
    NhanhManh4Image1: "/images/nail-extension-3-1.jpg",
    NhanhManh4Image2: "/images/nail-extension-4.jpg",
  
    LocationImage1: "/images/nail-extension-11.jpg",
  
    serviceList1Image1: "/images/nail-extension-5.jpg",
    serviceList1Image2: "/images/nail-extension-6.jpg",
    serviceList1Image3: "/images/nail-extension-7.jpg",
    serviceList1Image4: "/images/nail-extension-8.jpg",
    serviceList1Image5: "/images/nail-extension-9.jpg",
  
    serviceList2Image1: "/images/gel-nails-shellac-nails-1.jpg",
    serviceList2Image2: "/images/gel-nails-shellac-nails-2.jpg",
    serviceList2Image3: "/images/gel-nails-shellac-nails-3.jpg",
    serviceList2Image4: "/images/gel-nails-shellac-nails-4.jpg",
    serviceList2Image5: "/images/gel-nails-shellac-nails-5.jpg",
    
    serviceList3Image1: "/images/pedicure-1.jpg",
    serviceList3Image2: "/images/pedicure-2.jpg",
    serviceList3Image3: "/images/pedicure-3.jpg",
    serviceList3Image4: "/images/pedicure-4.jpg",
    serviceList3Image5: "/images/pedicure-5.jpg",
  
    serviceList4Image1: "/images/hair-wash-1.jpg",
    serviceList4Image2: "/images/hair-wash-2.jpg",
    serviceList4Image3: "/images/hair-wash-3.jpg",
    serviceList4Image4: "/images/hair-wash-4.jpg",
    serviceList4Image5: "/images/hair-wash-5.jpg",
  
    serviceList5Image1: "/images/nail-design-1.jpg",
    serviceList5Image2: "/images/nail-design-2.jpg",
    serviceList5Image3: "/images/nail-design-3.jpg",
    serviceList5Image4: "/images/nail-design-4.jpg",
    serviceList5Image5: "/images/nail-design-5.jpg",
  
    serviceList6Image1: "/images/waxing-1.jpg",
    serviceList6Image2: "/images/waxing-2.jpg",
    serviceList6Image3: "/images/waxing-3.jpg",
    serviceList6Image4: "",
    serviceList6Image5: "",

    serviceList7Image1: "/images/facial-1.jpg",
    serviceList7Image2: "/images/facial-2.jpg",
    serviceList7Image3: "/images/facial-3.jpg",
    serviceList7Image4: "/images/facial-4.jpg",
    serviceList7Image5: "/images/facial-5.jpg",
  
    //Ảnh trang about cho 3 giao diện
  
    mobileAboutUsImage1: "/images/mobile-nail-salon-1.jpg",
    mobileAboutUsImage2: "/images/mobile-nail-salon-2.jpg",
    mobileAboutUsImage3: "/images/mobile-nail-salon-3.jpg",

    tabletAboutUsImage1: "/images/tablet-nail-salon-1.jpg",
    tabletAboutUsImage2: "/images/tablet-nail-salon-2.jpg",
    tabletAboutUsImage3: "/images/tablet-nail-salon-3.jpg",
  
    desktopAboutUsImage1: "/images/desktop-nail-salon-1.jpg",
    desktopAboutUsImage2: "/images/desktop-nail-salon-2.jpg",
    desktopAboutUsImage3: "/images/desktop-nail-salon-3.jpg",
  
    desktopAboutUsDongVienImage1: "/images/nail-extension-15.jpg",
    desktopAboutUsDongVienImage2: "/images/nail-extension-16.jpg",
    desktopAboutUsDongVienImage3: "/images/nail-extension-17.jpg",

      //Ảnh cho phần động viên
    dongVien1Image1: "/images/nail-extension-18.jpg",
    dongVien2Image1: "/images/nail-extension-19.jpg",
  
    // Các đường link của tiệm
    mainMenu1: "Home",
    mainMenu2: "About us",
    mainMenu3: "Book Now",
    mainMenu4: "Services",
    mainMenu5: "Our Policies",
    mainMenu6: "Contact us",
  
    linkTomainMenu1: "/",
    linkTomainMenu2: "/about-us",
    linkTomainMenu3: "/appointment",
    linkTomainMenu4: "/services",
    linkTomainMenu5: "/our-policy",
  
    mainService1:"Google Marketing",
    mainService2:"Website",
    mainService3:"Social Media Marketing",
    mainService4:"",
    mainService5:"",
    mainService6:"",
    mainService7:"",
  
    linkTomainService1: "/services#m-service-list-1",
    linkTomainService2: "/services#m-service-list-2",
    linkTomainService3: "/services#m-service-list-3",
    linkTomainService4: "/services#m-service-list-4",
    linkTomainService5: "/services#m-service-list-5",
    linkTomainService6: "/services#m-service-list-6",
    linkTomainService7: "/services#m-service-list-7",
  
    tabletLinkTomainService1: "/services#t-service-list-1",
    tabletLinkTomainService2: "/services#t-service-list-2",
    tabletLinkTomainService3: "/services#t-service-list-3",
    tabletLinkTomainService4: "/services#t-service-list-4",
    tabletLinkTomainService5: "/services#t-service-list-5",
    tabletLinkTomainService6: "/services#t-service-list-6",
    tabletLinkTomainService7: "/services#t-service-list-7",
  
    desktopLinkTomainService1: "/services#d-service-list-1",
    desktopLinkTomainService2: "/services#d-service-list-2",
    desktopLinkTomainService3: "/services#d-service-list-3",
    desktopLinkTomainService4: "/services#d-service-list-4",
    desktopLinkTomainService5: "/services#d-service-list-5",
    desktopLinkTomainService6: "/services#d-service-list-6",
    desktopLinkTomainService7: "/services#d-service-list-7",
  
    //Thanh Mobile Bottom Nav
    BottomNavButton1Icon: "/images/icons/icon-home.png",
    BottomNavButton1Content: "Home",
    BottomNavButton1LinkTo: "/",
  
    BottomNavButton2Icon: "/images/icons/icon-bussiness-services.png",
    BottomNavButton2Content: "Services",
    BottomNavButton2LinkTo: "/services",
  
    BottomNavButton3Icon: "/images/icons/icon-contact.png",
    BottomNavButton3Content: "Appointment now",  //Cái này chưa cho vào vì bị xuống dòng
    BottomNavButton3LinkTo: "",

    //Ảnh customer review - customer-review.js
    cusReviewImage1: "/images/nail-salon-customer-review-1.jpg",
    cusReviewImage2: "/images/nail-salon-customer-review-2.jpg",
    cusReviewImage3: "/images/nail-salon-customer-review-3.jpg",
    cusReviewImage4: "/images/nail-salon-customer-review-4.jpg",
    cusReviewImage5: "/images/nail-salon-customer-review-5.jpg",

  
    //Ảnh Footer
    footerImagePhoneIcon: "/images/icons/icon-phone-product.png",
    footerImageMapPointerIcon: "/images/icons/icon-google-maps-pointer.png",
  
  
    //Các nút trên website, hiện chưa áp dụng
    button1Content: "Learn more",
    button1LinkToMobile: "#m-section-1",
    button1LinkToTablet: "#t-section-1",
    button1LinkToDesktop: "#d-section-1",
  
    
  
    button2Content: "",
    button2LinkToMobile: "",
    button2LinkToTablet: "",
    button2LinkToDesktop: "",
  
    button3Content: "",
    button3LinkTo: "",
  
    button4Content: "",
    button4LinkTo: "",
  
    button5Content: "",
    button5LinkTo: "",
  
    button6Content: "View details services",
    button6LinkToMobile: "/services/#m-service-list-1",
    button6LinkToTablet: "/services/#t-service-list-1",
    button6LinkToDesktop: "/services/#d-service-list-1",
  
    button7Content: "View details services",
    button7LinkToMobile: "/services/#m-service-list-2",
    button7LinkToTablet: "/services/#t-service-list-2",
    button7LinkToDesktop: "/services/#d-service-list-2",
  
    button8Content: "View details services",
    button8LinkToMobile: "/services/#m-service-list-3",
    button8LinkToTablet: "/services/#t-service-list-3",
    button8LinkToDesktop: "/services/#d-service-list-3",
  
    button9Content: "View details services",
    button9LinkToMobile: "/services/#m-service-list-4",
    button9LinkToTablet: "/services/#t-service-list-4",
    button9LinkToDesktop: "/services/#d-service-list-4",
  
    button10Content: "View details services",
    button10LinkToMobile: "/services/#m-service-list-5",
    button10LinkToTablet: "/services/#t-service-list-5",
    button10LinkToDesktop: "/services/#d-service-list-5",
  
    button11Content: "View details services",
    button11LinkToMobile: "/services/#m-service-list-6",
    button11LinkToTablet: "/services/#t-service-list-6",
    button11LinkToDesktop: "/services/#d-service-list-6",

    button12Content: "View details services",
    button12LinkToMobile: "/services/#m-service-list-7",
    button12LinkToTablet: "/services/#t-service-list-7",
    button12LinkToDesktop: "/services/#d-service-list-7",
  

    
    //Ảnh đổi mk insta
    image1insta: "/images/b1-ig.png",
    image2insta: "/images/b2-ig .png" ,
    image3insta: "/images/b3-ig.png",
    image4insta:"/images/b4-ig.png",
    image5insta:"/images/b5-ig1.png",
    image6insta:"/images/b6-ig.png",
    image7insta:"/images/b7-ig.png",
    image8insta:"/images/b8-ig.png",
    image9insta:"/images/sau-buoc-4-anh-1.png",
    image10insta:"/images/sau-buoc-4-anh-2.png",
    image11insta:"/images/sau-buoc-7-anh-1.png",
    image12insta:"/images/sau-buoc-7-anh-2.png",

    //Ảnh đổi mk fb IOS
    image1FBIOS: "/images/b1-fb.png",
    image2FBIOS: "/images/b2-fb.png",
    image3FBIOS: "/images/b3-fb.png",
    image4FBIOS: "/images/b4-fb.png",
    image5FBIOS: "/images/b5-fb.png",
    image6FBIOS: "/images/b6-fb.png",
    image7FBIOS: "/images/b7-fb.png",
    image8FBIOS: "/images/b8-fb.png",
    image9FBIOS: "/images/giao-dien-sau-buoc-1-anh-1.png",
    image10FBIOS: "/images/giao-dien-sau-buoc-1-anh-2.png",
    image11FBIOS: "/images/giao-dien-khi-chi-co-tk-FB.png",
    image12FBIOS: "/images/giao-dien-khi-co-ca-tk-FB-IG.png",

    //Ảnh đổi mk FB Androi
    image1FBAndroi: "/images/b1-a.png",
    image2FBAndroi: "/images/b2-a.png",
    image3FBAndroi: "/images/b3-a.png",
    image4FBAndroi: "/images/b4-a.png",
    image5FBAndroi: "/images/b5-a.png",
    image6FBAndroi: "/images/b6-a.png",
    image7FBAndroi: "/images/b7-a.png",
    image8FBAndroi: "/images/b8-a.png",
    image9FBAndroi: "/images/giao-dien-khi-co-ca-tai-khoan-FB-IG.jpg",
    image10FBAndroi: "/images/giao-dien-khi-chi-co-tai-khoan-FB.jpg",
    image11FBAndroi: "/images/giao-dien-sau-buoc-1-anh-1-androi.jpg",
    image12FBAndroi: "/images/giao-dien-sau-buoc-1-anh-2-androi.jpg",

    //Ảnh bài hướng dẫn setmore
    image1Setmore: "/images/0.jpg",
    image2Setmore: "/images/1.jpg",
    image3Setmore: "/images/2.jpg",
    image4Setmore: "/images/3.jpg",
    image5Setmore: "/images/4.jpg",
    image6Setmore: "/images/5.jpg",
    image7Setmore: "/images/6.jpg",
    image8Setmore: "/images/7-1.jpg",
    image9Setmore: "/images/7-2.jpg",
    image10Setmore: "/images/7-3.jpg",
    image11Setmore: "/images/8.jpg",
    image12Setmore: "/images/9.jpg",

    //Ảnh bài hướng dẫn đọc và trả lời tin nhắn GG
    image1DesktopGoogle: "images/Tim-hieu-Google-business-messages-1-desktop.jpg",
    image1MobileGoogle: "images/Tim-hieu-Google-business-messages-1-mobile.jpg",
    image1TabletGoogle: "images/Tim-hieu-Google-business-messages-1-tablet.jpg",
    image2Google: "images/gg-image-1.jpg",
    image3Google: "images/gg-image-2.jpg",
    image4Google: "images/gg-image-3.jpg",
    image5Google: "images/gg-image-4.jpg",
    image6Google: "images/gg-image-5.jpg",
    image7Google: "images/gg-image-6.jpg",
    image8Google: "images/gg-image-7.jpg",
    image9Google: "images/gg-image-8.jpg",
    image10Google: "images/gg-image-9.jpg",
    image11Google: "images/gg-image-10.jpg",
    image12Google: "images/gg-image-11.jpg",
    image13Google: "images/gg-image-12.jpg",
    image14Google: "images/gg-image-13.jpg",
    image15Google: "images/gg-image-14.jpg",
    image16Google: "images/gg-image-15.jpg",
    image17Google: "images/gg-image-16.jpg",
    image18Google: "images/gg-image-17.5.jpg",
    image19Google: "images/gg-image-17.jpg",    
    image20Google: "images/gg-image-18.jpg",
    image21Google: "images/gg-image-19.jpg",
    image22Google: "images/gg-image-20.jpg",   
    image23Google: "images/gg-image-21.jpg",   
    image24Google: "images/gg-image-22.jpg",   
    image25Google: "images/gg-image-23.jpg",   
    image26Google: "images/gg-image-24.jpg",    


  };
  
  const thongTinTiem2 = {

    serviceListTiem: thongTinTiem1.websiteTiem + "/services",

    //Xử lý Slogan tiệm
    sloganTiem: "Hiệu quả thật - Giá trị thật",
  
    //Dòng full address của tiệm
    addressTiemTopBar: thongTinTiem1.addressTiemLine1 + ", " + thongTinTiem1.areaTiem + ", " + thongTinTiem1.postcodeTiem,
  
    //Xử lý gọi cho tiệm
    callTiem:`tel:${thongTinTiem1.phoneTiem}`,

    geoPositionContent: thongTinTiem1.geoLatitude + ", " + thongTinTiem1.geoLongitude,

    imageLinkTiem1: thongTinTiem1.websiteTiem + "/images/desktop-nail-salon-happy-customer-1.jpg",
    imageLinkTiem2: thongTinTiem1.websiteTiem + "/images/nail-extension-5.jpg",
    imageLinkTiem3: thongTinTiem1.websiteTiem + "/images/desktop-nail-salon-3.jpg",

    workingTimeMon: "Monday: " + thongTinTiem1.monOpeningTime + "–" + thongTinTiem1.monClosingTime,

    workingTimeTue: "Tuesday: " + thongTinTiem1.tueOpeningTime + "–" + thongTinTiem1.tueClosingTime,

    workingTimeWed: "Wednesday: " + thongTinTiem1.wedOpeningTime + "–" + thongTinTiem1.wedClosingTime,

    workingTimeThu: "Thursday: " + thongTinTiem1.thuOpeningTime + "–" + thongTinTiem1.thuClosingTime,

    workingTimeFri: "Friday: " + thongTinTiem1.friOpeningTime + "–" + thongTinTiem1.friClosingTime,
    
    workingTimeSat: "Saturday: " + thongTinTiem1.satOpeningTime + "–" + thongTinTiem1.satClosingTime,

    workingTimeSun: "Sunday: " + thongTinTiem1.sunOpeningTime + "–" + thongTinTiem1.sunClosingTime,

    logoSchema: thongTinTiem1.websiteTiem + thongTinTiem1.logoTiem,

    titleContent: thongTinTiem1.tenTiem + " - " + "Đưa tiệm nails đến với thành công mới",
  
    metaDescriptionContent: "Vượt lên sự cạnh tranh, tăng income với chi phí cực tốt, giải pháp marketing chuyên nghiệp cho tiệm nails, hiệu quả 100%",
  
    geoPlaceNameContent: thongTinTiem1.areaTiem + ", " + thongTinTiem1.countryTiem,
  
    linkBookingTiem: thongTinTiem1.linkAppBookingTiem,
  
    TimeScheduleDescription:"What are you waiting for? Come get your paws groomed! At " + thongTinTiem1.tenTiem + " we work hard to make every experience feel comfortable, personalized and relaxing. Let our experienced technicians groom your paws.",
  
    //our-story.js
      ourStoryHeading: "Our story",
      ourStoryDescription: "Located at " + thongTinTiem1.addressTiemLine1 + ", we are a nail shop in " + thongTinTiem1.districtTiem + ". Skilled manicurists and pedicurists look forward to bringing you the best products and services. We are always researching and learning the best products and services, trendy nails, to bring more and more satisfaction to customers who are coming to us.",

    //dong-vien-1.js
      dongVien1Heading: "We are experienced manicurist and pedicurist",
      dongVien1Description: "Are you looking for nail shops in " + thongTinTiem1.areaTiem + "? One of the best nail salon in " + thongTinTiem1.cityTiem + "? We are proud to say that here we are. We can give you amazing nails with our acrylic extensions and great relaxation with our manicure and pedicure services. We cater to both men and women. You can rest assured and get a sense of satisfaction when you come to us",
      dongVien1Image1Alt: "nail salon" + " " + thongTinTiem1.areaTiem,

    //dong-vien-2.js
      dongVien2Heading: "Always clean",
      dongVien2Description: "We are committed to the safety and well being of our customer therefore we always maintain our clean environment, clean work stations, clean employees, and sterilization practices.",
      dongVien2Image1Alt: "nail salon" + " " + thongTinTiem1.areaTiem,

    //dong-vien-3.js
      dongVien3Heading: "Always leading And Ethical",
      dongVien3Description: "We guarantee to bring you the best experience ever. Our mission is to provide our customers with the ultimate pampering experience beginning with a beverage in one hand, a social scene in-between and a stunning set of services.",

    // nhan-manh-1.js
      NhanhManh1Content: "Các giải pháp Marketing hàng đầu cho tiệm nails",
    
    // nhan-manh-2.js
      NhanhManh2Heading: "DON'T LET DOWN YOUR NAILS",
      NhanhManh2Content: "For a flawless manicure and pedicure, visit us at " + thongTinTiem1.tenTiem + ". We offer a variety of polish and acrylic options to suit everyone's needs. 😸💅",
      NhanhManh2Image1Alt: "nail salon" + " " + thongTinTiem1.areaTiem,
    
    // nhan-manh-3.js
      NhanhManh3Heading: "OUR MISSION",
      NhanhManh3Content: "Going to the nail salon " + thongTinTiem1.areaTiem + " is like a visit to your favorite person ever, who always makes you feel amazing no matter what. Visiting a nail salon " + thongTinTiem1.areaTiem + " can have so many great side benefits: it can be a time to take care of yourself, a way to make you feel better about yourself, and an opportunity for you and your friends or family to chat with each other",
      NhanhManh3Image1Alt: "our nail salon mission" + " " + thongTinTiem1.areaTiem,
    
    // nhan-manh-4.js
      NhanhManh4Heading: "Google Marketing",
      NhanhManh4Content: "Hàng ngày vẫn có hàng ngàn khách hàng tìm kiếm dịch vụ liên quan đến tiệm nails. Chúng tôi sẽ giúp tiệm có được xếp hạng cao và được khách hàng lựa chọn",
      NhanhManh4Image1Alt: "" + " " + thongTinTiem1.areaTiem,
      NhanhManh4Image2Alt: "" + " " + thongTinTiem1.areaTiem,
    
      NhanhManh5Heading: "Social Media Marketing",
      NhanhManh5Content: "⁣Tiệm của bạn có thể chủ động tiếp cận hàng chục ngàn khách hàng thực tế ở khu vực xung quanh, dành được sự tin tưởng của khách hàng và chiến thắng đối thủ cạnh tranh",

    //service-1.js
    mainService1Description: "Hàng ngày vẫn có hàng ngàn khách hàng tìm kiếm dịch vụ liên quan đến tiệm nails. Chúng tôi sẽ giúp tiệm có được xếp hạng cao và được khách hàng lựa chọn",
    
    //service-2.js
    mainService2Description: "Là nền tảng vững chắc giúp chuyển đổi những khách hàng kỹ tính hay còn đang lo ngại vì bất kỳ lý do nào sang thành những người đặt hẹn hoặc walkin đến tiệm sử dụng dịch vụ và trả tiền cho tiệm",
    
    //service-3.js
    mainService3Description: "⁣Tiệm của bạn có thể chủ động tiếp cận hàng chục ngàn khách hàng thực tế ở khu vực xung quanh, dành được sự tin tưởng của khách hàng và chiến thắng đối thủ cạnh tranh",
    
    //service-4.js
    mainService4Description: "",
    
    //service-5.js
    mainService5Description: "",
    
    //service-6.js
    mainService6Description: "",

    //service-7.js
    mainService7Description: "",
  
    mobileCarouselImage1Alt: "",
    mobileCarouselImage2Alt: "",
    mobileCarouselImage3Alt: "",
  
    tabletCarouselImage1Alt: "",
    tabletCarouselImage2Alt: "",
    tabletCarouselImage3Alt: "",
  
    desktopCarouselImage1Alt: "",
    desktopCarouselImage2Alt: "",
    desktopCarouselImage3Alt: "",
  
    LocationImage1Alt: "",
  
    carouselHeading: "Giải pháp marketing tìm kiếm khách hàng thành công cho các tiệm nails người Việt trên toàn thế giới",
  
    //Ảnh homepage khi vuốt xuống
    serviceList1Image1Alt: "nail extension" + " " + thongTinTiem1.areaTiem,
    serviceList1Image2Alt: "nail extension" + " " + thongTinTiem1.areaTiem,
    serviceList1Image3Alt: "nail extension" + " " + thongTinTiem1.areaTiem,
    serviceList1Image4Alt: "nail extension" + " " + thongTinTiem1.areaTiem,
    serviceList1Image5Alt: "nail extension" + " " + thongTinTiem1.areaTiem,
  
    serviceList2Image1Alt: "shellac nails" + " " + thongTinTiem1.areaTiem,
    serviceList2Image2Alt: "shellac nails" + " " + thongTinTiem1.areaTiem,
    serviceList2Image3Alt: "shellac nails" + " " + thongTinTiem1.areaTiem,
    serviceList2Image4Alt: "shellac nails" + " " + thongTinTiem1.areaTiem,
    serviceList2Image5Alt: "shellac nails" + " " + thongTinTiem1.areaTiem,
    
    serviceList3Image1Alt: "natural nail care" + " " + thongTinTiem1.areaTiem,
    serviceList3Image2Alt: "natural nail care" + " " + thongTinTiem1.areaTiem,
    serviceList3Image3Alt: "natural nail care" + " " + thongTinTiem1.areaTiem,
    serviceList3Image4Alt: "natural nail care" + " " + thongTinTiem1.areaTiem,
    serviceList3Image5Alt: "natural nail care" + " " + thongTinTiem1.areaTiem,
  
    serviceList4Image1Alt: "hair wash" + " " + thongTinTiem1.areaTiem,
    serviceList4Image2Alt: "hair wash" + " " + thongTinTiem1.areaTiem,
    serviceList4Image3Alt: "hair wash" + " " + thongTinTiem1.areaTiem,
    serviceList4Image4Alt: "hair wash" + " " + thongTinTiem1.areaTiem,
    serviceList4Image5Alt: "hair wash" + " " + thongTinTiem1.areaTiem,
  
    serviceList5Image1Alt: "nail design" + " " + thongTinTiem1.areaTiem,
    serviceList5Image2Alt: "nail design" + " " + thongTinTiem1.areaTiem,
    serviceList5Image3Alt: "nail design" + " " + thongTinTiem1.areaTiem,
    serviceList5Image4Alt: "nail design" + " " + thongTinTiem1.areaTiem,
    serviceList5Image5Alt: "nail design" + " " + thongTinTiem1.areaTiem,
  
    serviceList6Image1Alt: "waxing" + " " + thongTinTiem1.areaTiem,
    serviceList6Image2Alt: "waxing" + " " + thongTinTiem1.areaTiem,
    serviceList6Image3Alt: "waxing" + " " + thongTinTiem1.areaTiem,
    serviceList6Image4Alt: "waxing" + " " + thongTinTiem1.areaTiem,
    serviceList6Image5Alt: "waxing" + " " + thongTinTiem1.areaTiem,

    serviceList7Image1Alt: "facial" + " " + thongTinTiem1.areaTiem,
    serviceList7Image2Alt: "facial" + " " + thongTinTiem1.areaTiem,
    serviceList7Image3Alt: "facial" + " " + thongTinTiem1.areaTiem,
    serviceList7Image4Alt: "facial" + " " + thongTinTiem1.areaTiem,
    serviceList7Image5Alt: "facial" + " " + thongTinTiem1.areaTiem,
  
    //Ảnh trang about cho 3 giao diện
  
    mobileAboutUsImage1Alt: "",
    mobileAboutUsImage2Alt: "",
    mobileAboutUsImage3Alt: "",
    mobileAboutUsImage4Alt: "",
    mobileAboutUsImage5Alt: "",
  
    tabletAboutUsImage1Alt: "",
    tabletAboutUsImage2Alt: "",
    tabletAboutUsImage3Alt: "",
    tabletAboutUsImage4Alt: "",
    tabletAboutUsImage5Alt: "",
  
    desktopAboutUsImage1Alt: "",
    desktopAboutUsImage2Alt: "",
    desktopAboutUsImage3Alt: "",
  
    desktopAboutUsDongVienImage1Alt: "",
    desktopAboutUsDongVienImage2Alt: "",
    desktopAboutUsDongVienImage3Alt: "",

    //offer.js
    offerTitle: "Our Offers and Benefits",
    offerDescription: "Free all cold drink and hot drink, chocolate, sweet or snack",
    offerHeading: "Our offers:",
    offerContent1: "✅10% for Student. ",
    offerContent2: "✅Refer a friend to get 5 pounds voucher. ",
    offerContent3: "✅Group from 3 people get 10% with the main treatment",

    //time-schedule.js
    timeScheduleHeading: "OPENING HOURS",

    //content-our-policy.js
    contentOurPolicyHeadingMain: "OUR POLICIES",
    contentOurPolicyHeadingSmall1: "Refunds",
    contentOurPolicyHeadingSmall2: "Guarantee",
    contentOurPolicyHeadingSmall3: "Tardiness",
    contentOurPolicyHeadingSmall4: "Cancellations",
    contentOurPolicyHeadingSmall5: "Gift Cards",
    contentOurPolicyDescription1: "At " + thongTinTiem1.tenTiem +", we will do anything we can to make sure you are satisfied. You are never just a customer, you’re part of the family. If your nails are not up to your expectations or if there’s something we can do to rectify it, speak up and let us know.    No refunds will be given after you have left the salon.",
    contentOurPolicyDescription2: "Enhancements and gel polish manicures are guaranteed for 7 business days after your appointment; excluding breakages. If you lose an enhancement or notice chips or lifting in the first seven days, please call us to schedule a free repair. Repairs after 7 days or for breakages, tears, and corner breaks are charged. Be kind to your nails and they will look beautiful for weeks after your service. Traditional polish services are not guaranteed.",
    contentOurPolicyDescription3: "Scheduled appointments have a 15 minute grace period to allow for traffic snarls or parking difficulties. If you anticipate that you will be later than 15 minutes, please call ahead to see if we have the availability to complete your service in full. One late client can throw off our entire schedule and cause our other clients to be late for their commitments. Therefore, if you arrive more than 15 minutes late, we reserve the right to refuse partial or complete services.",
    contentOurPolicyDescription41: "Appointments can be cancelled 24 hours in advance by calling or texting ",
    contentOurPolicyDescription42: ". Please give at least 24 hours notice so that we have the opportunity to offer your reserved time to another client on our waiting list. We understand that sometimes emergencies happen, and it's not always possible to give adequate notice when you can't make an appointment. However, be aware that if you repeatedly cancel appointments without proper notice, we reserve the right to ask for a non-refundable deposit to secure your next appointment.",
    contentOurPolicyDescription5: "The Gift Card and its balance are valid for a period of six months from the date of purchase. Your Gift Card will cease to be valid six months from the date of purchase and you will no longer be entitled to use it. ",

    //Ảnh customer review - customer-review.js
    cusReviewImage1Alt: "",
    cusReviewImage2Alt: "",
    cusReviewImage3Alt: "",
    cusReviewImage4Alt: "",
    cusReviewImage5Alt: "",
    
    //Thanh Mobile Bottom Nav
    BottomNavButton1IconAlt: "",
    BottomNavButton2IconAlt: "",
    BottomNavButton3IconAlt: "",
    
    //Ảnh Footer
    footerImagePhoneIconAlt: "",
    footerImageMapPointerIconAlt: "",
    
  };

  //Dữ liệu schema
  const schemaData = {
    "@context": "http://schema.org",
    "@type": thongTinTiem1.schemaType,
    "name": thongTinTiem1.tenTiem,
    "image": [
      thongTinTiem2.imageLinkTiem1,
      thongTinTiem2.imageLinkTiem2,
      thongTinTiem2.imageLinkTiem3,
     ],
    "telephone": thongTinTiem1.phoneTiem,
    
    "currenciesAccepted": ["GBP", "AUD", "USD", "EUR", "NZD"],
    "logo": thongTinTiem2.logoSchema,
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": thongTinTiem1.ratingValue,
        "bestRating": thongTinTiem1.bestRating,
      },
      "author": {
        "@type": "Person",
        "name": thongTinTiem1.personReviewAuthorName,
      },
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": thongTinTiem1.geoLatitude,
      "longitude": thongTinTiem1.geoLongitude,
    },
    "url": thongTinTiem1.websiteTiem,
    "priceRange": thongTinTiem1.priceRange,
    
    "hasMap": thongTinTiem1.linkToMapTiem,
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": thongTinTiem1.phoneTiem,
      "areaServed": ["GB","CA","DE","FR","AU","150","151","154","039","155","NZ","CH","SE", "FI","NO","IE","DK","AT","IT"],
      "availableLanguage": "en",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "technical support",
      "telephone": thongTinTiem1.phoneTiem,
      "areaServed": ["GB","CA","DE","FR","AU","150","151","154","039","155","NZ","CH","SE", "FI","NO","IE","DK","AT","IT"],
      "availableLanguage": "en",
    },
    "description": thongTinTiem2.metaDescriptionContent,
    "sameAs": thongTinTiem1.linkToBusinessFacebook,
  }

    
  
  //Danh sách các dịch vụ
  const serviceList1 = {
    service1: "Acrylic Fullset with normal nail polish",
    service1Time: "45 mins",
    service1Price: "28",
    service1Description: "Nail extensions help your hands shine by adding a little length to your natural nail. If you're ready for flawless, fierce nails, let the nail technicians at this salon lend their talent and artistry to your tips.",
  
    service2: "Acrylic Infill with normal nail polish",
    service2Time: "35 mins",
    service2Price: "20",
    service2Description: "Nail refills are recommended around 3 to 4 weeks from the date of the initial application. A quick nail refill is the best way to make the most of your nail extensions.",
  
    service3: "Acrylic Full Set with Shellac",
    service3Time: "1 hr",
    service3Price: "35",
    service3Description: "Nail extensions help your hands shine by adding a little length to your natural nail. If you're ready for flawless, fierce nails, let the nail technicians at this salon lend their talent and artistry to your tips.",
  
    service4: "Acrylic Infill with Shellac",
    service4Time: "45 mins",
    service4Price: "28",
    service4Description: "Nail refills are recommended around 3 to 4 weeks from the date of the initial application. A quick nail refill is the best way to make the most of your nail extensions.",
    
    service5: "Gel Powder Full Set with normal nail polish",
    service5Time: "45 mins",
    service5Price: "28",
    service5Description: "Nail extensions help your hands shine by adding a little length to your natural nail. If you're ready for flawless, fierce nails, let the nail technicians at this salon lend their talent and artistry to your tips.",
  
    service6: "Gel Powder Infill with normal nail polish",
    service6Time: "45 mins",
    service6Price: "20",
    service6Description: "Nail refills are recommended around 3 to 4 weeks from the date of the initial application. A quick nail refill is the best way to make the most of your nail extensions.",
  
    service7: "Full Set Pink & White",
    service7Time: "45 mins",
    service7Price: "35",
    service7Description: "",
  
    service8: "Infill Pink & White",
    service8Time: "45 mins",
    service8Price: "30",
    service8Description: "",
  
    service9: "Full Set Ombre",
    service9Time: "45 mins",
    service9Price: "38",
    service9Description: "Nail extensions help your hands shine by adding a little length to your natural nail. If you're ready for flawless, fierce nails, let the nail technicians at this salon lend their talent and artistry to your tips.",
  
    service10: "Infill Ombre",
    service10Time: "45 mins",
    service10Price: "32",
    service10Description: "Nail refills are recommended around 3 to 4 weeks from the date of the initial application. A quick nail refill is the best way to make the most of your nail extensions.",
  
    service11: "Full Set Colour Powder",
    service11Time: "45 mins",
    service11Price: "32",
    service11Description: "Nail extensions help your hands shine by adding a little length to your natural nail. If you're ready for flawless, fierce nails, let the nail technicians at this salon lend their talent and artistry to your tips.",
  
    service12: "Infill Colour Powder (Same Colour)",
    service12Time: "45 mins",
    service12Price: "23",
    service12Description: "",
  
    service13: "Infill Colour Powder (Different Colour)",
    service13Time: "45 mins",
    service13Price: "25",
    service13Description: "",
  
    service14: "Acrylic Fullset on Feet with normal nail polish",
    service14Time: "45 mins",
    service14Price: "35",
    service14Description: "",
  
    service15: "Acrylic Infill on Feet with normal nail polish",
    service15Time: "45 mins",
    service15Price: "30",
    service15Description: "",
  
    service16: "Acrylic Fullset on Feet with Shellac",
    service16Time: "1 hr",
    service16Price: "40",
    service16Description: "",
  
    service17: "Acrylic Infill on Feet with Shellac",
    service17Time: "1 hr",
    service17Price: "35",
    service17Description: "",
  
    service18: "Take off Powder",
    service18Time: "20 mins",
    service18Price: "12",
    service18Description: "Just take off",
  
    service19: "Take off Acrylic and Redone a Newset",
    service19Time: "1 hr",
    service19Price: "3 to 5",
    service19Description: "Extra from £3 to £5",
  
    service20: "Take off Powder and Polish",
    service20Time: "30 mins",
    service20Price: "18",
    service20Description: "Take off then normal polish",
  
    service21: "Take off Powder + Shellac",
    service21Time: "30 mins",
    service21Price: "28",
    service21Description: "Take off then Shellac",
  
    service22: "Take off Powder + Manicure + Shellac",
    service22Time: "50 mins",
    service22Price: "32",
    service22Description: "Take off then Manicure and then Shellac",
  
    service23: "Dipping Powder SNS (from)",
    service23Time: "45 mins",
    service23Price: "32",
    service23Description: "SNS Dipping Powder creates a stronger polish finish which can help strengthen brittle or weak nails.",
  
    service24: "BIAB buider gel Fullset",
    service24Time: "35 mins",
    service24Price: "37",
    service24Description: "",
  
    service25: "BIAB buider gel Infill",
    service25Time: "30 mins",
    service25Price: "30",
    service25Description: "",

    service26: "Long nails extra",
    service26Time: "",
    service26Price: "5",
    service26Description: "",

    service27: "Single Toe Nails",
    service27Time: "",
    service27Price: "5",
    service27Description: "",

    service28: "Single nails repair",
    service28Time: "",
    service28Price: "3",
    service28Description: "",

    service29: "Take off Acrylic and Redone Acrylic Fullset with normal nail polish",
    service29Time: "1 hr",
    service29Price: "35",
    service29Description: "",

    service30: "Take off Acrylic and Redone Acrylic Fullset with Shellac",
    service30Time: "1 hr",
    service30Price: "40",
    service30Description: "",

    service31: "Take off Ombre and Redone Ombre Fullset",
    service31Time: "1 hr",
    service31Price: "42",
    service31Description: "",

    service32: "Dipping Powder SNS infill",
    service32Time: "40 mins",
    service32Price: "30",
    service32Description: "SNS Dipping Powder creates a stronger polish finish which can help strengthen brittle or weak nails.",

    service33: "Take off and Redone Dipping Powder SNS",
    service33Time: "1 hr",
    service33Price: "35",
    service33Description: "SNS Dipping Powder creates a stronger polish finish which can help strengthen brittle or weak nails.",

    service34: "Take off and Redone Acrylic Fullset on Feet with normal nail polish",
    service34Time: "1 hr",
    service34Price: "38",
    service34Description: "",

    service35: "Take off and Redone Acrylic Fullset on Feet with Shellac",
    service35Time: "1 hr 15 mins",
    service35Price: "43",
    service35Description: "",

    service36: "Take off Powder and Manicure",
    service36Time: "35 mins",
    service36Price: "20",
    service36Description: "Take off powder and then do manicure",
  }; 
  
  const serviceList2 = {
    service1: "Nail shape with Shellac nails on hand",
    service1Time: "30 mins",
    service1Price: "20",
    service1Description: "",
  
    service2: "Nail shape with Shellac nails on feet",
    service2Time: "30 mins",
    service2Price: "20",
    service2Description: "",
  
    service3: "Manicure Shellac",
    service3Time: "40 mins",
    service3Price: "28",
    service3Description: "Manicures are a difficult art to master. No matter how great they look when finished, they seem to always chip within days, if not in a matter of hours. Enter the Gel nail manicure - a groundbreaking technique that uses gel polishes that get 'cured' under UV lights. The result? Shiny, strong nails for weeks and no drying time!",
  
    service4: "Pedicure Shellac",
    service4Time: "40 mins",
    service4Price: "35",
    service4Description: "Please bring Flip Flops/Sandals. Highly recommended with Gel Colour. Last longer and less likely to chip! Fries instantly so you don't have to worry about smudging it.",
  
    service5: "Gel Polish Manicure & Pedicure",
    service5Time: "1 hr 25 mins",
    service5Price: "58",
    service5Description: "Manicure includes massage, cuticle, shaping, file, polish and moisturiser. Pedicure includes scrub, dead skin, cuticle, massage, moisturise, shape, file and polish. Shellac pedicure and manicure lasts up to two weeks, it’s well worth the wait.",
  
    service6: "Take off shellac and Redone Gel Polish on Hand",
    service6Time: "30 mins",
    service6Price: "25",
    service6Description: "",
  
    service7: "Take off shellac and Redone Gel Polish on Feet",
    service7Time: "40 mins",
    service7Price: "25",
    service7Description: "",
  
    service8: "Take off shellac",
    service8Time: "20 mins",
    service8Price: "8",
    service8Description: "Just take off shellac",
  };
  
  const serviceList3 = {
    service1: "Manicure with normal polish",
    service1Time: "30 mins",
    service1Price: "18",
    service1Description: "A classic manicure is all you need to take great care of your hands and nails. Includes massage, cuticle, shaping, file, polish and moisturiser.",
  
    service2: "Pedicure with normal polish",
    service2Time: "40 mins",
    service2Price: "28",
    service2Description: "A classic pedicure is all you need to take great care of your feet and nails. Includes scrub, dead skin, cuticle, massage, moisturise, shape, file and polish.",
    
    service3: "Luxury Pedicure",
    service3Time: "40 mins",
    service3Price: "53",
    service3Description: "Get healthy, happy feet with the help of VOESH's Pedi in a Box Deluxe 4-Step pedicure system. This single-use pedicure kit contains a sea salt soak, sugar scrub, mud masque, and massage butter to detoxify, exfoliate, cleanse, and hydrate your skin. Plus Disposable Pedicure Pro Pack for use at the treatment or you can bring it home.",
    
    service4: "Manicure & Pedicure with normal polish",
    service4Time: "1 hr 15 mins",
    service4Price: "43",
    service4Description: "Manicure includes massage, cuticle, shaping, file, polish and moisturiser. Pedicure includes scrub, dead skin, cuticle, massage, moisturise, shape, file and polish.",
  
    service5: "Men's Manicure & Pedicure",
    service5Time: "1 hr 15 mins",
    service5Price: "40",
    service5Description: "Manicure includes massage, cuticle, shaping, file, polish and moisturiser. Pedicure includes scrub, dead skin, cuticle, massage, moisturise, shape, file and polish.",
  
    service6: "Shape & paint on hands",
    service6Time: "15 mins",
    service6Price: "12",
    service6Description: "",
  
    service7: "Shape & paint on toes",
    service7Time: "15 mins",
    service7Price: "15",
    service7Description: "",

    service8: "Smoothing Pedicure with normal polish",
    service8Time: "45 mins",
    service8Price: "35",
    service8Description: "Starting with a Mineral Herbal Bath Soak then followed by a gentle massage and exfoliation with natural Body Liquid Lufra.After nails and cuticles are carefully trimmed and shape, heels are treated with all spice berry solution. Finish with a traditional lower leg message using body Smoother solution leaving your skin feeling silky",

    service9: "Smoothing Pedicure with gel polish",
    service9Time: "45 mins",
    service9Price: "40",
    service9Description: "Starting with a Mineral Herbal Bath Soak then followed by a gentle massage and exfoliation with natural Body Liquid Lufra.After nails and cuticles are carefully trimmed and shape, heels are treated with all spice berry solution. Finish with a traditional lower leg message using body Smoother solution leaving your skin feeling silky",

    service10: "Icedancer Pedicure with normal polish",
    service10Time: "50 mins",
    service10Price: "40",
    service10Description: "Your feet have been longawaiting for rejuvenating pedicur. Say ahh… to a warm whirlpool soaking with Mineral Herbal Bath. Then a gentle massage and Walnut Husk Liquid Body Lufra exfoliation.While regular pedicure components are tented, a calf massage with the Invigorating Icedancer and steamy towel wrap are added for restoring vitality and energizing the legs. Dry heel are also treated with an all Spice Berry Sole Solution. Finish with a soft yet intense hydrating Baobab Body Butter for an ultimate experience.",

    service11: "Icedancer Pedicure with gel polish",
    service11Time: "50 mins",
    service11Price: "45",
    service11Description: "Your feet have been longawaiting for rejuvenating pedicur. Say ahh… to a warm whirlpool soaking with Mineral Herbal Bath. Then a gentle massage and Walnut Husk Liquid Body Lufra exfoliation.While regular pedicure components are tented, a calf massage with the Invigorating Icedancer and steamy towel wrap are added for restoring vitality and energizing the legs. Dry heel are also treated with an all Spice Berry Sole Solution. Finish with a soft yet intense hydrating Baobab Body Butter for an ultimate experience.",

    service12: "Firewalker Pedicure with normal polish",
    service12Time: "60 mins",
    service12Price: "45",
    service12Description: "Your feet have been longawaiting for rejuvenating pedicur. Say ahh… to a warm whirlpool soaking with Mineral Herbal Bath. Then a gentle massage and Walnut Husk Liquid Body Lufra exfoliation.While regular pedicure components are tented, a calf massage with the Invigorating Icedancer and steamy towel wrap are added for restoring vitality and energizing the legs. Dry heel are also treated with an all Spice Berry Sole Solution. Finish with a soft yet intense hydrating Baobab Body Butter for an ultimate experience.",

    service13: "Firewalker Pedicure with gel polish",
    service13Time: "60 mins",
    service13Price: "50",
    service13Description: "Your feet have been longawaiting for rejuvenating pedicur. Say ahh… to a warm whirlpool soaking with Mineral Herbal Bath. Then a gentle massage and Walnut Husk Liquid Body Lufra exfoliation.While regular pedicure components are tented, a calf massage with the Invigorating Icedancer and steamy towel wrap are added for restoring vitality and energizing the legs. Dry heel are also treated with an all Spice Berry Sole Solution. Finish with a soft yet intense hydrating Baobab Body Butter for an ultimate experience.",

    service14: "Smoothing Manicure with normal polish",
    service14Time: "40 mins",
    service14Price: "28",
    service14Description: "Starting with a Mineral Herbal Bath Soak then followed by a gentle massage and exfoliation with natural Body Liquid Lufra.After nails and cuticles are carefully trimmed and shape, heels are treated with all spice berry solution. Finish with a traditional lower leg message using body Smoother solution leaving your skin feeling silky",

    service15: "Smoothing Manicure with gel polish",
    service15Time: "40 mins",
    service15Price: "35",
    service15Description: "Starting with a Mineral Herbal Bath Soak then followed by a gentle massage and exfoliation with natural Body Liquid Lufra.After nails and cuticles are carefully trimmed and shape, heels are treated with all spice berry solution. Finish with a traditional lower leg message using body Smoother solution leaving your skin feeling silky",

    service16: "Icedancer Pedicure & Manicure with normal polish",
    service16Time: "90 mins",
    service16Price: "55",
    service16Description: "Your feet & hand have been longawaiting for rejuvenating pedicure & manicure. Say ahh… to a warm whirlpool soaking with Mineral Herbal Bath. Then a gentle massage and Walnut Husk Liquid Body Lufra exfoliation.While regular pedicure components are tented, a calf massage with the Invigorating Icedancer and steamy towel wrap are added for restoring vitality and energizing the legs. Dry heel are also treated with an all Spice Berry Sole Solution. Finish with a soft yet intense hydrating Baobab Body Butter for an ultimate experience",

    service17: "Icedancer Pedicure & Manicure with gel polish",
    service17Time: "90 mins",
    service17Price: "70",
    service17Description: "Your feet & hand have been longawaiting for rejuvenating pedicure & manicure. Say ahh… to a warm whirlpool soaking with Mineral Herbal Bath. Then a gentle massage and Walnut Husk Liquid Body Lufra exfoliation.While regular pedicure components are tented, a calf massage with the Invigorating Icedancer and steamy towel wrap are added for restoring vitality and energizing the legs. Dry heel are also treated with an all Spice Berry Sole Solution. Finish with a soft yet intense hydrating Baobab Body Butter for an ultimate experience",
  };
  
  const serviceList4 = {
    service1: "Asian Style Hair Wash, Head Massage",
    service1Time: "30 mins",
    service1Price: "35",
    service1Description: "Apart from using the highest quality products, we will apply our trademark hair wash and head massage technique, ensuring that you will enjoy the moment our hands massage into your scalp ensuring the conditioner absorbs deep into the hair shaft. The Indian head massage is extended to the neck, shoulders and upper arms. The treatment is completed by a complete head and facial rinse.",
  
    service2: "Balance , Moisturising Shampoo",
    service2Time: "45 mins",
    service2Price: "45",
    service2Description: "Starts with a gentle hair wash and scalp massage using popular branded hair shampoo (Nu Skin shampoo avaiable if required at extra cost). The hair is rinsed in comforting warm water. A luxurious cream (Nu Skin ageLOC LumiSpa Cleanser) is then applied and gently rubbed into the face using the Nu Skin ageLOC LumiSpa device which deep cleans and invigorates the facial tissues.The Indian head massage is extended to the neck, shoulders and upper arms. The treatment is completed by a complete head and facial rinse.",
  
    service3: "AgeLoc Nutriol Scalp & Hair Shampoo",
    service3Time: "60 mins",
    service3Price: "70",
    service3Description: "A holistic hair beauty system, Ageloc Nutriol Scalp & Hair System product contain powerfull ingredients for a scientifically advance treatment that, when combined with Ageloc Galvanise Spa, delivers instant benefits for your hair and lasting results up to your sclap. Enjoy a healthier hair appearance that looks & feels thicker, fuller, stronger, softer, shinier. Invest in hair up to your scalp, it’s the crown you wear every day!",
    
    service4: "",
    service4Time: "50 mins",
    service4Price: "35",
    service4Description: "",
  
    service5: "",
    service5Time: "1 hr",
    service5Price: "55",
    service5Description: "",
  }; 
  const serviceList5 = {
    service1: "Nail Design (from)",
    service1Time: "",
    service1Price: "3",
    service1Description: "",
  
    service2: "Diamond Crystal x10",
    service2Time: "",
    service2Price: "3",
    service2Description: "",

    service3: "3D nail art (from)",
    service3Time: "",
    service3Price: "5",
    service3Description: "",
  }; 
  
  const serviceList6 = {
    service1: "Eyebrow Shape",
    service1Time: "15 mins",
    service1Price: "5",
    service1Description: "",
  
    service2: "Lip waxing",
    service2Time: "15 mins",
    service2Price: "5",
    service2Description: "",
  
    service3: "Chin waxing",
    service3Time: "15 mins",
    service3Price: "5",
    service3Description: "",
  
    service4: "Under arm waxing",
    service4Time: "15 mins",
    service4Price: "5",
    service4Description: "",
  
    service5: "Bikini line",
    service5Time: "20 mins",
    service5Price: "15",
    service5Description: "",
  
    service6: "Brazilian waxing",
    service6Time: "20 mins",
    service6Price: "25",
    service6Description: "",
  
    service7: "Hollywood waxing",
    service7Time: "20 mins",
    service7Price: "30",
    service7Description: "",
  
    service8: "Full leg waxing",
    service8Time: "20 mins",
    service8Price: "30",
    service8Description: "",
  
    service9: "Half leg waxing",
    service9Time: "15 mins",
    service9Price: "20",
    service9Description: "",
  
    service10: "Full arm waxing",
    service10Time: "20 mins",
    service10Price: "25",
    service10Description: "",
  
    service11: "Half arm waxing",
    service11Time: "15 mins",
    service11Price: "15",
    service11Description: "",
  
    service12: "Eye - Last Lift With Tinting",
    service12Time: "",
    service12Price: "40",
    service12Description: "PATCH TEST 24 HOURS PRIOR",
  
    service13: "Eyebrow tinting / Eyelash tinting",
    service13Time: "20 mins",
    service13Price: "10",
    service13Description: "PATCH TEST 24 HOURS PRIOR",
  
    service14: "Eyebrow THREADING",
    service14Time: "15 mins",
    service14Price: "8",
    service14Description: "",
  
    service15: "Lip THREADING",
    service15Time: "15 mins",
    service15Price: "6",
    service15Description: "",
  
    service16: "Chin THREADING",
    service16Time: "15 mins",
    service16Price: "8",
    service16Description: "",
  };

  const serviceList7 = {
    service1: "AgeLoc Moisturzing Refresh Mask",
    service1Time: "30 mins",
    service1Price: "30",
    service1Description: "Treat yourself to a refreshing mask that will deep cleanse, exfoliate and moisturise your facial tissues leaving you with a rejuvenated look",
  
    service2: "AgeLoc Refreshing Mask for Oily Skin",
    service2Time: "40 mins",
    service2Price: "40",
    service2Description: "Alternatively, if you suffer from oily skin, treat yourself a refreshing face mask that will deep cleanse and remove excessive oil on from your facial tissues, leaving your skin a clean, balanced structure and a healthy looking.",

    service3: "AgeLoc Face Lift",
    service3Time: "50 mins",
    service3Price: "60",
    service3Description: "To exfoliate dead skin, lift and tighten the facial for a firmer, more youthful appearance. We use AgeLoc Cleanse & Tone",

    service4: "AgeLoc Anti Aging Facial",
    service4Time: "60 mins",
    service4Price: "70",
    service4Description: "Reduce fine line and restore skin to a more youthful look. Facial tissues are stimulatedfor an improved appearance. Provide facial toning, improves facial contouring, thereby making the skin look more voluminous: Tru Face, Features microcurrent technology, Clean & reduces pores.",
  }; 
  
  export { thongTinTiem1 };
  export { thongTinTiem2 };
  export { schemaData };
  export { serviceList1 };
  export { serviceList2 };
  export { serviceList3 };
  export { serviceList4 };
  export { serviceList5 };
  export { serviceList6 };
  export { serviceList7 };

  export default function Info() {
    return (
      <>
      </>
      );
    }