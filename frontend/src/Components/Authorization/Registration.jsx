import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, NavLink } from 'react-router-dom';
import styles from './Authorization.module.css';

const Registration = (props) => {
    const navigate = useNavigate();
    const [eyes, setEyes] = useState(false);
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleCreateUser = () => {
        fetch('http://localhost:8000/api/auth/registration/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Ошибка HTTP, статус " + response.status);
            }
            return response.json();
        })
        .then(data => {
            props.createUser(data);
            localStorage.setItem('user', JSON.stringify({ ...data.user, accessToken: data.accessToken }));
            navigate('/');
        })
        .catch(error => {
            console.error("Произошла ошибка:", error);
        });
    };

    return (
        <div className={styles.registration_wrapper}>
            <div className={styles.register_container}>
                <div className={styles.registration_information}>
                <h1 className={styles.registration_coffee_shop_name}>Зарегистрироваться</h1>
                    <input
                        className={styles.registration_input}
                        type='text'
                        placeholder='Имя'
                        value={newUser.name}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    />
                    <input
                        className={styles.registration_input}
                        type='email'
                        placeholder='Email'
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    />
                    <input
                        className={styles.registration_input}
                        type={eyes ? "text" : "password"}
                        placeholder='Пароль'
                        value={newUser.password}
                        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                    />
                    {eyes ? (
                        <span onClick={() => setEyes(false)}>
                            <FaEye />
                        </span>
                    ) : (
                        <span onClick={() => setEyes(true)}>
                            <FaEyeSlash />
                        </span>
                    )}
                    <NavLink className={styles.switch} to="/login">У меня есть аккаунт</NavLink>
                    <button className={styles.registration_btn} onClick={handleCreateUser}>Продолжить</button>
                    <div className={styles.registration_line}>
                            <div className={styles.line}></div>
                            <p>или продолжите через</p>
                            <div className={styles.line}></div>
                        </div>
                    <div className={styles.registration2}>
                        <img className={styles.registration_icon} src='./images/steam.png' alt="Steam" />
                        <img className={styles.registration_icon} src='./images/google.png' alt="Google" /> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
