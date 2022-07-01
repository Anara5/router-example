import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function UserId() {
    let {userName} = useParams();
    return (
        <div className="users">
            <Link to="/users">Back</Link>
            <h2>User: {userName}</h2>
        </div>
    );
}

export default UserId;