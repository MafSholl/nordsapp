import Input from "../../component/reusables/Input"
import emailIcon from "../../assets/email.svg"
import passwordIcon from "../../assets/password.svg"
import "./login.css"

const handleClick = (e) => {
    console.log(e)
}

const Login = () => {
    return (
        <div className="loginContainer">
            <div className="leftSide">
                <div className="leftSide-container">
                <a>
                    Don't have an account?
                    <span style={{
                        color: 'var(--primary_green)',
                        marginLeft: '4px'
                    }}>
                        Sign up
                    </span>
                </a>
                    <div className="welcome-text">
                        <h1>Welcome to Norbs</h1>
                        <p>We are an event management platfrom,
                            aimed at helping you facilitate and run a smooth event
                        </p>
                    </div>
                    <div className="input-button-fields">
                        <Input text="email" handleClick={handleClick} icon={emailIcon} label="email" />
                        <Input text="password" handleClick={handleClick} icon={passwordIcon} label="password" />
                        <button>Get inside Norbs</button>
                    </div>
                    <div className="social-media">
                        <a>
                            <div className="social-media-item"></div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="rightSide">

            </div>
        </div>
    )
}
export default Login