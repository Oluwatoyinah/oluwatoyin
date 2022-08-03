import React, { useState } from 'react';
import WIP from './assets/images/wip.gif';
import Nigeria from './assets/images/nigeria.png';
import Day from './assets/images/day.png';
import Night from './assets/images/night.png';


const Home = () => {
    const [darkMode, setDarkMode] = useState(true) 

    const toogleMode = () => {
        setDarkMode(prevState => !prevState)
    }

    // const fr = new Date()

  return (
    <div className={`main ${darkMode ? "dark" : "light"}`}>
        <div className='container mx-auto py-5'>
            <div className='flex justify-end items-center'> 
                <p className='toyin text-md md:text-xl'>Akinbobola Oluwatoyin</p>
                <div className="mx-3" onClick={toogleMode}>
                    {darkMode ? 
                        <img src={Day} alt="light mode" width="40" />
                    : <img src={Night} alt="dark mode" width="40" />}
                </div> 
            </div>
            <div className='content'>
                <img src={WIP} alt="" />  
                <div className='text-center md:text-start'>
                    <h2 className='text-7xl uppercase'>Builders <br /> at <i><span style={{color: "rgb(151,146,146)"}}>work</span></i></h2> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home