import IsElementOnScreen from "./IsElementOnScreen";


const FadeInSlide = ({children,delay})=>{
    const [containerRef, isVisible] = IsElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold:1.0
    })

    return(
    <div className="m-0 text-center">
        <div ref={containerRef} className ={isVisible ? 
        `opacity-100 transition-all duration-[1000ms] blur-0 delay-[${delay}] translate-x-0`
        :`opacity-0 blur-md transition-all duration-[1000ms] delay-[${delay}] -translate-x-96`}>
            {children}
        </div>
    </div>
    )

}

export default FadeInSlide;