import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import FadeIn from "../components/FadeIn"
import DelayComponent from "../components/DelayComponent"
import FadeInSlide from "../components/FadeInSlide"



import cloud from "../images/cloud.svg"
import anthony from "../images/anthony.png"
import tamu from "../images/tamu.svg"
import tree from "../images/tree.svg"
import grass from "../images/grass.svg"
import python from "../images/languages/python.svg"
import js from "../images/languages/js.svg"
import css from "../images/languages/CSS.svg"
import html from "../images/languages/HTML.svg"
import java from "../images/languages/java.svg"
import matlab from "../images/languages/matlab.png"
import reactsvg from "../images/technology/react.svg"
import node from "../images/technology/node.svg"
import vite from "../images/technology/vite.svg"
import bootstrap from "../images/technology/bootstrap.svg"
import github from "../images/technology/github.svg"
import mongo from "../images/technology/mongo.svg"
import tailwind from "../images/technology/tailwind.svg"
import vscode from "../images/technology/vscode.svg"
import game24 from "../videos/game24.mp4"
import wordle from "../videos/wordle.mp4"







function HomePage() {

    return (

        <div className="flex w-screen h-screen text-6xl text-white">

            <Parallax pages={9}>
                <ParallaxLayer>
                    <div className="grid content-center place-items-start ml-[20%] mt-[5%]">
                        <FadeIn>
                            <h1 className="absolute flex mt-[15%]">Hi there!</h1>
                        </FadeIn>
                        <DelayComponent>
                            <FadeIn>
                                <h2 className="absolute flex mt-[20%]">My name is Anthony</h2>
                            </FadeIn>
                        </DelayComponent>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1}>
                    <FadeInSlide>
                        <h1>Let me tell you more about me</h1>
                    </FadeInSlide>
                </ParallaxLayer>

                <ParallaxLayer offset={1.4}>
                    <FadeIn>
                        <div className="grid grid-cols-[20%_15%_50%_15%]">
                            <div></div>
                            <img src={anthony} className='h-80 rounded-3xl border-blue-900 border-solid ml-10 mr-auto ' />

                            <div className="align-top text-3xl place-items-center grid">
                                <h1 className="  ">I'm a Mechanical Engineering major</h1>
                                <br />
                                <h1>at</h1>
                                <img src={tamu} className='h-80 rounded-3xl border-blue-900 border-solid ' />
                            </div>
                        </div>
                    </FadeIn>
                    <br />
                    <FadeInSlide>
                        <h1 className="mt-24">that enjoys programming</h1>
                    </FadeInSlide>
                </ParallaxLayer>


                <ParallaxLayer offset={2} factor={2} speed={.5}
                    style={{
                        backgroundImage: `url(${tree})`,
                        backgroundSize: 'cover',
                        backgroundPosition: "center"
                    }}>
                </ParallaxLayer>
                <ParallaxLayer offset={2.4}>
                    <FadeInSlide>
                        <img src={cloud} className='h-80 absolute left-[20%] top-[25%] m-auto opacity-70' />
                        <img src={cloud} className='h-80 absolute m-auto left-[40%] top-48 opacity-80' />
                        <img src={cloud} className='h-80 absolute left-3 top-40 m-auto opacity-60' />
                        <img src={cloud} className='h-80 absolute right-[5%] top-32 m-auto opacity-80' />
                    </FadeInSlide>
                </ParallaxLayer>
                <ParallaxLayer offset={2.3} factor={2} speed={.7}
                    style={{
                        backgroundImage: `url(${grass})`,
                        backgroundSize: 'cover',
                        backgroundPosition: "center",
                        zIndex: "-1",

                    }}>
                </ParallaxLayer>

                <ParallaxLayer offset={2} factor={2.2} speed={.6} className='bg-gradient-to-b gradient-nature -z-30'>
                </ParallaxLayer>

                <ParallaxLayer offset={3}>
                    <FadeInSlide>
                        <h1 className="z-30 text-white font-extrabold">Beautiful Day today isn't it</h1>
                    </FadeInSlide>
                </ParallaxLayer>

                <ParallaxLayer offset={4}>
                    <FadeIn>
                        <h1 className="text-5xl">Here are the languages I know:</h1>
                        <br />
                    </FadeIn>
                    <div className="grid grid-cols-[10%,10%,10%] gap-x-10 gap-y-5 grid-rows-2 justify-center justify-items-end w-full">
                        <FadeInSlide delay={'1000ms'}>
                            <img className='object-cover w-32' src={python} title='python' />
                        </FadeInSlide>
                        <FadeInSlide delay={'1000ms'}>
                            <img className='object-cover w-32' src={java} />
                        </FadeInSlide>
                        <FadeInSlide delay={'1000ms'}>
                            <img className='object-cover w-32' src={matlab} />
                        </FadeInSlide>
                        <FadeInSlide delay={'5000ms'}>
                            <img className='object-cover w-32' src={html} />
                        </FadeInSlide>
                        <FadeInSlide delay={'7000ms'}>
                            <img className='object-cover  w-32' src={css} />
                        </FadeInSlide>
                        <FadeInSlide delay={'7000ms'}>
                            <img className='object-cover  w-32' src={js} />
                        </FadeInSlide>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={5}>
                    <FadeIn>
                        <h1 className="text-5xl">Here are some of the technologies I use:</h1>
                        <br />
                    </FadeIn>
                    <div className="grid grid-cols-[10%,10%,10%,10%] gap-x-10 gap-y-5 grid-rows-2 justify-center justify-items-end w-full">
                        <FadeInSlide delay={'1000ms'}>
                            <img className='object-cover w-32' src={reactsvg} />
                        </FadeInSlide>
                        <FadeInSlide delay={'1000ms'}>
                            <img className='object-cover w-32' src={node} />
                        </FadeInSlide>
                        <FadeInSlide delay={'1000ms'}>
                            <img className='object-cover w-32' src={vite} />
                        </FadeInSlide>
                        <FadeInSlide delay={'5000ms'}>
                            <img className='object-cover w-32' src={bootstrap} />
                        </FadeInSlide>
                        <FadeInSlide delay={'7000ms'}>
                            <img className='object-cover  w-32' src={tailwind} />
                        </FadeInSlide>
                        <FadeInSlide delay={'7000ms'}>
                            <img className='object-cover mt-10 w-32' src={mongo} />
                        </FadeInSlide>
                        <FadeInSlide delay={'7000ms'}>
                            <img className='object-cover  w-32' src={vscode} />
                        </FadeInSlide>
                        <FadeInSlide delay={'7000ms'}>
                            <img className='object-cover  w-32' src={github} />
                        </FadeInSlide>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={6}>
                    <FadeInSlide>
                        <h1 className="font-extrabold ml-10">Cool Projects</h1>
                        <hr className="w-1/2 mx-auto" />
                    </FadeInSlide>
                    <br />

                    <div className="grid grid-cols-2 gap-y-10 justify-center justify-items-center text-4xl">
                        <div className="grid justify-items-center">
                            <FadeIn>
                                <h1>Wordle Automation</h1>
                            </FadeIn>
                            <video src={wordle} className='m-10 w-10/12 border-8 border-primary border-solid'  />
                        </div>

                        <div className="grid justify-items-center">
                            <FadeIn>
                                <h1>24 Game Web App</h1>
                            </FadeIn>
                            <video src={game24} className='m-10 w-10/12 border-8 border-primary border-solid'  />
                        </div>
                    </div>

                </ParallaxLayer>

                <ParallaxLayer offset={7.5}>
                    <h1>There is a lot more to see!!!</h1>

                </ParallaxLayer>




            </Parallax>
        </div>

    )


}


export default HomePage;