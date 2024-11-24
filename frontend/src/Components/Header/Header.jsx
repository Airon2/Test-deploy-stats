import styles from './Header.module.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation(); 

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                setCurrentUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Error parsing user from localStorage:", error);
                localStorage.removeItem('user');
            }
        }
    }, []);

    const isAuthenticated = currentUser !== null;

    const logOut = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        console.log("User logged out");
        setCurrentUser(null);
        navigate('/');
    };

    return (
        <div className={styles.Header}>
            <div className={styles.Header_wrapper}>
                <div className={styles.Header_input_wrapper}>
                    <input className={styles.Header_input} placeholder="Поиск"/>
                    <IoIosSearch size={25} className={styles.Header_input_img}/>
                </div>     
                <div className={styles.Header_form}>
                    <NavLink to="/" className={`${styles.navigator_text} ${location.pathname === '/' ? styles.active : ''}`}>Главное</NavLink>
                    <NavLink to="/Games" className={`${styles.navigator_text} ${location.pathname === '/Games' ? styles.active : ''}`}>Игры</NavLink>
                    <NavLink to="/MyProfile" className={`${styles.navigator_text} ${location.pathname === '/MyProfile' ? styles.active : ''}`}>Мой профиль</NavLink>
                    {isAuthenticated ? (
                        <NavLink className={styles.navigator_text} onClick={logOut}>ВЫЙТИ</NavLink>
                    ) : (
                        <NavLink to="/login" className={styles.navigator_text}>ВОЙТИ</NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
