import BulidSection from "../components/BulidSection";
import CardContainer from "../components/CardContainer";
import CryptoCurrency from "../components/CryptoCurrency";
import MainSection from "../components/MainSection";
import SectionA from "../components/SectionA";

export default function Home() {
  return (
    <div className="">
      <MainSection />
      <CryptoCurrency />
      <BulidSection />
      <CardContainer />
      <SectionA />
    </div>
  );
}
