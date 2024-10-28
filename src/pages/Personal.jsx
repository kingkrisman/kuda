import styled from "styled-components"
import Hero from "../components/home/Hero"


import Info from "../components/Home/Info"
import Cards from "../components/Home/Cards"
import Slides from "../components/Home/Slides"
import PartnersSection from "../components/Home/PartnerSection"
import Comparison from "../components/Home/Comparison"
import MoreForYou from "../components/Home/MoreForYou"
import HeroTwo from "../components/Home/HeroTwo"

const Personal = () => {
    return(
       <div>
     <Hero />
   <Info/>
   <Cards/>
   <Slides/>
   <PartnersSection/>
   <Comparison/>
   <MoreForYou/>
   <HeroTwo/>
       </div>
    )
}

export default Personal
