import {useHistory} from 'react-router-dom'
function Error() {
    const history = useHistory();
    return ( <>
    <h1 style={{textAlign:'center', marginTop:'30px',fontSize:'50px'}}>OOPS!</h1>
    <p style={{textAlign:'center',fontSize:'20px'}}>404 Not found</p>
    </> );
}

export default Error;