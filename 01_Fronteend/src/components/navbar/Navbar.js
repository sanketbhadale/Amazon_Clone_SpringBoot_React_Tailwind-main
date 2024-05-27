
import FixedNav from "./FixedNav";
import StaticNav from "./StaticNav";

const Navbar = () => {

  return (
    <div className="w-full h-auto" name='top'>
      <FixedNav />
      <StaticNav/>
    </div>
  );
};

export default Navbar;
