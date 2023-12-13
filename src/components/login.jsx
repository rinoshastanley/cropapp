import React, { useState } from 'react';

function Login(props) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleLogin(userName, password);
    };

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                            <div className="card-body p-5 text-center">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="text"
                                                id="typeUserNameX"
                                                className="form-control form-control-lg"
                                                value={userName}
                                                onChange={handleUserNameChange}
                                            />
                                            <label className="form-label" htmlFor="typeUserNameX">
                                                UserName
                                            </label>
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="password"
                                                id="typePasswordX"
                                                className="form-control form-control-lg"
                                                value={password}
                                                onChange={handlePasswordChange}
                                            />
                                            <label className="form-label" htmlFor="typePasswordX">
                                                Password
                                            </label>
                                        </div>



                                        <button className="btn btn-outline-light btn-lg px-5" type="submit">
                                            Login
                                        </button>


                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
