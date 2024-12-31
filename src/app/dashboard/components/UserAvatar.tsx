import { useSession } from "next-auth/react";
import LogoutButton from "./LogoutButton";
import { useState } from "react";
import Image from "next/image";

const UserAvatar = () => {
    const { data: session } = useSession(); // TypeScript infers types from next-auth
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  
    const toggleDropdown = () => {
      setIsDropdownOpen((prev) => !prev);
    };
  
    // const handleLogout = () => {
    //   console.log('Logout clicked');
    //   // Add your logout logic here
    // };
  
    const handleProfile = () => {
      console.log('Profile clicked');
      // Add your profile redirection logic here
    };
  
    return (
      <div className="flex flex-row  justify-center items-start ">
        {/* Share Button */}
        <button
          className="w-[78px] border border-gray-300 bg-[#FFFFFF29] rounded-md py-1 px-3"
        >
          <div className="flex justify-between items-center">
            <p className="text-gray-300 text-sm">Share</p>
            <Image src="/assets/share-icon.png" width={10} height={10} alt="Share Icon" />
          </div>
        </button>
  
        {/* Circular Avatar with Dropdown */}
        <div className="relative ml-6">
          <div
            className="flex justify-center items-center rounded-full w-[50px] h-[50px] bg-[#FFFFFF29] cursor-pointer mt-[-10px]"
            style={{ border: '1px solid white' }}
            onClick={toggleDropdown}
          >
            <p className="uppercase text-white text-lg">
              {session?.user?.email ? session.user.email.charAt(0) : 'Guest'}
            </p>
          </div>
  
          {isDropdownOpen && (
            <div
              className="absolute top-[60px] right-0 bg-white shadow-md rounded-md w-[120px] py-2 z-50"
            >
              <ul className="flex flex-col text-black text-sm">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={handleProfile}
                >
                  Profile
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                   <LogoutButton/>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };


  export default UserAvatar