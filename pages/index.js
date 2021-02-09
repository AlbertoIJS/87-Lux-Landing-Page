import PlatformsContainer from "../components/brandLogos";
import JumboContainer from "../components/jumbo";
import NavbarContainer from "../components/navbar";
import LatestProyects from "../components/latestProyects";
import MeetTheTeam from "../components/meetTheTeam";
import CustomSolutions from "../components/footer";

export default function Home() {
  return (
    <>
      <NavbarContainer />
      <JumboContainer />
      <PlatformsContainer />
      <LatestProyects />
      <MeetTheTeam />
      <CustomSolutions />
    </>
  )
}
