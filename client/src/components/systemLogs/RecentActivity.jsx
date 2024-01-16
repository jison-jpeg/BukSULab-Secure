import React from 'react'

export default function SystemLogs() {
    return (
        <>
            
                {/* Recent Activity */}
                <div className="card">
                    <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown">
                            <i className="bi bi-three-dots" />
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <li className="dropdown-header text-start">
                                <h6>Filter</h6>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Today
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    This Month
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    This Year
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            Recent Activity
                        </h5>
                        <div className="activity">
                            <div className="activity-item d-flex">
                                <div className="activite-label">32 min</div>
                                <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                                <div className="activity-content">
                                    Quia quae rerum{" "}
                                    <a href="#" className="fw-bold text-dark">
                                        explicabo officiis
                                    </a>{" "}
                                    beatae
                                </div>
                            </div>
                            {/* End activity item*/}
                            <div className="activity-item d-flex">
                                <div className="activite-label">56 min</div>
                                <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
                                <div className="activity-content">
                                    Voluptatem blanditiis blanditiis eveniet
                                </div>
                            </div>
                            {/* End activity item*/}
                            <div className="activity-item d-flex">
                                <div className="activite-label">2 hrs</div>
                                <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
                                <div className="activity-content">
                                    Voluptates corrupti molestias voluptatem
                                </div>
                            </div>
                            {/* End activity item*/}
                            <div className="activity-item d-flex">
                                <div className="activite-label">1 day</div>
                                <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
                                <div className="activity-content">
                                    Tempore autem saepe{" "}
                                    <a href="#" className="fw-bold text-dark">
                                        occaecati voluptatem
                                    </a>{" "}
                                    tempore
                                </div>
                            </div>
                            {/* End activity item*/}
                            <div className="activity-item d-flex">
                                <div className="activite-label">2 days</div>
                                <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
                                <div className="activity-content">
                                    Est sit eum reiciendis exercitationem
                                </div>
                            </div>
                            {/* End activity item*/}
                            <div className="activity-item d-flex">
                                <div className="activite-label">4 weeks</div>
                                <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
                                <div className="activity-content">
                                    Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                                </div>
                            </div>
                            {/* End activity item*/}
                        </div>
                    </div>
                </div>
                {/* End Recent Activity */}
            
        </>
    )
}
