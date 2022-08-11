import Input from "../../../component/reusables/Input"
import emailIcon from "../../../assets/email.svg"
import passwordIcon from "../../../assets/password.svg"
import "../authentication.css"
import {useState} from "react"
import StepContainer from "./StepContainer"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Register = () => {

    let navigate = useNavigate()

    const [userInput, setUserInput] = useState({})
    const [step, setStep] = useState(1)
    const [fieldError, setFieldError] = useState(
        {
            firstName: {message: "", error: false},
            lastName: {message: "", error: false},
            email: {message: "", error: false },
            phone: {message: "", error: false},
            password: {message: "", error: false },
            confirmPassword: {message: "", error: false},
        }
    )

    const handleChange = (e) => {
        setUserInput({...userInput, [e.target.name]: e.target.value})
        checkIfFieldIsEmpty(e)
    }

    const handleClick = (e) => {       
        axios.post("http://localhost:5000/accounts", userInput)
            .then((data) => console.log(data))
            .catch((error) => console.log(error))
           
    }

    const checkIfFieldIsEmpty = (e) =>{
        switch (e.target.name) {
            case "email":
                if (e.target.value === "") {
                    setFieldError ({
                        ...fieldError, [e.target.name]:{
                            message: "Please enter en email",
                            error: true
                        }
                    })
                }else {
                    setFieldError({
                        ...fieldError, [e.target.name]: {
                            message: "",
                            error: false
                        }
                    })
                }
                break;
            case "password":
                if (e.target.value === "") {
                    setFieldError ({
                        ...fieldError, [e.target.name]:{
                            message: "Please enter a password",
                            error: true
                        }
                    })
                }else {
                    setFieldError({
                        ...fieldError, [e.target.name]: {
                            message: "",
                            error: false
                        }
                    })
                }
                break;
            default:
                break;
        }
    }

    // const checkIfItIsEmail = (e) => {

    // }


    return (
        <div className="authenticationContainer">
            <div className="leftSide">
                <div className="leftSide-container">
                    
                    <a onClick={()=>navigate("/login")}>
                        Have an account?
                        
                            <span style={{
                                color: 'var(--primary_green)',
                                marginLeft: '4px'
                            }}>
                                Login
                            </span>
                        </a>
                    
                    <div className="welcome-text">
                        <h1>Welcome to Norbs</h1>
                        <p>We are an event management platfrom,
                            aimed at helping you facilitate and run a smooth event
                        </p>
                    </div>

                    {step === 1 && <StepContainer step={1} headerTitle="Let us know you">
                        <Input text="test" handleChange={handleChange} icon={<icon defaultColor = "lightgrey"/>} label="firstName" fieldError={fieldError} />
                        <Input text="text" handleChange={handleChange} icon={<icon defaultColor = "lightgrey"/>} label="lastName" fieldError={fieldError} />
                        <Input text="text" handleChange={handleChange} icon={<icon defaultColor = "lightgrey"/>} label="email" fieldError={fieldError} />
                    </StepContainer>}
                    {step === 2 && <StepContainer step={2} headerTitle="Let us secure you">
                        <Input text="test" handleChange={handleChange} icon={<icon defaultColor = "lightgrey"/>} label="phone" fieldError={fieldError} />
                        <Input text="text" handleChange={handleChange} icon={<icon defaultColor = "lightgrey"/>} label="password" fieldError={fieldError} />
                        <Input text="text" handleChange={handleChange} icon={<icon defaultColor = "lightgrey"/>} label="confirmPassword" fieldError={fieldError} />
                    </StepContainer>}

                    {step === 1 &&
                        <button onClick={() => setStep(2)} style={{width: '70%'}} className="authentication-button">
                        Next Step
                    </button>}
                    {step === 2 &&
                        <div style={{display: "flex", justifyContent: "space-between", width: "70%"}}>
                            <button onClick={() => setStep(1)} style={{width: '45%'}} className="authentication-button-alternate">
                                Go Forward
                            </button>
                            <button style={{width: '45%'}} className="authentication-button" onClick={handleClick}>
                                Register
                            </button>
                        </div>
                    }
                    <div className="social-media">
                        <button>
                            <div className="social-media-item"></div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="rightSide">

            </div>
        </div>
    )
}
export default Register