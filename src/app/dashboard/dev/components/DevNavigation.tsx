"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import DashMenuBottom from '../../components/DashMenuBottom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';





interface OverviewProps {
    linkname : String;
    link : String;
  }

  const Overview  = ()=>{
    return (
        <div className="flex flex-col gap-6  text-white mt-20 opacity-90 " style={{fontFamily:'Avenir-Light', fontSize:'16px'}}>
            <p style={{fontSize:'11px', fontFamily:'Avenir-Heavy'}}  className="">OVERVIEW</p>
            <Link  href={'#'} > Privacy Policy </Link>
            <Link  href={'#'} > Contact Our Team </Link>
            <Link  href={'#'} > Settings </Link>
            <Link  href={'#'} > Notifications </Link>

        </div>
    )
  }



    const DevMenu = () => {
        

        const pathname = usePathname(); 
    
     

        const [activeLink, setActiveLink] = useState("");


         // Track route changes and update the active link accordingly
        useEffect(() => {
            const matchingLink = links.find((link) => pathname === link.href);
            if (matchingLink) {
            setActiveLink(matchingLink.name);  // Set active link based on current route
            }
        }, [pathname]);  // Re-run effect when the route changes
    
        const links = [
        { name: "Homepage", href: "/dashboard/dev",icon:'devhomepage-active.svg' },
        { name: "API Tokens", href: "/dashboard/dev/apitoken", icon:'api-token-active.svg' },
        { name: "API Endpoint", href: "/dashboard/dev/apiendpoint",icon:'api-end-point-active.svg' },
        { name: "Documentation", href: "/dashboard/dev/documentation", icon:'documentation-active.svg' },
        ];
    
        return (
        <div className="mt-10">
            <p
            style={{
                color: "#FFFFFF",
                fontFamily: "Avenir-Medium",
                fontSize: "15px",
                opacity: "0.7",
            }}
            >
            Menu
            </p>
            {links.map((link) => (
            <div
                key={link.name}
                className={`flex mt-4 ${
                activeLink === link.name ? "bg-[#3F3E3D]" : "bg-transparent"
                } p-2 rounded `}
                onClick={() => setActiveLink(link.name)}
            >
            <Image 
                    src={`/assets/${link.icon}`} 
                    height={22} 
                    width={22} 
                    alt="" 
                    className={`${activeLink === link.name ? "" : "grayscale" }`}
                    />
                <Link
                href={link.href}
                className={`ml-3 ${
                    activeLink === link.name ? "font-bold  color-[#FFA200]  opacity-100" : ""
                }`}
                
                style={{
                    
                    color: `${activeLink === link.name ? "#FFA200":"#FFFFFF" } `,
                    fontFamily: "Avenir-Light",
                    fontSize: "15px",
                    opacity: activeLink === link.name ? "1" : "0.7",
                }}
                >
                {link.name}
                </Link>
            </div>
            ))}
        </div>
        );
    };

function DevNavigation() {
  return (
    <>
         {/* Navigation */}
         <div className="flex-col w-[296px] bg-[#50504F] p-8 justify"  >
                      
                      <Image src="/assets/pawa-dash-logo.png" width={126} height={33} alt="" />
                      <DevMenu/>
                      <Overview/>
                      <DashMenuBottom/>
                  
            </div>
        {/* Navigation */}
    </>
  )
}

export default DevNavigation