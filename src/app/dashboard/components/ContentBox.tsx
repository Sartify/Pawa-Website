interface ContentBoxProps {
    title: string;
    description: string;
  }
  
const ContentBox: React.FC<ContentBoxProps> = ({ title, description }) => {
    return (
      <div
        className="flex flex-col justify-center items-center w-[722px] bg-[#FFFFFF29] py-4 mb-2"
        style={{
          opacity: "0.7",
          borderRadius: "5px",
        }}
      >
        <p
          className="mb-2"
          style={{
            color: "white",
            fontFamily: "Avenir-Heavy",
            fontSize: "15px",
          }}
        >
          {title}
        </p>
        <p
          style={{
            color: "white",
            fontSize: "15px",
          }}
        >
          {description}
        </p>
      </div>
    );
  };


  export default ContentBox