import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoAreWe from "./components/WhoAreWe";
import ProvideAPlace from "./components/ProvideAPlace";
import Supporters from "./components/Supporters";
import SupportRock from "./components/SupportRock";
import OurMission from "./components/OurMission";
import UpComingEvents from "./components/UpComingEvents";
import Donations from "./components/Donations";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className='set'>
      <Navbar />
      <Hero />
      <WhoAreWe bgColor={"#fff"} />
      <ProvideAPlace />
      <Supporters />
      <SupportRock />
      <UpComingEvents />
      <OurMission />
      <Donations />
      <Footer />
    </main>
  );
}
