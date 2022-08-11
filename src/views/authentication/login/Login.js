import Input from "../../../component/reusables/Input"
import emailIcon from "../../../assets/email.svg"
import passwordIcon from "../../../assets/password.svg"
import "../authentication.css"
import { useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"


const Login = () => {

    let navigate = useNavigate()

    const [userInput, setUserInput] = useState({})
    const [fieldError, setFieldError] = useState(
        {
        email: {message: "", error: false },
        password: {message: "", error: false }
        }
    )

    const handleChange = (e) => {
        setUserInput({...userInput, [e.target.name]: e.target.value})
        checkIfFieldIsEmpty(e)
    }

    const handleClick = (e) => {
        axios.get(`http://localhost:5000/accounts?email=${userInput["email"]}`)
            .then((result) => {
                console.log(result)
                result.data[0].password === userInput["password"] && navigate("/dashboard")
            })
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
                    <p>
                        Don't have an account?
                        <a onClick={()=>navigate("/register")}>
                            <span style={{
                                color: 'var(--primary_green)',
                                marginLeft: '4px'
                            }}>
                                Sign up
                            </span>
                        </a>
                    </p>
                    <div className="welcome-text">
                        <h1>Welcome to Norbs</h1>
                        <p>We are an event management platfrom,
                            aimed at helping you facilitate and run a smooth event
                        </p>
                    </div>
                    <div className="input-button-fields">
                    {/* <div> */}
                        <Input text="email" handleChange={handleChange} icon={emailIcon} label="email" fieldError={fieldError} />
                        <Input text="password" handleChange={handleChange} icon={passwordIcon} label="password" fieldError={fieldError} />
                        <button className="authentication-button" onClick={handleClick}>Get inside Norbs</button>
                    </div>
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
export default Login