import AppNav from "./componenets/FirstSection/AppNav";
import FirstSection from "./componenets/FirstSection/FirstSection";


export default function Home() {
  return (
    <div className="myApp">
      {/* <Navbar/> */}
      <AppNav/>
      <FirstSection />
      
    </div>
  );
}
