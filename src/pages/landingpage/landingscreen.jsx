import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { AccedezSection } from "./accedez";
import { ExploreSection } from "./explore";
import './landingstyle.css'
import { ProposeSection } from "./propose";
import { Review } from "./review";

export const LandingScreen=()=>{
    return(
        <div>
            <Header/>
            <ExploreSection/>
            <AccedezSection/>
            <ProposeSection/>
            <Review/>
            <Footer/>
        </div>
    )
}