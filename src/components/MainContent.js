import React from 'react';
import './MainContent.css';
export const MainContent = () => {

    const [username, setUsername] = React.useState([]);
    const [password, setPassword] = React.useState([]);

    const onChangeUsernameHandler = (event) => {
        setUsername(event.target.value)
    }

    const onChangePasswordHandler = (event) => {
        setPassword(event.target.value)
    }

    const resetForm = () => {
        setUsername('');
        setPassword('');
    }

    const onClickHandler = () => {
        alert(`Succes! 
        Username: ${username}
        Password: ${password}`)
    }




        return (
            <div className='main-container'>
                <form>
                    <h1>LOGIN</h1>
                    <input></input>
                    <input></input>
                    <button type='submit' className='submit'>LOGIN</button>
                    <button id="login" onClick={onSubmitHandler}>login</button>
                </form>
            </div>

        )
}
