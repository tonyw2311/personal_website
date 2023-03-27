import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Route, Routes } from 'react-router-dom';

import DescriptionBox from '../components/DescriptionBox';
import FadeInSlide from "../components/FadeInSlide";
import wordle from '../images/wordle.png';
import game from '../images/game24.png';

import Game24Page from './ProjectPages/Game24Page';
import WordlePage from './ProjectPages/WordlePage';

function ProjectPage() {


    return (

        <div className="text-white text-5xl">
            <Parallax pages={2}>
                <Routes>
                    <Route path="/game-24-project" element={<Game24Page />} />
                    <Route path="/wordle-project" element={<WordlePage />} />
                </Routes>
                <ParallaxLayer offset={.1}>
                    <FadeInSlide>
                        <h1 className='text-6xl'>Projects</h1>
                        <hr className='w-1/4 mx-auto' />
                    </FadeInSlide>
                    <br />

                    <div className='grid grid-cols-2 grid-rows-2 gap-10 justify-items-center text-justify mx-5 p-1'>

                        <DescriptionBox title='Game 24' navLink="game-24-project" imageSRC={game} >
                            <h1>This web application is designed for users who want to play the card game, "24", and consists of a Home Page, Game Page, and Instructions Page. Some of the unique features of the website include: a drag and drop feature to rearrange the cards, a scoring and leaderboard system, and a functional demo in the instructions to guide new users.</h1>
                        </DescriptionBox>
                        <DescriptionBox title='Wordle Automation' navLink="wordle-project" imageSRC={wordle} >
                            <h1>Wordle is a popular guessing game on NYTimes which tasks the player to guess a five letter word within six tries. Using Python and the Selenium library, I automated the word-solving process. This program can solve wordle within 10 seconds.<br/><br/><br/></h1>
                        </DescriptionBox>

                        <DescriptionBox title='Weather API Project' navLink="weather-api-project" imageSRC={wordle} >
                            <h1>Wordle is a popular five letter word guessing game on NYTimes allowing the user to guess the word within six tries. Using Python and the Selenium library, I automated the word solving process. This program can solve wordle within 10 seconds.</h1>
                        </DescriptionBox>
                        <DescriptionBox title='ML Project' navLink="ML-project" imageSRC={wordle} >
                            <h1>Wordle is a popular five letter word guessing game on NYTimes allowing the user to guess the word within six tries. Using Python and the Selenium library, I automated the word solving process. This program can solve wordle within 10 seconds.</h1>
                        </DescriptionBox>

                    </div>

                </ParallaxLayer>

                <ParallaxLayer offset={2}>
                    <FadeInSlide>
                        <h1>Mechanical</h1>
                    </FadeInSlide>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default ProjectPage;