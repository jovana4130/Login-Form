import React from 'react';
import './MainContent.css';
export const MainContent = () => {

    const [username, setUsername] = React.useState([]);
    const [password, setPassword] = React.useState([]);

    const onChangeUsernameHandler = (event) => {
        setUsername(event.target.value)
    }

    



return (
    <div className='main-container'>
        <form>
            <h1>LOGIN</h1>
            <input></input>
            <button type='submit' className='submit'>LOGIN</button>
        </form>
    </div>
)

}
