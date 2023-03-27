
import resume from '../images/ResumeCS.pdf'

const ResumePage =()=>{

    return(
        <div className='grid justify-items-center w-screen h-screen pb-[100px]'>
            <iframe src={resume} className='w-1/2 h-full mt-20 '></iframe>

        </div>

    )


}

export default ResumePage;