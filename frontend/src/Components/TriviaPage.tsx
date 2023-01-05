import axios from 'axios'
import React, { useState } from 'react'
import { Blocks } from 'react-loader-spinner'
import { Link, useNavigate, useParams } from 'react-router-dom'
import "../styles/Trivia.css"
import NavBar from './NavBar'


function TriviaPage() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false)

    var onClick = async () => {
        setLoading(true)

        const data = (await axios.get("https://opentdb.com/api.php?amount=10")).data
            console.log(data)
        navigate("questions/1", {state: {questions: data.results, correct: 0}})
    }
  return (
    <>
    {loading && <div className='loading'><Blocks width='500' height='500'/></div>}
    {!loading && <>
        <NavBar />
        <div className='title'>
            <div>
                <h1 style={{margin:"100px", fontSize:'50pt'}}>Welcome to Trivia!</h1>
                <div className='buttons'>
                    <div className='button' onClick={onClick}>Play</div>
                    <div className='button'>Configure</div>
                </div>
            </div>
        </div>
    </>}
    </>
  )
}

export default TriviaPage