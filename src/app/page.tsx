'use client';
import HeaderSection from "../components/HeaderSection";
import FeaturesSection from "../components/FeaturesSection";
import SubFeatures from "../components/SubFeatures";
import DocumentSection from "../components/DocumentSection";
import DemoSection from "../components/DemoSection";
import FooterSection from "../components/FooterSection";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <HeaderSection/>
      <FeaturesSection/>
      <SubFeatures/>
      <DocumentSection/>
      <DemoSection/>
      <FooterSection/>
    </SessionProvider>
      
  );
}
