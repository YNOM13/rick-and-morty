import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {reducerCharacter} from "../Reducers/characterReducer";
import {reducerLocation} from "../Reducers/locationReducer";
import {reducerEpisode} from "../Reducers/episodeReducer";
import {watchListReducer} from "../Reducers/myWatchList";

const rootReducer = combineReducers({
  characters:reducerCharacter,
  locations:reducerLocation,
  episodes:reducerEpisode,
  watchList:watchListReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
