
import React from "react";
import questions from "../Components/Questionlist.js";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Success from "../Components/Success.js/Success.js";
import TryAgain from "../Components/TryAgain/TryAgain";

function App() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const current_question = questions[questionIndex];
    // let navigate = useNavigate();

    const handleClick = (e) => {
        console.log("hello", e.target.value)
    }
    const handleNext = () => {
        const next_question = questionIndex + 1;
        if (next_question < questions.length) {
            setQuestionIndex(questionIndex + 1);

        }
        else {
            alert("End of session!!Please Submit")
        }
    }
    // const handleSubmit = () => {
    function get_Answer (index) {
        if (current_question.answer === index) {
            setScore(score + 1);
            console.log(setScore);
        }
    }
    }

    


   
    //     if (score > 5) 
    //     {
    //         return <Success />
    //     }
    //     else {
    //          return <TryAgain />
    //     }
    // }

    return (
        <div className="quiz_box">
            <div className="quiz_question">
                {current_question.question}
            </div>
            <div className="quiz_choice"> </div>
            <ul className="quiz_ul">
                {current_question.options.map((option, index) => {
                    return (
                        <div>
                            <input type="radio" id={option.id} value={option.value} name="language" onClick={handleClick} />
                            <label for={option.value}>{option.value}</label>
                        </div>

                    )
                })}

            </ul>
            <div>
                <button type="button" onClick={handleNext}>Next</button>
                <button type="submit" onClick={()=>{get_Answer()}}>Submit</button>
                {/* <button onClick={() => { navigate("/Result") }} class="button3">Submit</button> */}
            </div>

        </div>

    );
}




export default App;
