import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { context } from '../../context/context';
const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,input,setInput}=React.useContext(context);

  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev</span></p>
                <p>How Can I Help You Today</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to go to</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Summarize me the code</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Explain this to a 5 year old</p>
                    <img src={assets.code_icon} alt="" />
                </div>
                <div className="card">
                    <p>Help me in calculations</p>
                    <img src={assets.message_icon} alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" className="text" placeholder='Enter prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={(e)=>onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini can make mistakes, so double-check it
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main