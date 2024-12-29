"use client"
import DevNavigation from "../components/DevNavigation"
import InfoFooter from "../components/InfoFooter"
import { ActionButton } from "../apiendpoint/ApiEndpoint"
import { CSSProperties, ReactNode } from "react";
import Image from "next/image";


interface CardProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, style, className }) => {
  return (
      <div
          className={`flex flex-col bg-[#3E444D] p-10 ${className || ""}`}
          style={{
              borderRadius: "12px",
              border: "1px solid #7D7B7B",
              ...style,
          }}
      >
          {children}
      </div>
  );
};

const DocumentCard: React.FC = () => {
  return (
      <Card className="h-[386px] w-[298px]">
          <p
              className="mb-6"
              style={{
                  color: "#EBEBEB",
                  fontFamily: "Avenir-Light",
                  fontSize: "14px",
              }}
          >
              DECEMBER 6, 2024 | PDF
          </p>
          <div className="mb-6">
              <Image
                  className="grayscale"
                  src="/assets/document.png"
                  width={62}
                  height={82}
                  alt="Document"
              />
          </div>
          <p
              className="mb-2"
              style={{
                  color: "#EBEBEB",
                  fontFamily: "Avenir-Black",
                  fontSize: "20px",
              }}
          >
              Getting Started
              <br /> Guide
          </p>
          <p
              className="mb-6"
              style={{
                  color: "#EBEBEB",
                  fontFamily: "Avenir-Light",
                  fontSize: "14px",
              }}
          >
              Step-by-step guide to get started.
          </p>
          <button
              className="self-center p-3 w-[200px]"
              style={{
                  border: "1px solid #DC8F0A",
                  borderRadius: "4px",
                  backgroundColor: "#FFA200",
              }}
          >
              Download a PDF
          </button>
      </Card>
  );
};



const Documentation = () => {



  return (


    <div className="flex w-full bg-red-500 " style={{ height: '100vh' }}>
      {/* Navigation */}
      <DevNavigation />
      {/* Navigation */}


      {/* center content */}
      {/* profile */}
      <div className="flex flex-col items-center  w-full bg-[#2F2D2D] pb-4">
        {/* profile */}
        <div className="flex  w-full  p-8">
          <div className="flex w-full  " >
            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4 mb-28">
              <Image src="/assets/left-arrow.png" height={18} width={18} alt="" />
            </button>
            <p style={{ color: '#FCFEFB', opacity: '0.8' }}>Back to Website </p>
          </div>

          <ActionButton
            buttonText="Share"
            buttonIcon="/assets/share-icon.png"
            avatarText="ND"
          />
        </div>
        {/* profile */}
        {/* mid-centerd */}
        <div className=" h-[100vh]  w-[864px] flex flex-row justify-between  gap-2 items-center pb-3  ">
                  
            <DocumentCard /> 
            <DocumentCard /> 
            <DocumentCard />            
                                
        </div>
        <InfoFooter />
        {/* mid-centerd */}
      </div>
      {/* center content */}

    </div>

  )
}

export default Documentation