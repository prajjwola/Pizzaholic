import Right from "@/components/icons/Right";
import Image from "next/image";
import Pizza from "../../../public/pizza.png"

export default function Hero() {
  return (
    <section className="hero mt-4"  style={{display:"flex"}}>
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything<br />
          is better<br />
          with a&nbsp;
          <span className="text-primary">
            Pizza
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
        The most exquisite invension in the world, an awesome italian coucine fast and delicuious made with cheese and sauce alse named pizza.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div style={{height:"400px",width:"400px"}}>
        <Image src={Pizza}  alt={'pizza'} />
      </div>
    </section>
  );
}