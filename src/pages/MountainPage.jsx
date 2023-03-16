import mountains from "../images/mountain.png"
import cloud from "../images/cloud.png"
import {Parallax, ParallaxLayer} from '@react-spring/parallax'


function MountainPage() {


    return (
        <div className="flex w-screen h-screen justify-center">



            <Parallax pages = {4}>
                <ParallaxLayer
                 speed={0.5}
                 factor={1.5}
                 offset={0.25}
                 style={{
                    backgroundImage: `url(${mountains})`,
                    backgroundSize: 'cover',
                 }}
                 ></ParallaxLayer>

                <ParallaxLayer>
                    <img src= {cloud} className='h-80 absolute left-[20%] top-[20%] m-auto'/>
                    <img src= {cloud} className='h-80 absolute m-auto left-[50%] top-[100px]'/>
                    <img src= {cloud} className='h-80 absolute left-3 top-36 m-auto'/>
                    <img src= {cloud} className='h-80 absolute right-64 top-28 m-auto'/>

                </ParallaxLayer>

                <ParallaxLayer offset={2}>
                <h1 className="text-white">HIIII</h1>
                </ParallaxLayer>


            </Parallax>
        </div>

    )


}


export default MountainPage;