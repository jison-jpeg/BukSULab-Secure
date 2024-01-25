import React from 'react'
import Header from '../components/layouts/Header'
import UserTable from '../components/tables/UserTable'
import SystemLogs from '../components/systemLogs/RecentActivity'

export default function Attendance() {
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

                <div className='greetings'>
                    <h1>Hello, <span>Jayson!</span> </h1>
                </div>
                

                {/* ======= Main Content ======= */}
                <section className="section dashboard">
                    <div className="row">

                        {/* Left side columns */}
                        <div className="col-lg-8">
                            
                            <UserTable />
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
