export default function Navbar(){
    return(
        <nav className="  px-6 py-4 flex justify-between items-center font-serif  bg-zinc-950">
        <h1 className="text-2xl font-bold flex items-center gap-2 space-x-8 italic text-green-500">
            Tech 
        </h1>
            <ul className="md:flex gap-4 text-lg space-x-2 hidden">
                <li className="hover:text-gray-400 transition duration-300 text-green-500"><a href="#home" className="hover:text-gray-400"></a>Home</li>
                <li className="hover:text-gray-400 transition duration-300 text-green-500"><a href="#about" className="hover:text-gray-400"></a>About</li>
                <li className="hover:text-gray-400 transition duration-300 text-green-500"><a href="#project" className="hover:text-gray-400"></a>Projects</li>
            </ul>
        </nav>


    )
}