import HeroSection from "../Components/HeroSection";
import AboutClinTechno from "../Components/AboutClinTechno";
import OurSolution from "../Components/OurSolution";
import OurTechnogie from "../Components/OurTechnogie";
import ActionSolution from "../Components/ActionSolution";
import Benifits from "../Components/Benifits";
import CaseUse from "../Components/CaseUse";
import GetStarted from "../Components/GetStarted";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutClinTechno />
      <OurSolution />
      <ActionSolution />
      <OurTechnogie />
      <Benifits />
      <CaseUse />
      <GetStarted />
    </div>
  );
}

export default Home;
