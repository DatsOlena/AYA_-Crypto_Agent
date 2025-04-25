import FooterOne from "../../../layouts/footers/FooterOne"
import Header from "../../../layouts/headers/Header"
import About from "./About"
import Brand from "./Brand"
import Distribution from "./Distribution"
import FaqArea from "./FaqArea"
import Hero from "./Hero"
import Roadmap from "./Roadmap"
import Solution from "./Solution"
import Token from "./Token"
import UserOption from "./UserOption"
import Intro from "./Intro"
import Lore from "./Lore"

const HomeOne = () => {
  return (
    <div className="home-blockchain">
      <div className="body_wrap">
        <Header />
        <Hero />
        <Intro />
        <About />
        <Lore />
        <Solution />
        <UserOption />
        <Token />
        <Distribution />
        <Roadmap />
        <FaqArea />
        <Brand />
        <FooterOne />
      </div>
    </div>
  )
}

export default HomeOne
