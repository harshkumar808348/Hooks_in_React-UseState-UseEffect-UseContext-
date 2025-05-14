import { useContext } from "react";
import { UserContext } from "./UserContext.jsx";

const Welcome = () => {
    const { user } = useContext(UserContext);
    return <h1>Welcome, {user}!</h1>;
};

export default Welcome;

