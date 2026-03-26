import Text from "./components/text";
import Btn from "./components/button";
import Img from "./components/image";
import Navbar from "./navbar";
import "./App.css";

export default function App() {
  return (
    <div className=" text-white bg-zinc-950">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-screen bg-zinc-950 text-white mb-10 mr-50 ">
          <Text />
          <div className="flex flex-row gap-4 justify-center mr-25 "> 
          <Btn className="flex flex-row p-4 transition duration-700 ease-in-out" name="View My Works" color="bg-green-800" hover="hover:bg-red-900" transition=" hover:scale-200 transition" />
          <Btn className="flex flex-row p-4 transition duration-700 ease-in-out" name="Contact Me" color="bg-blue-900" hover="hover:bg-emerald-900" transition="hover:scale-200 transition "/>
          </div>
         
        </div>
        <div className=" text-white">
          <Img />
        </div>
      </div>
    </div>
  );
}
