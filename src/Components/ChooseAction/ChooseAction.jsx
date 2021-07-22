import React, {useState} from "react";
import s from "./ChooseAction.module.css"
import RegisterContainer from "../Register/RegisterContainer";
import LoginContainer from "../Login/LoginContainer";

const ChooseAction = () => {

    const [action, setAction] = useState('logInPage')

    const [isMessageActive, setIsMessageActive] = useState(false);
    const [message, setMessage] = useState('');

    const displayMessage = (status) => {
        if (status === 1) {
            setMessage('Registration was successful, now you can log in!');
            setIsMessageActive(true);
            setTimeout(() => {setIsMessageActive(false)}, 3000)
        } else {
            setMessage('Something went wrong, check email carefully!');
            setIsMessageActive(true);
            setTimeout(() => {setIsMessageActive(false)}, 3000)
        }
    }

    return (
        <div>
            <div className={s.container}>
                <button onClick={()=>{setAction('logInPage')}}>Log In</button>
                <div className={s.text}>or</div>
                <button onClick={()=>{setAction('signUpPage')}}>Sign Up</button>
            </div>
            {(action === 'logInPage') ? <LoginContainer displayMessage={displayMessage}
                                                        isMessageActive={isMessageActive} message={message}/>
                                                        :
                                                        <RegisterContainer displayMessage={displayMessage}
                                                        isMessageActive={isMessageActive} message={message}/>}
        </div>
    );
}

export default ChooseAction;