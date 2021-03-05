import Dashboard from "../screens/dashboard/Dashboard";
import SignIn from "../screens/signIn/SignIn";
import UserProfile from "../screens/user-profile/user-profile";
import Ngoprofile from "../screens/Ngoprofile/Ngoprofile";
import Invitation from "../screens/Invitationdetails/Invitation";
import Topslidebar from "../screens/topslidebar/Topslidebar";
import Faq from "../screens/Faqdata/Faq";
import About from "../screens/aboutdata/About";
import Volunteer from "../screens/volunteer/Volunteer";
import Contactus from "../screens/contact us/Contactus";
import ForgotPassword from "../screens/forgotpassword/App";
import Donationdetails from "../screens/donation/donation detail/Donationdetails";
import Donationrecieved from "../screens/donation/donationrecieved/Donationrecieved";


let routes = [
  {
    path: "/dashboard",
    title: "/dashboard",
    exact: true,
    component: () => <Dashboard/>
  },
  {
    path: "/user-profile",
    title: "/user-profile",
    exact: true,
    component: () => <UserProfile/>
  },
  {
    path: "/ngo-profile",
    title: "/ngo-profile",
    exact: true,
    component: () => <Ngoprofile/>
  },
  {
    path: "/invitation",
    titile: "/invitation",
    exact: true,
    component: () => <Invitation/>
  },
  {
    path: "/topslidebar",
    titile: "/topslidebar",
    exact: true,
    component: () => <Topslidebar/>
  },
  {
    path: "/faq",
    titile: "/faq",
    exact: true,
    component: () => <Faq/>
  },
  {
    path: "/aboutdata",
    title: "/aboutdata",
    exact: true,
    component: () => <About/>
  },
  {
    path:"/volunteer",
    title:"/volunteer",
    exact: true,
    component: () => <Volunteer/>
   },
   {
     path:"/contactus",
     title:"/contactus",
     exact: true,
     component: () => <Contactus/>
   },
   {
     path:"/forgotpassword",
     title:"/forgotpassword",
     exact: true,
     component: () => <ForgotPassword/>

   },
   {
     path:"/donationdetails",
     title:"/donationdetail",
     exact: true,
     component: () => <Donationdetails/>
   },
   {
    path:"/Donationrecieved",
    title:"/Donationrecieved",
    exact: true,
    component: () => <Donationrecieved/>
  },
 
];

export default routes;
