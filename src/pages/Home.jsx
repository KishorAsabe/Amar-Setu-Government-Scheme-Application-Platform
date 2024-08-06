
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

// Component Imports
import Footer from "../components/Common/Footer"
import Homebanner from "../assets/Images/Homebanner.png"
import HomebannerSmall from "../assets/Images/HomebannerSmall.png"

function Home() {
  return (
    <div className="">
    <div>
      <p className="text-center text-6xl">
        
        <img src={HomebannerSmall} alt="" />
        {/* <img src={Homebanner} alt="" /> */}

      </p>
    </div>

    <Footer />
  </div>
  )
}

export default Home
