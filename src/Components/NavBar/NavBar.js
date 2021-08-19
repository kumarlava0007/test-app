import React from 'react';

function NavBar(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-dark bg-dark">
                    <a href="#" className="navbar-brand">Geekster</a>
                    <ul className="nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white">Counter</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white">User</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white">Post</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;