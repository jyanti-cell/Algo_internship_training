import { useContext } from "react";
import UserContext from "../UserContext";

function Contact() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Contact Page</h1>
      <h2>Contact Number: {user.contact}</h2>
    </>
  );
}

export default Contact;