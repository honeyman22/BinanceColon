import Banner from "../components/Banner";
import BulidSection from "../components/BulidSection";
import CardContainer from "../components/CardContainer";
import CryptoCurrency from "../components/CryptoCurrency";
import MainSection from "../components/MainSection";
import Naivation from "../components/Naivation";
import Need from "../components/Need";
import SectionA from "../components/SectionA";

export default function Home() {
  return (
    <div className="">
      <Naivation />
      <MainSection />
      <CryptoCurrency />
      <Banner />
      <BulidSection />
      <CardContainer />
      <SectionA />
      <Need />
      <Banner />
    </div>
  );
}
