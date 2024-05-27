import amazon from "../../assets/logos/amazon.png";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { PiShoppingCartSimple } from "react-icons/pi";
import { Link } from "react-router-dom";


// Array of categories for the dropdown menu
const category = [
  { id: 1, text: "All" },
  { id: 2, text: "Amazon Devices" },
  { id: 3, text: "Amazon Fashion" },
  { id: 4, text: "Amazon Pharmacy" },
  { id: 5, text: "Appliances" },
  { id: 6, text: "Apps & Games" },
  { id: 7, text: "Audiobooks" },
  { id: 8, text: "Baby" },
  { id: 9, text: "Beauty" },
  { id: 10, text: "Clothing" },
  { id: 11, text: "Computers & Accessories" },
  { id: 12, text: "Smartphones" },
];

/**
 * FixedNav Component
 *
 * The FixedNav component represents the fixed navigation bar at the top of the page.
 * It includes various sections like the Amazon logo, location, search bar, user account,
 * returns and orders, and the shopping cart.
 *
 * @returns {JSX.Element} JSX Element representing the FixedNav component.
 */
const FixedNav = () => {
  // Placeholder value for the cart (to be replaced with dynamic data)
  let cartValue = 10;

  return (
    <div className="bg-gray-950 h-16 w-full text-white flex flex-row items-center justify-evenly cursor-pointer">
      {/* Amazon Logo Section with Link to Home */}
      <Link to={'/'}>
        <div className="flex hover:border hover:scale-95 p-2">
          <img src={amazon} className="h-7" alt="amazon" />
          <p>.in</p>
        </div>
      </Link>

      {/* Location Section */}
      <div className="flex items-center hover:border p-2 hover:scale-95">
        <IoLocationOutline size={20} />
        <div>
          <p className="text-gray-400 text-[0.8rem]">
            Delivering to Pune 414501
          </p>
          <p className="font-bold text-[0.9rem]">Update location</p>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="flex flex-row p-2 h-14 text-black">
        {/* Dropdown for Categories */}
        <select className=" bg-gray-300 outline-none rounded-l-md text-[0.8rem] max-w-16">
          {category.map(({ id, text }) => (
            <option key={id}>{text}</option>
          ))}
        </select>

        {/* Search Input */}
        <input type="text" className="w-64 p-1 outline-none" />

        {/* Search Button */}
        <div className="bg-amber-600 flex items-center p-1 rounded-r-md hover:bg-amber-500">
          <IoMdSearch size={25} />
        </div>
      </div>

      {/* User Account Section */}
      <div className="text-[0.9rem] hover:border p-2 hover:scale-95">
        <p className="">Hello, sign in</p>
        <p className="font-bold flex flex-row items-end gap-1">
          Account & Lists <IoIosArrowDown />
        </p>
      </div>

      {/* Returns & Orders Section */}
      <div className="text-[0.9rem] hover:border p-2 hover:scale-95">
        <p>Returns</p>
        <p className="font-bold">& Orders</p>
      </div>

      {/* Shopping Cart Section */}
      <div className="text-[0.9rem] hover:border p-2 hover:scale-95">

        <Link to={'/cart'}>
        <div 
          className="flex flex-col justify-center items-start"
        >
          <div className="text-amber-500 pl-1">{cartValue}</div>
          <div className="flex items-end -mt-3">
            <div>
              <PiShoppingCartSimple size={30} />
            </div>
            <div>Cart</div>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default FixedNav;



// import amazon from "../../assets/logos/amazon.png";
// import { IoLocationOutline } from "react-icons/io5";
// import { IoMdSearch } from "react-icons/io";
// import { IoIosArrowDown } from "react-icons/io";
// import { PiShoppingCartSimple } from "react-icons/pi";
// import { Link } from "react-router-dom";

// const category = [
//   {
//     id: 1,
//     text: "All",
//   },
//   {
//     id: 2,
//     text: "Amazon Devices",
//   },
//   {
//     id: 3,
//     text: "Amazon Fashion",
//   },
//   {
//     id: 4,
//     text: "Amazon Pharmacy",
//   },
//   {
//     id: 5,
//     text: "Appliences",
//   },
//   {
//     id: 6,
//     text: "Apps & Games",
//   },
//   {
//     id: 7,
//     text: "AudioBooks",
//   },
//   {
//     id: 8,
//     text: "Baby",
//   },
//   {
//     id: 9,
//     text: "Beauty",
//   },
//   {
//     id: 10,
//     text: "Clothing",
//   },
//   {
//     id: 11,
//     text: "Computers & Accessories",
//   },
//   {
//     id: 12,
//     text: "Smartphones",
//   },
// ];

// const FixedNav = () => {
//   let cartValue = 10;

//   return (
//     <div className="bg-gray-950 h-16 w-full text-white flex flex-row items-center justify-evenly cursor-pointer">

//       <Link to={'/'}>
//         <div className="flex hover:border hover:scale-95 p-2">
//           <img src={amazon} className="h-7" alt="amazon" />
//           <p>.in</p>
//         </div>
//       </Link>

//       <div className="flex items-center hover:border p-2 hover:scale-95">
//         <IoLocationOutline size={20} />

//         <div>
//           <p className="text-gray-400 text-[0.8rem]">
//             Delivering to pune 414501
//           </p>
//           <p className="font-bold text-[0.9rem]">Update location</p>
//         </div>
//       </div>

//       <div className="flex flex-row p-2 h-14 text-black">
//         <select className=" bg-gray-300 outline-none rounded-l-md text-[0.8rem] max-w-16">
//           {category.map(({ id, text }) => (
//             <option key={id}>{text}</option>
//           ))}
//         </select>
//         <input type="text" className="w-64 p-1 outline-none " />
//         <div className="bg-amber-600 flex items-center p-1 rounded-r-md hover:bg-amber-500">
//           <IoMdSearch size={25} />
//         </div>
//       </div>

//       <div className="text-[0.9rem] hover:border p-2 hover:scale-95">
//         <p className="">Hello, sign in</p>
//         <p className="font-bold flex flex-row items-end gap-1">
//           Account & Lists <IoIosArrowDown />
//         </p>
//       </div>

//       <div className="text-[0.9rem] hover:border p-2 hover:scale-95">
//         <p>Returns</p>
//         <p className="font-bold">& Orders</p>
//       </div>

//       <div className="text-[0.9rem] hover:border p-2 hover:scale-95">
//         <div className="flex flex-col justify-center items-start">
//           <div className="text-amber-500 pl-1">{cartValue}</div>
//           <div className="flex items-end -mt-3">
//             <div>
//               <PiShoppingCartSimple size={30} />
//             </div>
//             <div>Cart</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default FixedNav;