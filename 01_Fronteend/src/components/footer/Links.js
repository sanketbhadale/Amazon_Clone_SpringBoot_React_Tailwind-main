import LinksContainer from "./LinksContainer";
import amazon from "../../assets/logos/amazon.png";
import { aboutObj, affiliateObj, helpObj, socialObj,countriesObj } from "./Data";
import { TbWorld } from "react-icons/tb";

const Links = () => {
     return (
          <div className="w-full bg-[#232F3E] text-white text-[14px]">
               <div className="flex flex-row  justify-evenly py-8 border-b border-gray-500">
                    <LinksContainer heading={"Get to Know Us"} obj={aboutObj} />
                    <LinksContainer heading={"Connect with Us"} obj={socialObj} />
                    <LinksContainer heading={"Make Money with Us"} obj={affiliateObj} />
                    <LinksContainer heading={"Let Us Help You"} obj={helpObj} />
               </div>

               <div className="py-5">
                    <div className="flex flex-row items-center justify-center gap-16 py-5">
                         <img src={amazon} className="h-6 cursor-pointer" alt="amazon" />
                         <div className="flex flex-row items-center gap-3 border border-gray-400 w-min px-3 py-1 cursor-pointer">
                              <TbWorld/>
                              <p>English</p>
                         </div>     
                    </div>

                    <div className="mx-16">
                         <ul className="flex flex-row justify-center gap-3 flex-wrap">
                              {
                                   countriesObj.map(({id,text})=>(
                                        <li 
                                             key={id}
                                             className="cursor-pointer hover:underline"
                                        >
                                             {text}
                                        </li>
                                   ))
                              }
                         </ul>
                    </div>
               </div>
          </div>
     );
}

export default Links;