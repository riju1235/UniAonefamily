import React from 'react';
import './App.css';

import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';

// import Navbar from './components/inc/Navbar';
import Finddoctor from './components/pages/Finddoctor';
import Consult from './components/pages/Consult';
import Mainpage from './components/pages/Mainpage';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Footer from './components/inc/Footer';
import Labtest from './components/pages/Labtest';
import Xray from './components/pages/Xray';
import Hospital from './components/pages/Hospital';
import Readarticle from './components/pages/Readarticle';
import Surgery from './components/pages/Surgery';
import Corporate from './components/pages/Corporate';
import Post from './components/pages/Post';
import Job from './components/pages/Job';
import Social from './components/pages/Social';

import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Terms from './components/pages/Terms';
import Clinic from './components/pages/Clinic';
import Checkup from './components/pages/Checkup';
import Dashboard from './components/pages/Dashboard';
import Record from './components/pages/Record';
import Privacy from './components/pages/Privacy';
import Phonesign from './components/pages/Phonesign';
import PaginationOld from './components/pages/PaginationOld';
import Press from './components/pages/Press';
import Developers from './components/pages/Developers';



import UserAuthContextProvider from './contexts/UserAuthContext';
import ProtectedRoute from './components/pages/ProtectedRoute';
import DocConsult from './components/pages/DocConsult';
import UserDashboard from './components/pages/UserDashboard';
import AllDoctors from './components/pages/AllDoctors';
import RegisterDoc from './components/pages/RegisterDoc';
import AddBook from './components/AddBook';
import AddLabbook from './components/AddLabbook';






function App() {
  return (

    <Router>
        <UserAuthContextProvider>
    <div>
     {/* <Navbar/> */}
    
    
     <Routes>
     <Route axact path="/addlabbook" element={<AddLabbook/>}/>
     <Route axact path="/socialwork" element={<Social/>}/>
     <Route axact path="/developers" element={<Developers/>}/>
     <Route axact path="/press" element={<Press/>}/>
     <Route axact path="/paginationOld" element={<PaginationOld/>}/>
     <Route axact path="/phonesign" element={<Phonesign/>}/>
     <Route axact path="/job" element={<Job/>}/>
     <Route axact path="/checkup" element={<Checkup/>}/>
     <Route axact path="/privacy" element={<Privacy/>}/>
     <Route axact path="/record" element={<Record/>}/>
     <Route axact path="/dashboard" element={<Dashboard/>}/>
       <Route axact path="/addbook" element={<AddBook/>}/>
     <Route axact path="/post" element={<Post/>}/>
     <Route axact path="/contact" element={<Contact/>}/>
     <Route axact path="/about" element={<About/>}/>
     <Route axact path="/clinic" element={ <Clinic/> }/>
     <Route axact path="/terms" element={<Terms/>}/>
    
     <Route axact path="/hospital" element={<Hospital/>}/>
     <Route axact path="/readarticle" element={<Readarticle/>}/>

       <Route axact path="/" element={<Mainpage best1="Surgeries" best2="Best surgeries care" best3="Click Surgeries" finddoctors="Find Doctors Near You" appoint="Confirmed appointment" click1="Click Appointment" 
     vconsult="Instant Video Consultation" clickc="Click LabTest" lab1="Lab Tests" athome=" Sample pickup at your home" clicklab="Click Labtest" 
     consulttop="Consult top doctors online for any health concern"  consult="Connect Within 60 Second" verif="Private online consultation with verified doctors in all specialists" period="Period doubts or Pregnancy" acne="Acne, pimple or skin issues" bed="Perfomance issues in bed" cold="Cold, cough or fever" depression="Depression or anaxiety" child="Child not felling well" clinic="Book an appointment for an in-clinic consultation" clinicc="Find experienced doctors across all specialists" 
     Pregnancy=" Explore for women's helth, pregnancy and infertility treartments" gyno="Gynecologist / Obstetrician" dent="Teething troubles? Schedule a dental checkup, Bad breath, Gum problems" dentname="Dentists" rightdoct=" Find the right family doctorm in your neighborhood, India's top doctors" general="General physician" article="Read top articles from health expert" toparticle="Get health tips from expert" read="READ MORE ARTICLE" articlename="Coronavirus" title1="5 ways to keep COVID-19 away" 
     drname="Dr. Anuradha Sharma" healtht="Dialy Health Tips" title2="Eat a healthy diet, Consume less salt and sugar." drname2="Dr.Bidesha Mukherjee " millionpatient="Millions of Happy Patient" testimonial=" Uniaone builds the world's most dynamic website and supports it forever" pname1="Nilkanta Biswas" testimonial2=" It is very easy to book a doctor here, the doctors in this web site are God." pname2="Saraswati Mondal" testimonial3="Our family is healthy by showing the doctor through this website." pname3="Kalyani Roy" />}/>
       
        <Route axact path="/finddoctor" element={<Finddoctor link1="" link2="" slideb="BOOK"  company="Uniaonefamily" phelp="Millions of patient helpful this website" topd1="Dr. Gouranga Patel" speciality="Consultant - Department Of Neurosurgery" quali="QUALIFICATION" degree="MBBS (Gold Medallist) | MS | MCh (Neurosurgery) |"   name="Dr. Ishani Sarkar" degree2="Consultant - Department Of Neurosurgery" quali2="QUALIFICATION" degree3="MBBS (Gold Medallist) | MS | MCh (Neurosurgery) |"  istaapp="200,000 Verified Doctors" patient2= " 5Million+ Patient Recomendation" patient3=" 25Millions Patient/year"   textdoc1="FIND ME THE RIGHT DOCTOR" topd2="Dr. Pilat Shaikh " degree4="Consultant - Department Of Neurosurgery" quali4="QUALIFICATION" 
     degree5="MBBS (Gold Medallist) | MS | MCh (Neurosurgery) |" healthrec="All your medical records" secureap="In one secure app." bitop="256-bit end to end encryption" recordacs="Records are accessible" howcenter=" Access your across 120+ centres" findout="Find out more" downap="Download the Uniaonefamily " ap="app" bookda="Book doctor appointment" booklab="Book lab test" bookcons="Online doctor consult" storerec="Store your health records" xray="Book X-ray & scane" readhealth="Read health tips"  />}/>
        <Route axact path="/consult" element={<Consult mainheading="#Talk to Specialist Doctors online" maincontent="Contect securely anytime, anywhere with 24X7 doctors avialable just for you" call="Video Call + Audio call"
    freefollow="Verified Doctor । Digital prscription । Free Followup" speciality="20+ Speciality" text4="Consult with top Doctors across specialities"  consult1="Gynaecology" consult2="Sexology" consult3="Stomach&digestion" consult4="Pediatrics" consult5="Dermatology" common1="Cough & Cold" common2="Vaginal infections" common3="Period problems"  common4="Performance issues in bed"  rupees="249" rupees2="299"
    rupees3="199" rupees4="299" rupees5="249" common="Common Health Concerns" commonp="Consult a doctor online for any health issue" hours1="24X7 HOURS" hours2="24X7 HOURS" hours3="24X7 HOURS" hours4="24X7 HOURS" rupeesb="199" rupeesb1="149" rupeesb2="249"
    itwork="How it works?" works1="Select a speciality or symptom" works2="Audio / video call with a verified doctor" works3="Get a digital prescription & a free follow-up" userhap="Happy Users" verifieddoc="Verified Doctors" ratings="Doctor Rating"   rupeesb3="199" user="2MILLIONS+" userb="1.5MILLIONS+" userc="20+" userd="4.5/5"/>}/>
        <Route axact path="/Signup" element={<Signup joinuniaone="Join Uniaonefamily" youdoct="Are you a doctor?" regis="Register here" location="+91(IND)" location1="+1(USA)" location2="+44(ENG)" location3="+65(SGP)" location4="+44(SCT)" location5="+94(LK)" location6="+41(CH)" location7="+880(BGD)" location8="+55(BRA)" location9="+971(UAE)" location10="+975(BT)" location11="+63(PHL)" location12="+972(ISR)" location13="+355(ALB)" location14="+213(DZA)" location15="+" termsing="I agree with Uniaonefamily terms of use & privacy agreement" subm="Let's  Get  Started "  />}/>
        <Route axact path="/labtest" element={<Labtest Screening="Health Checkups and Screenings For"  mainl="Top Booked Diagnostic Tests" testn1="COVID TESTS" testc1="Konwn as Covid-19 Virus Qualitative Pcr Throat" rupees="299" testn2="Thyroid profile" testc2="Known as Thyriod profile Total Blood" rupees2="349" 
    testn3="Lipid profile" testc3="known as Lipid Profile Blood" rupees3="399" testn4="Liver Function Test" testc4="Know as Liver Functiuon Tests Blood" rupees4="299" testn5="HbA1c" testc5="known as Glycosylated Haemoglobin Blood" rupees5="150" age="Ideal for individuals aged 18-45 years"
    checkupn="Working Women's Health Checkup" testno="95 tests included" rupeesb1="1899" age2="Ideal for individuals aged 15-40 years"  checkup2="Basic Women's Health Checkup" testno2="85 test included" rupeesb2="899 +10% Health cashback* T&C" 
    age3="Ideal for individuals aged 30-50 years" checkupn3="Young India Health Checkup" testno3="95 tests included"  rupeesb3="1999 +10% Health cashback* T&C" 
    partnerlab="Our Partner Labs" partnerl1="Your tests will be conducted in one of our partner labs" partnerl2br="to
    ensure highest accurachy of your reports." whylab="Why book with us?" sample="Home sample collection for FREE" whyl1="A certified professional will collect your sample" whyl1br=" from your preferred location" sample2="Get digital report within a day" whyl2="Our labs ensure turn-around-time of 24 hours from specimen pickup" sample3="Offers and affordable prices" whyl3="Get great discounts and offers on tests and packages." itworkl="How it works?" itwork1="Search for tests and packages and seamlessly book a home sample collection." itwork2="We will send a certified professional to your place t assist you with the sample collection" itwork3="We will email you the reports. You can also access your reports within your account on  the Unaionefamily app"  
    titlehappy="Millions of Happy Customer"   customertell="  The country's progress economy  Doctors are healing the patient and improving the country" customername="Sanmukh Mukherjee"
    customertell2="In the Uniaone family I get the confidence to see a doctor because there are registered doctors on this website." customername2="Anupama Biswas" customertell3=" I like this initiative and I am healthy even after consulting a doctor." customername3="Vibek Sarkar"/>}/> 
        <Route axact path="/Xray" element={<Xray main="On Scan & Xray" title="radiology services from best labs in your city & get" title1="hassle-free, quality care at attractive discounts." advance="#Advance Scan Technology" need="Need help with booking your Scan & Xray"
    call= "1800 000 555" scantest="Available Tests" name="Ultrasound" price="Starting @ ₹349"name1="MRI Scan" price1="Starting @ ₹2499" name2="CT Scan" price2="Starting @ ₹599" name3="PET Scan" price3="Starting @ ₹5999" name4="ECG Scan"
    price4="Starting @ ₹699" name5="TMT Scan" price5="Starting @ ₹799" name6="ECHO Scan" price6="Starting @ ₹549" name7="X-Ray" price7="Starting @ ₹149"/>}/>

      <Route axact path="/Login" element={<Login log="Login " sup="Singup" unaionefam="Uniaonefamily" nabl="Certified doctors,, NABL accredited labs and more" forgate="Forget password?" socialterm="By Clicking on the Continue button or Social Profiles,
    you agree to our Privacy Policy  &  Terms of Use" loginf="Login"  />}/>

<Route axact path="/Readarticle" element={<Readarticle  dr="Dr. Sanchai Biswas"/>}/>
      <Route axact path="/Surgery" element={<Surgery  surgerypr="Surgeries we provide" surgeryn1="Harnia" surgeryn2="Piles" surgeryn3="Anal fissure" surgeryn4="Appenictics" surgeryn5="VSD" surgeryn6="Varicose Vein" surgeryn7="Lipoma" surgeryn8="Hystercetomy" surgeryn9="Kidney" surgeryn10="Pacemaker" surgeryn11="Coronary Angoiplasty" surgeryn12="Pilonidal Sinus" whysur="Why Choose us?" surg1="Access to 300+ surgeons from the" surg1br="best hospitals" surg2="Expert Surgeons with 10+ years of " surg2br="experience" surg3="Instant appointment with top doctors" surg3br="across India" surg4="Reliable and safe process" surg5="India's top hispital " surg6="600+ surgeries done every month by " surg6br="Uniaonefamily network hospitals" helpbooks=" Need help with booking your surgery?" helpno="Help Line Number"   phone="9933798896" location1="Kolkata" location2="Berhampur" location3="Bengalore" location4="Hydrabad" 
    location5="Chennai" location6="Ranaghat" location7="Burdwan" location8="Goa" location9="Pune" location10="Mumbai" location11="Paris" location12="London" location13="Kalyani" location14="Singapore"  location15="New York" location16="Moscow" location17=" Tokyo" Location18="Los Angeles" location19="Barcelona" location20="Chicago"  bookappoint="Book Appointment " />}/>
       <Route axact path="/Corporate" element={<Corporate heading1="#Unioanefamily for Corporates" head2="Create customized health plans for your employees that cater to their health" head2br="and wellness needs. Talk to our experts for more details." head3="Get your organization’s health and wellness" head3br=" programme powered by Uniaonefamily" emplsiz="Choose..." emplsiz2="˂=500" emplsiz3="501-1000" emplsiz4="1001-2000" emplsiz5="2001-5000" emplsiz6="5001-10000" emplsiz7="10001-50001" 
          emplsiz8="50001-1Lakh" emplsiz9="1Lakh-5Lakh" emplsiz10="5Lakh+" sub="Submit" employeesp="Choose the best for you and your employees"  feture1="FIND DOCTOR" feturec1="Book doctor appointment" feturecbr1="all specialities" feture2="24X7 HOURSE" feturec2="Online surgeries book accreoss 20+ specialities" feture3="LIFE TIME HEALTH RECORDS" feturec3="All your medical records" feture4="DIAGNOSTIC TEST" feturec4="Free home sample collection" feture5="24/7 Mental Health" feturec5="Online doctor consultaion accreoss 20+ specialities" 
          feture6="INDIA'S VERIFIED CLINICS" feturec6="Search Clinic" whyunia="Why Choose Uniaonefamily?" trustuser="Trusted by 2 lakhs+ users every month" custo="2 Lakhs+" last1="Monthly Customer" verified="10000+" last2="Verifiyed Doctor" appoint="4 Lakhs+" last3="Doctor Appointment"    />}/>
      <Route axact path="/RegisterDoctor" element={<RegisterDoc/>}/>
          <Route axact path="/AllDoctors" element={<AllDoctors/>}/>
          <Route path="/DocConsult/:docId" element={<DocConsult/>}/>
          <Route axact path="/UserDashboard/:userId" element={<ProtectedRoute> <UserDashboard/> </ProtectedRoute>}/>

     
       </Routes>
       <Footer/>
     
    </div>
    </UserAuthContextProvider>
    </Router>
  );
}

export default App;
