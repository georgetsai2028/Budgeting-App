
import { Outlet } from "react-router-dom";

const UserDashboard = () => {

    return (

        <>
        <h1>HELLO </h1>
        <h2> Here is the main page: </h2>
        <Outlet />
        </>
    );
    
};

export default UserDashboard;