import ServicesContainer from "./ServicesContainer";

const Services = () => {

     const date = new Date().getFullYear()

     return (
          <div className="w-full bg-[#131A22] text-white text-[12px] py-5">
               
               <div className="grid grid-cols-4 justify-evenly py-4 px-16 mx-8">
               <ServicesContainer
                    heading="AbeBooks"
                    op1="Books, art"
                    op2="& collectibles"
               />
               <ServicesContainer
                    heading="Amazon Web Services"
                    op1="Scalable Cloud"
                    op2="Computing Services"
               />
               <ServicesContainer
                    heading="Audible"
                    op1="Download"
                    op2="Audio Books"
               />
               <ServicesContainer
                    heading="IMDb"
                    op1="Movies,"
                    op2="TV & Celebrities"
               />
               <ServicesContainer
                    heading="Shopbop"
                    op1="Designer "
                    op2="Fashion Brands"
               />
               <ServicesContainer
                    heading="Amazon Business"
                    op1="Everything For "
                    op2="Your Business"
               />
               <ServicesContainer
                    heading="Prime Now"
                    op1="2-Hour Delivery "
                    op2="on Everyday Items"
               />
               <ServicesContainer
                    heading="Amazon Prime Music"
                    op1="100 million songs, ad-free"
                    op2="Over 15 million podcast episodes"
               />
               </div>

               <div className="w-full flex flex-col items-center font-semibold py-2 ">
                    <div className="flex flex-row  gap-4">
                         <p className="cursor-pointer hover:underline">Conditions of Use & Sale</p>
                         <p className="cursor-pointer hover:underline">Privacy Notice</p>
                         <p className="cursor-pointer hover:underline">Interest-Based Ads</p>
                    </div>

                    <p>&copy; 1996-{date}, Amazon.com, Inc. or its affiliates</p>
               </div>
          </div>
     )
}

export default Services;