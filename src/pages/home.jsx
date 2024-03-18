import { Link } from 'react-router-dom';

function Home (){
    return (
    <>
        <h1>Bienvenido</h1>
        <p> Hola soy Manolito soy una persona muy  amable y con un gran corazón.  Me encanta la vida, los animales,
            y trabajo muchisimo.
        </p>
        <ul>
            <li><Link to={`/projects`}>Projects</Link>
            </li>
            <li><Link to={`/resume`}>Resume</Link>
            </li>
        </ul>
    </>
    )
}

export default Home