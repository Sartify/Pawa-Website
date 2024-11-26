import Image from "next/image";
import HeaderSection from "./components/HeaderSection";
import FeaturesSection from "./components/FeaturesSection";
import SubFeatures from "./components/SubFeatures";
import DocumentSection from "./components/DocumentSection";
import DemoSection from "./components/DemoSection";

export default function Home() {
  return (
    <>
      <HeaderSection/>
      <FeaturesSection/>
      <SubFeatures/>
      <DocumentSection/>
      <DemoSection/>
    </>
      
  );
}
