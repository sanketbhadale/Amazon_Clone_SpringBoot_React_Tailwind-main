import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const MobileDetails = () => {
  return (
    <div className="min-h-screen w-full grid grid-flow-col grid-cols-12">
      <LeftContainer />
      <RightContainer />
    </div>
  )
}


export default MobileDetails;