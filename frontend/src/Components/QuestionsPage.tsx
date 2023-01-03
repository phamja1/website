import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Blocks} from 'react-loader-spinner'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import '../styles/Trivia.css'
import he from 'he'


function QuestionsPage() {
    const {questionId} = useParams()
    const location = useLocation()
    const id = parseInt(questionId as string)
    var correct = 0
    const questions = location.state.questions
  return (
    <>
    <div className='title'>
        <div style={{width: '1000px'}}>
            <h1 style={{fontSize:'50pt'}}>Question {id}</h1>
            <p style={{fontSize: '20pt', maxWidth: '1000px', marginBottom: '30px'}}>{he.decode(questions[id - 1].question)}</p>
            <Answers question={questions} questionId={id} onCorrect={() => correct++} onIncorrect={() => console.log("Incorrect Answer")}/>
        </div>
    </div>
    </>
  )
}

function Answers({question, questionId, onCorrect, onIncorrect}: result) {
    const navigate = useNavigate()
    const {correct_answer, incorrect_answers} = question[questionId - 1]

    const correctChoice = Math.floor(Math.random() * (3 - 0 + 1)) + 0

    const onClick = (key: number) => {
        if (key == correctChoice) {
            onCorrect()
        } else {
            onIncorrect()
        }
        if (questionId < question.length) {
            navigate(`/projects/trivia/questions/${questionId + 1}`, {state: {questions: question}})
        } else {
            navigate("/projects/trivia")
        }
    }
    var answers: string[] = new Array(4);
    let j = 0;
    for (let i = 0; i < answers.length; i++) {
        if (i == correctChoice) {
            answers[i] = correct_answer
        } else {
            answers[i] = incorrect_answers[j++]
        }
    }
    return (
        <div className='answers'>
            {answers[0] && <div className='button' onClick={()=>onClick(0)}>{he.decode(answers[0])}</div>}
            {answers[1] && <div className='button' onClick={()=>onClick(1)}>{he.decode(answers[1])}</div>}
            {answers[2] && <div className='button' onClick={()=>onClick(2)}>{he.decode(answers[2])}</div>}
            {answers[3] && <div className='button' onClick={()=>onClick(3)}>{he.decode(answers[3])}</div>}
        </div>
    )
}

interface result {
    question: any
    questionId: number
    onCorrect: ()=>void
    onIncorrect: ()=>void
}

export default QuestionsPage