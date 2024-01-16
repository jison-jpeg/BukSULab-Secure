import React from 'react'

export default function UserStats() {
    return (
        <>
            <div className="row">
                {/* Users Card */}
                <div className="col-xxl-4 col-md-4">
                    <div className="card info-card sales-card">
                        <div className="card-body">
                            <h5 className="card-title">
                                Users
                            </h5>
                            <div className="d-flex align-items-center">
                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                    <i className="bi bi-person" />
                                </div>
                                <div className="ps-3">
                                    <h6>145</h6>
                                    <span className="text-muted small pt-2 ps-1">total</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Users */}
                {/* Instructors Card */}
                <div className="col-xxl-4 col-md-4">
                    <div className="card info-card revenue-card">
                        <div className="card-body">
                            <h5 className="card-title">
                                Instructors
                            </h5>
                            <div className="d-flex align-items-center">
                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                    <i className="bi bi-person-workspace" />
                                </div>
                                <div className="ps-3">
                                    <h6>3,264</h6>
                                    <span className="text-muted small pt-2 ps-1">total</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Instructors Card */}
                {/* Laboratories Card */}
                <div className="col-xxl-4 col-md-4">
                    <div className="card info-card customers-card">
                        <div className="card-body">
                            <h5 className="card-title">
                                Laboratories
                            </h5>
                            <div className="d-flex align-items-center">
                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                    <i className="bi bi-view-stacked" />
                                </div>
                                <div className="ps-3">
                                    <h6>1244</h6>
                                    <span className="text-muted small pt-2 ps-1">total</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Laboratories Card */}
            </div>
        </>
    )
}
