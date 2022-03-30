import {useHistory} from 'react-router-dom'
function Error() {
    const history = useHistory();
    return ( <>
    <h1>Error</h1>
     <button onClick={() => history.push("/")}>back to home</button>
    </> );
}

export default Error;