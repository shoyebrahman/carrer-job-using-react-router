import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1>Opps Something wrong !!!!</h1>
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default ErrorPage;