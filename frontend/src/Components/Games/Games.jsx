import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Games.module.css';
import { getGames } from '../../services/api';

const Games = () => {
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await getGames();
                setGames(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGames();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className={styles.Games}>
            <div className={styles.Games_wrapper}>
                <div className={styles.GamesList}>
                    {games.map((game) => (
                        <Link
                            to={`/games/${encodeURIComponent(game.title)}`}
                            key={game.id}
                            className={styles.GameLink}
                        >
                            <div className={styles.GameItem}>
                                <img src={game.icon} alt={game.title} className={styles.GameIcon} />
                                <div className={styles.GameTitle}>{game.title}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Games;
