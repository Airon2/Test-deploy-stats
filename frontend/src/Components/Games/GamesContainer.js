import { connect } from "react-redux";
import Games from "./Games"; // путь должен быть правильным
import { setGamesActionCreater } from "../../redux/GamesReduser";

function mapStateToProps(state) {
    return {
        GamesPage: state.GamesPage,
    };
}

function mapDispathToProps(dispatch) {
    return {
        setGames: (games) => {
            dispatch(setGamesActionCreater(games));
        },
    };
}

let GamesContainer = connect(mapStateToProps, mapDispathToProps)(Games);
export default GamesContainer;
