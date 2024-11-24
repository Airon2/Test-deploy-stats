import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGameDetail } from '../../services/api';

const GameDetail = () => {
    const { gameTitle } = useParams();
    const [game, setGame] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGameDetail = async () => {
            try {
                const response = await getGameDetail(gameTitle);
                setGame(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGameDetail();
    }, [gameTitle]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!game) {
        return <div>No game found</div>;
    }

    return (
        <div>
            <h1>{game.title}</h1>
            <img src={game.icon} alt={game.title} />
            <p>Playtime: {game.playtime_hours} hours</p>
            {/* Добавьте любую другую информацию о игре */}
        </div>
    );
};

export default GameDetail;
