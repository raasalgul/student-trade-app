import About from "../about/About";
import ContactUs from "../contact_us/ContactUs";
import Home from "../home/Home";
import UserInfo from "../profile/UserInfo";
import SignIn from "../sign-in/SignIn";
import SignUp from "../sign-up/SignUp";
import Accommodation from "../addPost/Accommodation";

export const tabs={
    "Home":{
        name:"Home",
        url:"/home",
        file:Home
    },
    "Profile":{
        name:"Profile",
        url:"/profile",
        file:UserInfo
    },
    "Post":{
        name:"Post",
        url:"/post",
        file:Accommodation
    },
    "About":{
        name:"About",
        url:"/about",
        file:About
    },
    "Contact_us":{
        name:"Contact_us",
        url:"/contact-us",
        file:ContactUs
    },
    "Sign_in":{
        name:"Sign_in",
        url:"/sign-in",
        file:SignIn
    },
    "Sign_up":{
        name:"Sign_up",
        url:"/sign-up",
        file:SignUp
    }
}