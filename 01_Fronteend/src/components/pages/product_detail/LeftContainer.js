import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const LeftContainer = () => {
     return (
          <div className="col-span-3 bg-[#FFFFFF] pt-8">
               <div className="p-5">
                    <p className="font-bold text-[14px] py-3">Customer Review</p>
                    <div className="text-yellow-500 cursor-pointer">
                         <p className="flex flex-row items-center ">  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <CiStar /> <span className="text-[14px] text-black hover:text-yellow-500">&amp; Up</span></p>

                         <p className="flex flex-row items-center">  <FaStar /> <FaStar /> <FaStar /> <CiStar /> <CiStar />  <span className="text-[14px] text-black hover:text-yellow-500">&amp; Up</span></p>

                         <p className="flex flex-row items-center">  <FaStar /> <FaStar /> <CiStar /> <CiStar /> <CiStar />  <span className="text-[14px] text-black hover:text-yellow-500">&amp; Up</span></p>

                         <p className="flex flex-row items-center">  <FaStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />  <span className="text-[14px] text-black hover:text-yellow-500">&amp; Up</span></p>

                    </div>
               </div>

               <div className="p-5">
                    <p className="font-bold text-[14px] py-3">Brand</p>
                    <div>
                         <div>
                              <input type="checkbox" name="apple" />
                              <label htmlFor="apple" >Apple</label>
                         </div>

                         <div>
                              <input type="checkbox" name="oneplus" />
                              <label htmlFor="oneplus" >OnePlus</label>
                         </div>

                         <div>
                              <input type="checkbox" name="realme" />
                              <label htmlFor="realme" >realme</label>
                         </div>

                         <div>
                              <input type="checkbox" name="samsung" />
                              <label htmlFor="samsung" >Samsung</label>
                         </div>

                         <div>
                              <input type="checkbox" name="xiaomi" />
                              <label htmlFor="xiaomi" >Xiaomi</label>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default LeftContainer;