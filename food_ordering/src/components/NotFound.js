import '../index.css'
import { Link, Outlet } from 'react-router-dom';
import arrow from '../media/icon/arrowleft.svg'

function NotFound(){
    return(
        <>
        <div className='notFound'>
                <Link to='/' className='link'>
                        <img src={arrow} alt="" />
                        <h3>К главной странице</h3> 
                </Link>
             <h1>Страница не найдена </h1>
        </div>

        </>
    )
}
export default NotFound;