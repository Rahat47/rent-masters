import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

library.add(fab);

function Login() {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isLoggedIn: false,
    });
    return (
        <div className={styles.formContainer}>
            <div className={styles.formCard}>
                <form>
                    <br />
                    {newUser && (
                        <input
                            className="form-control"
                            name="name"
                            type="text"
                            placeholder="Write your Name"
                        />
                    )}
                    <br />
                    <input
                        className="form-control"
                        name="email"
                        type="text"
                        placeholder="Write your Email"
                        required
                    />
                    <br />
                    <input
                        className="form-control"
                        name="password"
                        type="text"
                        placeholder="password"
                        required
                    />
                    <br />
                    <input
                        className="btn btn-primary btn-block"
                        type="submit"
                        value={newUser ? "Sign Up" : " Sign In"}
                    />
                    <p className="forgot-password text-center">
                        {newUser ? "Already registered" : "Create an Account"}{" "}
                        <div
                            onClick={() => {
                                setNewUser(!newUser);
                            }}
                        >
                            <Link className="">
                                {newUser ? " Sign In" : "Sign Up"}
                            </Link>{" "}
                        </div>
                    </p>
                    <h3 className="text-warning">Or</h3>
                    <div class="d-grid gap-2">
                        <button className="btn btn-danger">
                            <FontAwesomeIcon
                                className="me-2"
                                icon={["fab", "google"]}
                            />
                            Continue With Google
                        </button>
                        <button className="btn btn-primary">
                            <FontAwesomeIcon
                                className="me-2"
                                icon={["fab", "facebook"]}
                            />
                            Continue With Facebook
                        </button>
                        <button className="btn btn-dark">
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
