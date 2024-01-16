import React from 'react';

export default function LabGrid() {
    const handleRemoveClick = () => {
        // Display an alert message when the "Remove Comlab 1" button is clicked
        window.alert('Are you sure you want to remove Comlab 1?');
      };
    return (
        <>
            <div className="row row-cols-md-3 row-cols-xxl-4">
                {/* Card */}
                <div className="col">
                    <a href="#" className="card-link">
                    <div className="card lab-card">

                        <div className="filter">
                            <a className="icon" href="#" data-bs-toggle="dropdown">
                                <i className="bi bi-three-dots" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                <li className="dropdown-header text-start">
                                    <h6>OPTIONS</h6>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Edit
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item text-danger" href="#" onClick={handleRemoveClick}>
                                        Remove Comlab 1
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="card-body">
                            <div className="card-badge">
                                <span className="badge rounded-pill bg-success">Primary</span>
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="ps-0 mb-5">
                                    <h6>COMLAB 1</h6>
                                    <span className="card-subtitle small pt-2">COT Building</span>
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-12">
                                    <span className="text-muted small">Instructor</span>
                                </div>
                                <div className="col-12">
                                    <span>Mr. John Doe</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
                {/* End Card */}
            </div>
        </>
    );
}
