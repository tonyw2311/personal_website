import { useRef } from "react";

function MyButton({ children,href,onClick, className}) {
    const inputRef = useRef();
    const handleMouseEnter=(ev) =>{
        const bounds = inputRef.current.getBoundingClientRect()
        const y = ev.pageY-bounds.top;
        const x = ev.pageX - bounds.left;

        document.documentElement.style.setProperty('--x', x + 'px');
        document.documentElement.style.setProperty('--y', y + 'px');
        document.documentElement.style.setProperty('--y', y + 'px');      
    }
    const nameClass = "btn " + className
        
    if(href){
    return (
        <a href={href} className={nameClass} ref={inputRef} onMouseEnter={(ev) => handleMouseEnter(ev)}>
            <span>
                {children}
            </span>
        </a>
    )
    }else{
        return (
            <button type='button' onClick={onClick} className={nameClass} ref={inputRef} onMouseEnter={(ev) => handleMouseEnter(ev)}>
                <span>
                    {children}
                </span>
            </button>
        )

    }
    

}

export default MyButton;