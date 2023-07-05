import Hero from "@/comps/home/Hero";
import Features from "@/comps/home/Features";
import Banner from "@/comps/home/Banner";
import EcommFeature from "@/comps/home/EcommFeature";
import { Compliance } from "@/comps/home/Compliance";
import CmsFeatures from "@/comps/home/CmsFeatures";
import ExitBanner from "@/comps/home/ExitBanner";
import OtherHome from "@/comps/home/OtherHome";
import Demos from "@/comps/home/Demos";



export default function Home() {
 

  return (
   <section>
    <Hero/>

    <Features/>
    <EcommFeature/>
    <Compliance/>
    <CmsFeatures/>
    <OtherHome/>
    <Banner/>
    <Demos/>
    <ExitBanner/>
   </section>
  );
}

