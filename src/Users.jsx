import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Users() {
    let url = useLocation();

    return (
        <>
        <h1>Users</h1>
        <ul>
            <li><Link to={`${url.pathname}/maxi`}>Maxi</Link></li>
            <li><Link to={`${url.pathname}/ulf`}>Ulf</Link></li>
            <li><Link to={`${url.pathname}/anarik`}>Anarik</Link></li>
            <li><Link to={`${url.pathname}/viviane`}>Viviane</Link></li>
        </ul>
        </>
    );
}

export default Users;