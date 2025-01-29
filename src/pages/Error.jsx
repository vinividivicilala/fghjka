import AnimatedTitle from "../Components/AnimatedTitle";
import Blure from "../Components/blure";
function Error() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="overflow-hidden">
        <AnimatedTitle text={"Oops"} />
      </div>
      <div className="w-1/3 mx-auto p-8 ">
        <p className="text-xl text-center text-purple-500">
          The page you are looking for has been moved or renamed. Use the
          navigation above to browse our site.
        </p>
      </div>

      <Blure position={"left-44 bottom-44"} />
    </div>
  );
}

export default Error;
