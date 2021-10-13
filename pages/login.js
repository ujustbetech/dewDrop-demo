import React from 'react'
// import Image from 'next/image'


function login() {
    return (
        <div>
            <div className="login-wrapper">
                <div className="card card-container">
                    <img src="/images/logo.png" />

                    <form>

                        <ul>
                            <li>
                                <label htmlFor="username">Username</label>

                                <input
                                    type="text"
                                    className="form-usename"
                                    name="username"
                                    autoComplete="false"
                                />
                            </li>
                            <li>
                                <label htmlFor="password" >Password</label>

                                <input
                                    type="password"
                                    className="form-password"
                                    name="password"
                                />
                            </li>
                        </ul>





                        <input
                            type="text"
                            className="form-password"
                            name="email"
                        />

                        <button>


                            <span>Explore</span>

                        </button>

                    </form>



                </div>

            </div>
        </div>
    )
}
export default login;


