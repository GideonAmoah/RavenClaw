export default function Btn(props){
    return(
            <button className={` flex rounded-1xl pr-3.5   ${props.color} ${props.textcolor}`}>
             {props.name}
            </button>
           
        // </div>
    )

}

