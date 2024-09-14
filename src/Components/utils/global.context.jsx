import { createContext } from "react";
import {useState, useEffect, useContext, useReducer} from "react";
import axios from 'axios';
// import { rootReducer,initialState } from "../../reducers/rootReducer";
import { reducer } from "../../reducers/reducer";

const ContextGlobal = createContext();
const lsfav = JSON.parse(localStorage.getItem("fav")) || [];
export const initialState = {theme: '', data: [], fav: lsfav};

const ContextProvider = ({ children }) => {
  // const [theme, setTheme] = useState(false);
  // const [fav, setFav] = useState(lsfav);
  // const [data, setData]  = useState([]);
  // console.log(fav)
const [state, dispatch] = useReducer(reducer, initialState);
const url = "https://jsonplaceholder.typicode.com/users";
useEffect(() => {
  axios(url).then((res) => {
    console.log(res.data);
    // setData(res.data);   
    dispatch({ type: "GET_DENTISTS", payload: res.data });
  });
},[]);

useEffect(() => {
localStorage.setItem("fav", JSON.stringify(state.fav));
},[state.fav]);

useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme){
    dispatch({ type: savedTheme === "dark" ? 'SET_DARK_MODE' : 'SET_LIGHT_MODE',});
  }
}, []);

useEffect(() => {
  localStorage.setItem("theme", state.theme ? "dark" : "light");
}, [state.theme]);

const toggleTheme = () => {
  setTheme(prevMode => !prevMode);
};
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    // <ContextGlobal.Provider value={{theme, setTheme, toggleTheme ,fav, setFav, data}}>
    <ContextGlobal.Provider value={{ state, dispatch }}> 
    {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;

export const useContextGlobal = () => {
  return useContext(ContextGlobal)
}
