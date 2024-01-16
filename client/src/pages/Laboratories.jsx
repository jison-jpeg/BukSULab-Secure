import React from 'react'
import Header from '../components/layouts/Header'
import SystemLogs from '../components/systemLogs/RecentActivity'
import LabCards from '../components/cards/Lab'
import LabGrid from '../components/Laboratories/LabGrid'
import AddLaboratory from '../components/laboratories/modals/AddLaboratory'

export default function Laboratories() {
    return (
        <>
            <Header />
            {/* Main */}
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Blank Page</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item">Pages</li>
                            <li className="breadcrumb-item active">Blank</li>
                        </ol>
                    </nav>
                </div>
                {/* End Page Title */}

                <div className="mt-3 mb-3">
                   
                        {/* Vertically centered Modal */}
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#addModal"
                        >
                            Add Laboratory
                        </button>
                        <AddLaboratory />
                        {/* End Vertically centered Modal*/}
                   

                </div>


                {/* ======= Main Content ======= */}
                <section className="section dashboard">
                    <div className="row">

                        {/* Left side columns */}
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Computer Lab Management</h5>
                                    <LabGrid />
                                </div>
                            </div>
                            <LabCards />
                        </div>
                        {/* End Left side columns */}


                        {/* Right side columns */}
                        <div className="col-lg-4">
                            <SystemLogs />
                        </div>
                        {/* End Right side columns */}

                    </div>
                </section>
                {/* End Main Content */}

            </main>
            {/* End #main */}
        </>
    )
}
