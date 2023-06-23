import Link from 'next/link';
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import 'react-calendar/dist/Calendar.css';
import { useRouter } from 'next/router';
import { Form, Accordion, Button } from 'react-bootstrap';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";


export default function FormDeLaiThongTin(){
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [messageCharacterLeft, setMessageCharacterLeft] = useState(500);
    const [submitted, setSubmitted] = useState(false);

    const firebaseConfig = {
        apiKey: "AIzaSyBy8QYL9HsvqoL30Zkyrw26nncOQELS6Ew",
        authDomain: "test-flutter-app-all.firebaseapp.com",
        projectId: "test-flutter-app-all",
        storageBucket: "test-flutter-app-all.appspot.com",
        messagingSenderId: "709782149638",
        appId: "1:709782149638:web:376932e444c9e816380187",
        measurementId: "G-ZSR1DX26V6"
      };
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
    

    
      //Cần chuyển trang, tóm lại là thông báo cho ng ta biết là thông tin của ng ta đã đc gửi rồi
    async function handleSubmit(e) {
        //Ngăn hành vi mặc định của form khi submit là tải lại trang
        e.preventDefault();
        var user = {
            "First Name": firstName,
            "Last Name": lastName,
            "Email": email,
            "Phone Number": phoneNumber,
            "Message": message,
        }

        //Ghi dữ liệu form vào firestore
        //Đây mới chỉ là mẫu, cần lấy dữ liệu từ nội dung của form
        //Collection này ghi là "leads"
        //Xong rồi sẽ cần phải có thông báo gửi đến email của mình là có khách để lại thông tin, cái này đã làm rồi, qua file booking app cho tiệm gorgeous mà xem
        //Ng ta bấm submit rồi thì gửi email đến cho ng ta, tiện thể quảng cáo về các kênh của mình luôn => Để làm cái này thì sẽ cần host trên vercel rồi dùng iframe
        /*
        try {
            const docRef = await addDoc(collection(db, "leads"), user);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        */

          if (typeof window !== 'undefined'){
            //Khách cần nhập số điện thoại mới đc book
            var regExp = /[a-zA-Z]/g;
            
            if(regExp.test(phoneNumber)){
            //Nếu trong sđt có chữ thì hiện thông báo
            document.getElementById("phone-notice").style.display = "block";
            } else {
            //Nếu trong sđt ko có chữ thì thông báo biến mất, mặc định là thông báo ko hiện
                document.getElementById("phone-notice").style.display = "none"; 
                try {
                    const docRef = await addDoc(collection(db, "leads"), user);
                    } catch (e) {
                    console.error("Error adding document: ", e);
                    }
                } 
            }
        }
        
        
        

    function handleFirstNameChange(event){
        return setFirstName(event.target.value);
    }

    function handleLastNameChange(event){
        return setLastName(event.target.value);
    }

    var maxPhoneNumberLength = 20;
    function handlePhoneNumberChange(event){
            

        return setPhoneNumber(event.target.value);
    }
    function handleEmailChange(event){
        return setEmail(event.target.value);
    }

    function handleBusinessNameChange(){

    }

    function handlePostCodeChange(){

    }

    var maxMessageLength = 500;
    function handleMessageChange(event){
        var characterLength = event.target.value.length;
        var characterLeft = maxMessageLength - characterLength;
        setMessageCharacterLeft(characterLeft);
        return setMessage(event.target.value);
    }

    const [value, setValue] = useState()

    return(
        <>
            
            <div className="form-name">
                <div className="form-name-first-sentence">
                    Phát triển công việc kinh doanh của bạn với Best Salon Marketing
                </div>
                <div className="divider">
                    <hr className="solid" />
                </div>
                <div className="form-name-leave-info">
                    Để lại thông tin dưới đây chúng tôi sẽ liên hệ lại với Quý Anh Chị Em sớm nhất
                </div>
            </div>
            <div className="form-container">
                <form className="booking-form" method="POST" autoComplete="on" target="_self" onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-item">
                        <div className="form-item-name">
                            <div className="form-item-first-name">
                                <input 
                                className="form-item-first-name-input" 
                                type="text" 
                                name="first-name" 
                                onChange={event=>handleFirstNameChange(event)} 
                                placeholder="*First Name" required />
                            </div>
                            <div className="form-item-last-name">
                                <input className="form-item-last-name-input" type="text" name="last-name" onChange={event=>handleLastNameChange(event)} placeholder="*Last Name" required />
                            </div>
                        </div>   
                    </div>
                    <div className="form-item">
                        <div className="phone-notice" id="phone-notice">
                            **Please enter your phone number
                        </div>
                        <div>
                            <input 
                            className="form-item-phone-number-input" 
                            type="tel" 
                            id="phoneNumber-id" 
                            name="phoneNumber" 
                            maxLength={maxPhoneNumberLength}
                            
                            title="Quý anh chị em vui lòng nhập đúng số điện thoại"
                            onChange={event=>handlePhoneNumberChange(event)} placeholder="*Phone Number Ex: 0797XXXXXXX" required />
                        </div>
                    </div>
                    <div className="form-item">
                        <div>
                            <input 
                                className="form-item-email-input"  
                                type="email" 
                                name="email" 
                                id="email-id"
                                onChange={event=>handleEmailChange(event)} placeholder="*Email" required/>
                        </div>
                    </div>
                    <div className="form-item">
                        <div>
                            <input 
                                className="form-item-business-name-input"  
                                type="text" 
                                name="business-name" 
                                id="business-name-id"
                                onChange={event=>handleBusinessNameChange(event)} placeholder="*Business Name (Tên tiệm)" required/>
                        </div>
                    </div>
                    <div className="form-item">
                        <div>
                            <input 
                                className="form-item-postcode-input"  
                                type="text" 
                                name="postcode" 
                                id="postcode-id"
                                onChange={event=>handlePostCodeChange(event)} placeholder="*Post Code / Zip Code" required/>
                        </div>
                    </div>
                    <div className="form-item">
                        <div>
                            <textarea 
                                className="form-item-message-input" 
                                id="message" 
                                name="message" 
                                rows="5" 
                                cols="50" 
                                maxLength="500"
                                onChange={event=>handleMessageChange(event)} placeholder="Your message">
                            </textarea>
                        </div>
                        <div className="message-character-left">
                            {messageCharacterLeft}/{maxMessageLength}
                        </div>
                    </div>
                    
                    <div>
                        <input className="form-item-submit-input" type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </>
    )
}
