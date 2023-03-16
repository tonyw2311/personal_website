import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import FadeIn from "../components/FadeIn"
import DelayComponent from "../components/DelayComponent"
import FadeInSlide from "../components/FadeInSlide"


function AboutPage() {


    return (

        <div className="text-white text-6xl">
            <Parallax pages={4}>
                <ParallaxLayer offset={.1}>
                    <FadeInSlide>
                    <h1 className='text-left'>About me</h1>
                    </FadeInSlide>
                </ParallaxLayer>
            </Parallax>
        </div>
    )

}

export default AboutPage;