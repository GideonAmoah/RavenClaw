export default function Btn(props){
    return(
        <div className="flex flex-row justify-center">
        <button className= {`text-white px-4 py-2 rounded  gap-3 mt-4  ${props.color} ${props.hover} ${props.transition}`}>
            {props.name}
        </button>
        </div>
    )
}