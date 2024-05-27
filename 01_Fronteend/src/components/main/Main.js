import Card from "./Card";
import {
  CardDetails_1,
  CardDetails_2,
  CardDetails_3,
  CardDetails_4,
  CardDetails_5,
  CardDetails_6,
} from "./Constants";


const Main = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-5 p-5">
        <Card
          title={"Deals inspired by your recent history"}
          CardDetails={CardDetails_6}
        />
        <Card
          title={"Starting ₹139 | Amazon brands & more"}
          CardDetails={CardDetails_1}
        />
        <Card
          title={"Up to 75% off | Headphones"}
          CardDetails={CardDetails_2}
        />
        <Card title={"Revamp your home in style"} CardDetails={CardDetails_3} />
        <Card
          title={"Up to 60% off | Styles for men"}
          CardDetails={CardDetails_4}
        />
        <Card
          title={"Get the perfect screen size | TVs Starting ₹6,999"}
          CardDetails={CardDetails_5}
        />
        <Card title={"Revamp your home in style"} CardDetails={CardDetails_3} />
        <Card
          title={"Up to 60% off | Styles for men"}
          CardDetails={CardDetails_4}
        />
        <Card
          title={"Get the perfect screen size | TVs Starting ₹6,999"}
          CardDetails={CardDetails_5}
        />
      </div>
    </>
  );
};

export default Main;
