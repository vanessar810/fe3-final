
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../routes';
import { useContextGlobal } from '../Components/utils/global.context';
import "/src/index.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useContextGlobal();
  const toggleTheme = () => {dispatch( {type: 'TOGGLE_THEME'});};

  return (
    <nav className= {state.theme ? "dark" : "light"}>
      <button onClick={() => navigate(-1)}> Back </button>
      <Link to={routes.home}><h4>Home</h4></Link>
      {/* <Link to={routes.detail}><h4>Detail</h4></Link> */}
      <Link to={routes.contact}><h4>Contact</h4></Link>
      <Link to={routes.favs}><h4>Favs</h4></Link>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar