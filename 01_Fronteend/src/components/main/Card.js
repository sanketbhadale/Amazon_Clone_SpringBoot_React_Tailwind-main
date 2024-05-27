import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ CardDetails, title }) => {

  const navigate = useNavigate()

  const handleClick = (index)=>{

    if(CardDetails && CardDetails[index].text === 'Mobiles')
    {
      // window.open('/mobiles')
      navigate('/mobiles') 
    }
  }

  return (
    <div className="bg-white flex flex-col">
      <p className="text-[1.2rem] font-bold p-2">{title}</p>

      <div className="grid grid-cols-2 p-2 cursor-pointer ">
        {CardDetails.map(({ src, text },index) => (
          <div  className=" text-[0.8rem] flex flex-col justify-evenly m-1">
            <div 
              key={index}
              className="h-full w-full"
              onClick={()=>handleClick(index)}  
            >
              <img 
                src={src} 
                alt={text} 
                
              />
            </div>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;


