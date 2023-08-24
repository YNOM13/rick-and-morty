import React, {useMemo, useState} from 'react';
import MyTitle from "../UI/MyTitle/MyTitle";
import { useDispatch, useSelector } from "react-redux";
import { action_add_list, action_remove_list } from "../../redux/Reducers/myWatchList";
import TextField from "@mui/material/TextField";
import "./MyWatchList.scss";
import MyWatchListItems from "./MyWatchListItems/MyWatchListItems";
import Loader from "../UI/Loader/Loader";

interface IList {
  name: string;
  id: string;
  checked: boolean;
}

interface IListOfWishList {
  list: IList[];
  watchList: any;
}

const MyWatchList: React.FC = () => {
  const dispatch = useDispatch();
  const { list, loader, error } = useSelector((state: IListOfWishList) => state.watchList);

  const [addWish, setAddWish] = useState('');
  const [searcher, setSearcher] = useState('')

  const onHandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(addWish.trim()){
      const wishList = {
        name: addWish,
        id: Date.now().toString(),
        checked: false,
      };
      setAddWish('');
      dispatch(action_add_list(wishList));
    }

  };

  const deleteEpisode = (id: number) => {
    dispatch(action_remove_list(id));
  };

  const filteredList = useMemo(()=>{
    return  list.filter((i:any) => i.name.toLowerCase().includes(searcher.toLowerCase()))
  },[searcher])

  if (loader) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <MyTitle>My watch list</MyTitle>
      <form className="form" onSubmit={onHandleSubmit}>
        <TextField
          sx={{ m: 1 }}
          variant="outlined"
          value={addWish}
          onChange={(e) => setAddWish(e.target.value)}
          type="text"
          id="outlined-basic"
          label="add episode"
        />
        <TextField
          sx={{ m: 1 }}
          variant="outlined"
          value={searcher}
          onChange={(e) => setSearcher(e.target.value)}
          type="text"
          id="outlined-basic"
          label="search by name"
        />
        <button className="button-episode">Add</button>
      </form>
      <MyWatchListItems list={searcher.trim() ? filteredList :list} deleteEpisode={deleteEpisode} />
    </div>
  );
};

export default MyWatchList;
