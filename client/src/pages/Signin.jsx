import React from 'react'

export default function Signin() {
    return (
        <>
            <main>
                <div className="container">
                    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                    <div className="d-flex justify-content-center py-4">
                                        <a
                                            href="index.html"
                                            className="logo d-flex align-items-center w-auto"
                                        >
                                            <img src="assets/img/logo.png" alt="" />
                                            <span className="d-none d-lg-block">BukSULab Secure</span>
                                        </a>
                                    </div>
                                    {/* End Logo */}
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="pt-4 pb-2">
                                                <h5 className="card-title text-center pb-0 fs-4">
                                                    Login to Your Account
                                                </h5>
                                                <p className="text-center small">
                                                    Enter your email &amp; password to login
                                                </p>
                                            </div>
                                            <form className="row g-3 needs-validation" noValidate="">
                                                <div className="col-12">
                                                    <label htmlFor="email" className="form-label">
                                                        Email
                                                    </label>
                                                    <div className="input-group has-validation">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            className="form-control"
                                                            id="email"
                                                            required
                                                        />
                                                        <div className="invalid-feedback">
                                                            Please enter your username.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="password" className="form-label">
                                                        Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        className="form-control"
                                                        id="password"
                                                        required
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please enter your password!
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="remember"
                                                            defaultValue="true"
                                                            id="rememberMe"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="rememberMe"
                                                        >
                                                            Remember me
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn btn-primary w-100" type="submit">
                                                        Login
                                                    </button>
                                                </div>
                                                <div className="col-12">
                                                    <p className="small mb-0">
                                                        Don't have account?{" "}
                                                        <a href="pages-register.html">Request now.</a>
                                                    </p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="credits">
                                        {/* All the links in the footer should remain intact. */}
                                        {/* You can delete the links only if you purchased the pro version. */}
                                        {/* Licensing information: https://bootstrapmade.com/license/ */}
                                        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
                                        Designed by{" "}
                                        <a href="https://bootstrapmade.com/">Troubleshooters</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            {/* End #main */}
            <a
                href="#"
                className="back-to-top d-flex align-items-center justify-content-center"
            >
                <i className="bi bi-arrow-up-short" />
            </a>
            {/* Vendor JS Files */}
            {/* Template Main JS File */}
        </>

    )
}
