 import Btn from '../components/btn'
export default function Next(){
    return(
        <div className='mt-30 text-white text-center'>
            <h1 className="text-7xl">The React Framework for the Web</h1>
           <h4 className="text-2xl text-gray-500">Used by some of the world's largest companies, Next.js enables you to</h4> 
            <h4> create high-quality web applications with the power of React components</h4>
            <div className=' rounded-b-4xl flex border-amber-50 justify-center mt-4 px-4 py-4 space-x-4'>
            <Btn name="Get Started" color="bg-zinc-50" textcolor="text-black"/>
            <Btn name="Learn Nextjs" color="bg-zinc-950" textcolor="text-white"/>
            </div> 
        </div>
    )
}