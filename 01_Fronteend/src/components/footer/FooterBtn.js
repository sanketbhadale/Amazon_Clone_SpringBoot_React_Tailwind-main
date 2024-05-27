import { Link } from "react-scroll";

const FooterBtn = ()=>{
     return(
          <Link to='top'>
               <button
               className="bg-[#485769] w-full p-3 text-white text-[13px]"
          >
               Back to top
          </button>
          </Link>
     )
}

export default FooterBtn;