import Btn from './btn'
export default function Text(){
    return(
        <div className=''>
            <h1>The React Framework for the Web</h1>
           <h4>Used by some of the world's largest companies, Next.js enables you to</h4> 
            <h4> create high-quality web applications with the power of React components</h4> 
            <Btn text="Get started"/>
            <Btn text="Learn Next.js"/>
        </div>
    )
}