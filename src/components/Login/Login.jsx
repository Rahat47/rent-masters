import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { fbaseGoogleSignIn } from "../../firebase/firebaseAuth";
import styles from "./Login.module.css";

library.add(fab);

function Login() {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isLoggedIn: false,
    });
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleLogin = user => {
        const newUser = {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            uid: user.uid,
            isLoggedIn: true,
        };
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        history.replace(from);
    };

    const handleSubmit = e => {
        e.preventDefault();
        alert("working");
    };

    return (
        <div className={styles.formContainer}>
            <div className={styles.formCard}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <br />
                    {newUser && (
                        <input
                            className="form-control"
                            name="name"
                            type="text"
                            placeholder="Your Name..."
                            required
                        />
                    )}
                    <br />
                    <input
                        className="form-control"
                        name="email"
                        type="text"
                        placeholder="Your Email..."
                        required
                    />
                    <br />
                    <input
                        className="form-control"
                        name="password"
                        type="text"
                        placeholder="Password..."
                        required
                    />
                    <br />
                    <input
                        className="btn btn-outline-success btn-block mb-3"
                        type="submit"
                        value={newUser ? "Sign Up" : " Sign In"}
                    />
                    <p className="forgot-password text-center">
                        {newUser
                            ? "Already registered ?"
                            : "Create an Account!!"}{" "}
                        <div
                            onClick={() => {
                                setNewUser(!newUser);
                            }}
                        >
                            <Button className="w-100 mt-3">
                                {newUser ? " Sign In" : "Sign Up"}
                            </Button>{" "}
                        </div>
                    </p>
                    <h3 className="text-warning">Or</h3>
                    <div class="d-grid gap-2">
                        <button
                            className="btn btn-danger"
                            onClick={async () => {
                                try {
                                    const data = await fbaseGoogleSignIn();
                                    handleLogin(data);
                                } catch (error) {
                                    console.log(error);
                                    alert(error.message);
                                }
                            }}
                        >
                            <FontAwesomeIcon
                                className="me-2"
                                icon={["fab", "google"]}
                            />
                            Continue With Google
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                alert("not implemented yet");
                            }}
                        >
                            <FontAwesomeIcon
                                className="me-2"
                                icon={["fab", "facebook"]}
                            />
                            Continue With Facebook
                        </button>
                        <button
                            className="btn btn-dark"
                            onClick={() => {
                                alert("not implemented yet");
                            }}
                        >
                            <FontAwesomeIcon
                                className="me-2"
                                icon={["fab", "github"]}
                            />
                            Continue With GitHub
                        </button>
                    </div>
                    <p></p>

                    {user.success && (
                        <p style={{ color: "green" }}>
                            Account {newUser ? "Created" : "Login"} Successfully
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default Login;
