import React from 'react'
import { useState } from 'react';

export default function Header() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleToggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
        document.body.classList.toggle('toggle-sidebar', !isSidebarOpen);
    };
    return (
        <>
            {/* ======= Header ======= */}
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <span className="logo d-flex align-items-center">
                        <img src="assets/img/logo.png" alt="BukSU logo" className="d-none d-xl-block" />
                        <span className="d-none d-xl-block">BukSULab Secure</span>
                    </span>
                    <i className="bi bi-list toggle-sidebar-btn" onClick={handleToggleSidebar} />
                </div>
                {/* End Logo */}
                <div className="search-bar">
                    <form
                        className="search-form d-flex align-items-center"
                        method="POST"
                        action="#"
                    >
                        <input
                            type="text"
                            name="query"
                            placeholder="Search"
                            title="Enter search keyword"
                        />
                        <button type="submit" title="Search">
                            <i className="bi bi-search" />
                        </button>
                    </form>
                </div>
                {/* End Search Bar */}
                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        <li className="nav-item d-block d-lg-none">
                            <a className="nav-link nav-icon search-bar-toggle " href="#">
                                <i className="bi bi-search" />
                            </a>
                        </li>
                        {/* End Search Icon*/}
                        <li className="nav-item dropdown">
                            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                                <i className="bi bi-bell" />
                                <span className="badge bg-primary badge-number">4</span>
                            </a>
                            {/* End Notification Icon */}
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                                <li className="dropdown-header">
                                    You have 4 new notifications
                                    <a href="#">
                                        <span className="badge rounded-pill bg-primary p-2 ms-2">
                                            View all
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="notification-item">
                                    <i className="bi bi-exclamation-circle text-warning" />
                                    <div>
                                        <h4>Lorem Ipsum</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>30 min. ago</p>
                                    </div>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="notification-item">
                                    <i className="bi bi-x-circle text-danger" />
                                    <div>
                                        <h4>Atque rerum nesciunt</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>1 hr. ago</p>
                                    </div>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="notification-item">
                                    <i className="bi bi-check-circle text-success" />
                                    <div>
                                        <h4>Sit rerum fuga</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>2 hrs. ago</p>
                                    </div>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="notification-item">
                                    <i className="bi bi-info-circle text-primary" />
                                    <div>
                                        <h4>Dicta reprehenderit</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>4 hrs. ago</p>
                                    </div>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="dropdown-footer">
                                    <a href="#">Show all notifications</a>
                                </li>
                            </ul>
                            {/* End Notification Dropdown Items */}
                        </li>
                        {/* End Notification Nav */}
                        <li className="nav-item dropdown">
                            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                                <i className="bi bi-chat-left-text" />
                                <span className="badge bg-success badge-number">3</span>
                            </a>
                            {/* End Messages Icon */}
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                                <li className="dropdown-header">
                                    You have 3 new messages
                                    <a href="#">
                                        <span className="badge rounded-pill bg-primary p-2 ms-2">
                                            View all
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="message-item">
                                    <a href="#">
                                        <img
                                            src="assets/img/messages-1.jpg"
                                            alt=""
                                            className="rounded-circle"
                                        />
                                        <div>
                                            <h4>Maria Hudson</h4>
                                            <p>
                                                Velit asperiores et ducimus soluta repudiandae labore
                                                officia est ut...
                                            </p>
                                            <p>4 hrs. ago</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="message-item">
                                    <a href="#">
                                        <img
                                            src="assets/img/messages-2.jpg"
                                            alt=""
                                            className="rounded-circle"
                                        />
                                        <div>
                                            <h4>Anna Nelson</h4>
                                            <p>
                                                Velit asperiores et ducimus soluta repudiandae labore
                                                officia est ut...
                                            </p>
                                            <p>6 hrs. ago</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="message-item">
                                    <a href="#">
                                        <img
                                            src="assets/img/messages-3.jpg"
                                            alt=""
                                            className="rounded-circle"
                                        />
                                        <div>
                                            <h4>David Muldon</h4>
                                            <p>
                                                Velit asperiores et ducimus soluta repudiandae labore
                                                officia est ut...
                                            </p>
                                            <p>8 hrs. ago</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="dropdown-footer">
                                    <a href="#">Show all messages</a>
                                </li>
                            </ul>
                            {/* End Messages Dropdown Items */}
                        </li>
                        {/* End Messages Nav */}
                        <li className="nav-item dropdown pe-3">
                            <a
                                className="nav-link nav-profile d-flex align-items-center pe-0"
                                href="#"
                                data-bs-toggle="dropdown"
                            >
                                <img
                                    src="assets/img/profile-img.jpg"
                                    alt="Profile"
                                    className="rounded-circle"
                                />
                                <span className="d-none d-md-block dropdown-toggle ps-2">
                                    K. Anderson
                                </span>
                            </a>
                            {/* End Profile Iamge Icon */}
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>Kevin Anderson</h6>
                                    <span>Web Designer</span>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item d-flex align-items-center"
                                        href="users-profile.html"
                                    >
                                        <i className="bi bi-person" />
                                        <span>My Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item d-flex align-items-center"
                                        href="users-profile.html"
                                    >
                                        <i className="bi bi-gear" />
                                        <span>Account Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item d-flex align-items-center"
                                        href="pages-faq.html"
                                    >
                                        <i className="bi bi-question-circle" />
                                        <span>Need Help?</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className="bi bi-box-arrow-right" />
                                        <span>Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                            {/* End Profile Dropdown Items */}
                        </li>
                        {/* End Profile Nav */}
                    </ul>
                </nav>
                {/* End Icons Navigation */}
            </header>
            {/* End Header */}
            {/* ======= Sidebar ======= */}
            <aside id="sidebar" className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>

                <i className="bi bi-x-lg toggle-sidebar-btn d-block d-sm-block d-md-block d-lg-block d-xl-none" onClick={handleToggleSidebar} />

                <div className="sidebar-header">
                    <a href="/dashboard">
                        <img src="/assets/img/logo.png" className="sidebar-logo" alt="" />
                    </a>
                </div>

                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-heading">Menu</li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/dashboard">
                            <i className="bi bi-grid" />
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/laboratories">
                            <i className="bi bi-view-stacked" />
                            <span>Room Mangement</span>
                        </a>
                    </li>
                    {/* End Room Mangement Nav */}
                    {/* End Dashboard Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/attendance">
                            <i className="bi bi-clipboard2-check" />
                            <span>Attendance Mangement</span>
                        </a>
                    </li>
                    {/* End Attendance Mangement Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/instructors">
                            <i className="bi bi-person-workspace" />
                            <span>Instructors Mangement</span>
                        </a>
                    </li>
                    {/* End Instructors Mangement Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/schedule">
                            <i className="bi bi-calendar2-week" />
                            <span>Class Schedule</span>
                        </a>
                    </li>
                    {/* End Class Schedule Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/reports">
                            <i className="bi bi-graph-up-arrow" />
                            <span>Reports</span>
                        </a>
                    </li>
                    {/* End Reports Nav */}
                    <li className="nav-heading">USER</li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/profile">
                            <i className="bi bi-person" />
                            <span>Profile</span>
                        </a>
                    </li>
                    {/* End Profile Page Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/contact">
                            <i className="bi bi-envelope" />
                            <span>Contact</span>
                        </a>
                    </li>
                    {/* End Contact Page Nav */}
                    <li className="nav-heading">System</li>
                    <li className="nav-item">
                        <a
                            className="nav-link collapsed"
                            data-bs-target="#charts-nav"
                            data-bs-toggle="collapse"
                            href="#"
                        >
                            <i className="bi bi-gear" />
                            <span>Settings</span>
                            <i className="bi bi-chevron-down ms-auto" />
                        </a>
                        <ul
                            id="charts-nav"
                            className="nav-content collapse "
                            data-bs-parent="#sidebar-nav"
                        >
                            <li>
                                <a href="/users">
                                    <i className="bi bi-circle" />
                                    <span>User Management</span>
                                </a>
                            </li>
                            <li>
                                <a href="/logs">
                                    <i className="bi bi-circle" />
                                    <span>Audit Logs</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* End Settings Nav */}
                </ul>
            </aside>
            {/* End Sidebar*/}
        </>

    )
}
