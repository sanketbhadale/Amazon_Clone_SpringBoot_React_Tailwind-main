
const ServicesContainer = ({ heading, op1, op2 }) => {
     return (
          <div className="my-1 cursor-pointer hover:underline">
               <p className="font-bold">{heading}</p>
               <p>{op1}</p>
               <p>{op2}</p>
          </div>
     )
}

export default ServicesContainer;