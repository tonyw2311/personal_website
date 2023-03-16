import React, { useEffect, useState } from "react"


const DelayComponent = ({ children }) => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        
            const timeout = setTimeout(() => {
                setShow(true)
            }, 900)

            return () => clearTimeout(timeout)
        
    }, [show])
    if (!show) return null

    return (
        <div >
            {children}
        </div>
    )
}

export default DelayComponent;