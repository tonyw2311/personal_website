import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import FadeIn from "../components/FadeIn"
import FadeInSlide from "../components/FadeInSlide"
import MyButton from '../components/MyButton'
import headshot from '../images/headshot.png'
import game from '../images/game24.png'
import music from '../images/hobbies/music.png'
import lifting from '../images/hobbies/lifting.png'
import running from '../images/hobbies/running.png'
import boxing from '../images/hobbies/boxing.png'


import { useRef, useState } from 'react'

function AboutPage() {
    const ref = useRef();


    return (

        <div className="text-white text-6xl">
            <Parallax pages={7} ref = {ref}>
                <ParallaxLayer offset={0}>
                    <FadeInSlide>
                        <h1 className=' mt-[7%]'>About me</h1>

                    </FadeInSlide>
                    <FadeIn>
                        <hr className='w-1/3 mx-auto' />
                    </FadeIn>
                    <br />

                    <div className='grid grid-cols-[10%_30%_30%_20%] justify-items-center'>
                        <div></div>
                        <img className='rounded-lg m-10 h-1/2 border-indigo-900 border-4 border-solid' src={headshot} />
                        <div className='text-lg font-serif text-justify'>
                            <p>I am a student at Texas A&M who will be
                                <em><strong className='font-extrabold'> graduating in May 2023 </strong></em>
                                and I am looking for an <em><strong className='font-extrabold'>  entry-level software engineering position. </strong></em>
                                I am interested in both front-end and back-end development.</p>

                            <br />

                            <p>Although I will have a degree in Mechanical Engineering, I have a <em><strong>self-driven passion</strong></em> for software development.
                                I have been programming for <em><strong>over five years</strong></em> and have been learning and improving my programming skills thoughout the years alongside my college curriculum.</p>
                            <br />
                            <p>I have experience with Python, Java, SQL, Git, HTML, CSS, and Javascript.
                                Some of the technologies I have used include GitHub, React, Node.js, Express.js, MongoDB, and many more.</p>
                            <br />
                            <MyButton onClick= {() => ref.current.scrollTo(1.1)}>Scroll for more!</MyButton>

                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1.3}>
                    <div className='text-lg ml-10 text-justify'>
                        <FadeInSlide>
                            <p className='text-5xl text-left'>Most Recent Project</p>
                            <hr className='w-1/2' />
                        </FadeInSlide>
                        <br />
                        <div className='grid justify-items-center grid-cols-[40%_60%] font-serif'>
                            <p className=''>Recently, I have been expanding my knowledge on frontend development.
                                After taking a web development course on Udemy, I wanted to implement what I learned on my own personal project.
                                Using MongoDB, React, Express.js, and Node.js, I created my own web application that integrated both the front-end,
                                and back-end along with a database. <br /><br />This web application is designed for users who want to play the card game, "24",
                                and consists of a Home Page, Game Page, and Instructions Page. Some of the unique features of the website include:
                                a drag and drop feature to rearrange the cards, a scoring and leaderboard system, and a functional demo in the instructions
                                to guide new users.
                                <br /><br />
                                {/* To learn more about this project and its inspiration<MyButton>Click Here</MyButton> */}
                            </p>
                           
                            <FadeIn>
                                <div className='grid justify-items-center text-4xl'>
                                    <h1>Game 24 Web App</h1>
                                    <img className='rounded-lg w-3/4' src={game} />
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2.4}>
                    <div className='text-xl ml-10 text-justify'>

                        <br />
                        <div className='grid justify-items-center grid-cols-[40%_60%]'>
                            <div className='self-center'>
                                <FadeInSlide>
                                    <p className='text-5xl text-left'>Hobbies</p>
                                    <hr className='w-1/2' />
                                </FadeInSlide>
                                <p className='font-serif'>Along with programming, I have various other hobbies which include: music, weight-lifting,
                                    recreational boxing and many more! <br /><br />Scroll down if you're interested...</p>
                            </div>
                            <img className='rounded-lg ml-10 w-full self-center' src={music} />
                        </div>
                    </div>

                </ParallaxLayer>
                <ParallaxLayer offset={3.25} className=''>
                    <FadeInSlide>
                        <p className='text-4xl text'>Music</p>
                        <hr className='w-1/3 mx-auto' />
                    </FadeInSlide>
                    <div className='grid justify-items-center'>
                        <p className='text-2xl mt-5'>I know 6 different instruments, <br />but I mainly play guitar and bass today
                            <br /> Below is my history with the 6 instruments
                        </p>
                    </div>
                    <br />

                    <div className='grid justify-items-center grid-cols-3 grid-rows-2 text-3xl mx-10 text-justify gap-10'>
                        <div>
                            <h1>Guitar</h1>

                            <p className='text-lg font-serif'>Here is the guitar I use. I started summer of 2022, so I've been playing for around 10 months now.
                                I play mainly R&B and pop music on the guitar and sing along as well. I am trying to get better at playing by ear and learning improv.</p>
                        </div>
                        <div>
                            <h1>Bass Guitar</h1>

                            <p className='text-lg font-serif'>Here is the bass guitar I use. I started in the beginning of 2022, so I'm still relatively new.
                                I play mainly rock and R&B music on the bass and play along with the tracks. Still trying to learn the basics before I try and learn to play by ear.</p>
                        </div>
                        <div>
                            <h1>Piano</h1>
                            <p className='text-lg font-serif'>I started learning piano in 2nd grade and have played for over 10 years. It is the foundation
                                for my music journey. I mainly played classical music on the piano and one of my favorite pieces is the Elegie in E-flat minor by Rachmaninoff. </p>
                        </div>
                        <div>
                            <h1>Ukulele</h1>
                            <p className='text-lg font-serif'>Started learning the ukulele in the midst of the pandemic in Spring of 2021. I hadn't learned
                                a new instrument in a while at this point, so it definitely was a breath of fresh air. The ukulele also provided a great transition to learning the guitar</p>
                        </div>
                        <div>
                            <h1>Violin</h1>
                            <p className='text-lg font-serif'>I played the violin all throughout high school, so around 7 years total. I participated in my school's
                                orchestra and it was a fun experience overall. In orchestra, we played everything from classical to Christmas to jazz.</p>
                        </div>
                        <div>
                            <h1>Cello</h1>
                            <p className='text-lg font-serif'>I only learned this instrument for one year on my own in high school. Personally, I loved the sound of
                                the cello more than the violin as it is deep and rich, but the orchestra director didn't let me switch instruments so I discontinued learning the cello.</p>
                        </div>

                    </div>

                </ParallaxLayer>

                <ParallaxLayer offset={5}>
                    <FadeInSlide>
                        <p className='text-4xl text'>Health & Fitness</p>
                        <hr className='w-1/3 mx-auto' />
                    </FadeInSlide>
                    <div className='grid justify-items-center'>
                        <p className='text-2xl mt-5'>I like weight-lifting, running, and recreational kick-boxing</p>
                    </div>
                    {/* <img src={NiceView} className='w-1/4 mx-auto' alt='loading...' /> */}
                    <br />
                    <div className='grid justify-items-center grid-cols-3 text-3xl mx-10 text-justify gap-10'>
                        <div>

                            <h1>Weight-lifting</h1>
                            <p className='text-lg font-serif'>I go to the gym an average of 5 days a week.
                                Some may not like it, but it is therapeutic for me! My goal is to bench 225 lbs for 5
                                reps at the end of college if you know what that means.</p>
                        </div>
                        <div>

                            <h1>Running</h1>
                            <p className='text-lg font-serif'>I go once or twice a week. It is also another
                                therapeutic activity and it keeps the heart healthy.</p>
                        </div>
                        <div>

                            <h1>Recreational Kick-boxing</h1>
                            <p className='text-lg font-serif'>I go once a week. Kick-boxing is very stress-relieving.
                                It's also good cardio for your heart as well!</p>
                        </div>
                    </div>

                </ParallaxLayer>

            </Parallax>
        </div>
    )

}

export default AboutPage;