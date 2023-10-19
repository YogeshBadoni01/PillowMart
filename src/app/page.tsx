import Hero from "./Components/Hero";
import HomeSection from "./Components/HomeSection";
import Treading from "./Components/Treading";
import Review from "./Components/Review";
import OrganicSource from "./Components/OrganicSource";
import Promotions from "./Components/Promotions";

// import '../../node_modules/@mantine/form/*'



export default function Home() {
  return (
   <>
    <div className=" bg-white mt-[100px]">
      
        <Hero/>
        <HomeSection/>
        <Treading/>
        <Review/>
        <OrganicSource/>
        <Promotions/>
    </div>
   </>
  )
}
