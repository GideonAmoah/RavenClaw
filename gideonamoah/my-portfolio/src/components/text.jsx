export default function Text(){
    return(
        <div className=" flex flex-col  mt-15 space-y-6 justify-center text-center italic tracking-wider ">
        <h5  className="text-2xl mr-130 font-bold mb-4 font-serif text-white tracking-wider ">Hi</h5>
     <h1 className="text-5xl  md:text-6xl font-bold mb-4 font-serif text-white mr-1">I'm Gideon Amoah.</h1>
     <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-serif">I'm a frontend <span className="text-green-500 font-serif hover:text-sky-100 cursor-pointer">web Developer</span></h2>
     <h3 className="text-xl md:text-2xl text-gray-300 font-serif">I build responsive and engaging web applications</h3>
        
<div class=" flex max-w-sm text-xs items-center gap-x-4 rounded-xl border-4 border-dashed p-4 border-green-500 text-white ">

  <img class="size-12 shrink-0 ml-9" src="/public/cowboy.jpeg" alt="cowboy logo" />
  <div>
    <div class="text-xs font-medium text-black dark:text-white  hover:text-green-500 ml-7">Feel free to hit me up</div>
    <p class="text-gray-500 dark:text-gray-400 text-xs  hover:text-green-500 ml-7">Always your best man</p>
  </div>
</div>
     </div>
        
    )
}