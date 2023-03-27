import { useNavigate } from "react-router-dom";


export default function DescriptionBox(props) {
    let navigate = useNavigate();

    function navigateToPage() {
        navigate(props.navLink,{replace:true});
    }


    return (
        <div onClick={navigateToPage} className='text-xl font-serif text-white 
        grid justify-items-center
        border-primary border-8 border-solid rounded-xl cursor-pointer p-5
        bg-gradient-to-bl from-indigo-900  to-primary align-top'>
            <h1 className="text-6xl group-hover:hidden font-sans font-extrabold">{props.title}</h1>
            <br/>
            <div className="group grid justify-items-center h-64 w-full">
                <img className="group-hover:hidden h-64" src={props.imageSRC}></img>
                <h1 className="hidden group-hover:flex text-center text-4xl p-10">Click to view more</h1>
            </div>
            <br />
            {props.children}
        </div>
    )
}