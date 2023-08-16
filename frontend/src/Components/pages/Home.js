import React from "react"
import "../../app.css"
import Hero from "../HomeSection/Hero"
import HomeAbout from "../HomeSection/HomeAbout"
import MostPopular from "../HomeSection/popular/MostPopular"
import DestinationHome from "../HomeSection/Destina/DestinationHome"
import Download from "../HomeSection/Download/Download"
import Works from "../HomeSection/Works/Works"
import Gallery from "../HomeSection/gallery/Gallery"

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <MostPopular />
      <DestinationHome />
      <Download />
      <Works />
      <Gallery />
    </div>
  )
}

export default Home
