import AppNav from "./componenets/FirstSection/AppNav";
import FirstSection from "./componenets/FirstSection/FirstSection";
import Footer from "./componenets/Footer/Footer";
import FourthSection from "./componenets/FourthSection/FourthSection";
import SecondSection from "./componenets/SecondSection/SecondSection";
import ThirdSection from "./componenets/ThirdSection/ThirdSection";
import FifthSection from "./FifthSection/FifthSection";


export default function Home() {
  return (
    <div className="myApp">
      <AppNav/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <Footer/>
      
    </div>
  );
}
