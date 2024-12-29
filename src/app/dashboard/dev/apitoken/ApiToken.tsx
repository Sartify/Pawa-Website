"use client"
import Image from "next/image"
import DevNavigation from "../components/DevNavigation"
import InfoFooter from "../components/InfoFooter"

// interface ContentDivProps {
//     contentHead: string,
//     content: string
// }

// const ContentDiv: React.FC<ContentDivProps> = ({ contentHead, content }) => {
//     return (
//         <div className="mb-3 flex flex-row  items-center justify-between mb-2 p-1 " style={{ border: '1px solid #FFFFFF', opacity: '1 ', borderRadius: '5px' }}>
//             <div className=" flex flex-row  items-center justify-between px-10  bg-[#FFFFFF29]">
//                 <div className="flex  flex-col justify-center  w-[722px]   py-5  " style={{ opacity: '0.9 ', borderRadius: '5px' }}>
//                     <p className="mb-2" style={{ color: 'white', fontFamily: 'Avenir-Medium', fontSize: '15px' }}>{contentHead}</p>
//                     <p style={{ color: 'white', fontSize: '14px', fontFamily: 'Avenir-Oblique', opacity: '0.7' }}>{content}</p>
//                 </div>
//                 <Image src={'/assets/right-arrow.svg'} width={25} height={17} alt="" />
//             </div>
//         </div>
//     )

// }

interface ActionButtonProps {
    buttonText: string; // Text for the button (e.g., "Share")
    buttonIcon: string; // Path to the icon for the button
    avatarText: string; // Text inside the circular avatar (e.g., "ND")
}

const ActionButton: React.FC<ActionButtonProps> = ({
    buttonText,
    buttonIcon,
    avatarText,
}) => {
    return (
        <div className="flex">
            {/* Share Button */}
            <div>
                <button
                    className="w-[78px]"
                    style={{
                        border: "1px solid #DDDDDD",
                        backgroundColor: "#FFFFFF29",
                        padding: "4px 10px",
                        borderRadius: "5px",
                    }}
                >
                    <div className="flex justify-between items-center">
                        <p style={{ color: "#E4E4E4", fontSize: "13px" }}>{buttonText}</p>
                        <Image src={buttonIcon} width={10} height={10} alt="Button Icon" />
                    </div>
                </button>
            </div>

            {/* Circular Avatar */}
            <div
                className="flex justify-center items-center relative rounded-full w-[50px] h-[50px] top-[-10px] bg-[#FFFFFF29] ml-6"
                style={{
                    border: "1px solid white",
                }}
            >
                <p style={{ fontSize: "22px", color: "white" }}>{avatarText}</p>
            </div>
        </div>
    );
};




export const CustomButton = ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => {
    return (
        <button
            onClick={onClick}
            className="bg-[#D98C07] rounded-[3px] opacity-100 px-4 py-2 text-black"
            style={{  }}
        >
            {children}
        </button>
    );
};

const ViewButton = ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => {
    return (
        <button
            onClick={onClick}
            className=" opacity-100 px-4 py-2 text-[#FFA200]"
            style={{  }}
        >
            {children}
        </button>
    );
};


// TableRow Component (for body rows)
const TableRow = ({ tokenName, createdOn, token, onViewClick }: { tokenName: string, createdOn: string, token: string, onViewClick: () => void }) => (
    <div className="flex flex-row bg-[#525050] rounded-[2px] my-1 p-4 items-center justify-between text-white" style={{ fontFamily: 'Avenir-Light', fontSize: '15px', border: '1px solid #7D7B7B' }}>
      {/* Aligning rows to match the header with fixed column widths */}
      <p className="w-[200px] text-ellipsis overflow-hidden">{tokenName}</p> {/* Fixed width for TOKEN NAME */}
      <p className="w-[150px] text-left text-ellipsis overflow-hidden">{createdOn}</p> {/* Fixed width for CREATED ON */}
      <p className="w-[150px] text-left text-ellipsis overflow-hidden">{token}</p> {/* Fixed width for TOKEN */}
  
      {/* View Button */}
      <ViewButton onClick={onViewClick}>
        <div className="flex flex-row justify-between items-center gap-2">
          <p className="opacity-80" style={{ fontSize: '14px', fontFamily: 'Avenir-Medium' }}>View</p>
          <Image className="" src="/assets/arrow-right-dashed.svg" height={16} width={16} alt="View Icon" />
        </div>
      </ViewButton>
    </div>
  );
  
  // TableHeader Component
  const TableHeader = ({ onCreateClick }: { onCreateClick: () => void }) => (
    <div className="flex flex-row p-4 items-center justify-between text-white" style={{ fontFamily: 'Avenir-Heavy', fontSize: '12px' }}>
      <p className="w-[200px] text-ellipsis overflow-hidden">TOKEN NAME</p> {/* Fixed width for TOKEN NAME */}
      <p className="w-[150px] text-center text-ellipsis overflow-hidden">CREATED ON</p> {/* Fixed width for CREATED ON */}
      <p className="w-[150px] text-right text-ellipsis overflow-hidden">TOKEN</p> {/* Fixed width for TOKEN */}
  
      <CustomButton onClick={onCreateClick}>
        <div className="flex text-center flex-row justify-between items-center gap-2">
          <p className="opacity-80" style={{ fontSize: '13px', fontFamily: 'Avenir-Medium' }}>Create a New Token</p>
          <Image className="" src="/assets/plus.svg" height={14} width={14} alt="" />
        </div>
      </CustomButton>
    </div>
  );
  
  // Table Component
  const Table = ({ rows, onCreateClick, onViewClick }: { rows: Array<{ tokenName: string, createdOn: string, token: string }>, onCreateClick: () => void, onViewClick: () => void }) => (
    <div className="flex flex-col w-[864px]">
      {/* Table Header */}
      <TableHeader onCreateClick={onCreateClick} />
  
      {/* Table Body */}
      {rows.map((row, index) => (
        <TableRow 
          key={index} 
          tokenName={row.tokenName} 
          createdOn={row.createdOn} 
          token={row.token} 
          onViewClick={onViewClick}
        />
      ))}
    </div>
  );
  









const ApiToken = () => {



    const rows = [
        { tokenName: "Cloud Token VLI", createdOn: "Token 00001", token: "**********************" },
        { tokenName: "API Token", createdOn: "Token 00002", token: "**********************" },
        { tokenName: "API Token", createdOn: "Token 00002", token: "**********************" },
      ];
    
      const handleCreateClick = () => {
        console.log("Create New Token");
      };
    
      const handleViewClick = () => {
        console.log("View Token");
      };


    return (

        <div className="flex w-full bg-red-500 " style={{ height: '100vh' }}>
            {/* Navigation */}
            <DevNavigation />
            {/* Navigation */}


            {/* center content */}
            {/* profile */}
            <div className="flex flex-col items-center  w-full bg-[#2F2D2D]">
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
                <div className=" h-[100vh]  w-full flex flex-col justify-between items-center pb-3  ">
                    <div className="mid-centered">
                            {/* table */}
                            <Table rows={rows} onCreateClick={handleCreateClick} onViewClick={handleViewClick} />
                             {/* table */}
                    </div>
                    <InfoFooter />
                </div>
                {/* mid-centerd */}
            </div>
            {/* center content */}

        </div>

    )
}



export default ApiToken