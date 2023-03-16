import IsElementOnScreen from "./IsElementOnScreen";


const FadeIn = ({children, delay})=>{
    const [containerRef, isVisible] = IsElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold:1.0
    })


    return(
    <div className="m-0 text-center">
        <div ref={containerRef} className ={isVisible ? 
        `opacity-100 transition-all duration-[1500ms] delay-[${delay}]`:
        `opacity-0 transition-all duration-[1500ms] delay-[${delay}]`}>
            {children}
        </div>
    </div>
    )

}

export default FadeIn;