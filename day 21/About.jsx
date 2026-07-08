import { useContext } from "react";
import UserContext from "../UserContext";

function About(){
 const user = useContext(UserContext);
 return <h1>{user.age}</h1>;
}

export default About;