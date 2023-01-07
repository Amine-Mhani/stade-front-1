import React from 'react'
import AuthService from '../services/AuthService'
import Avatar from 'react-avatar';

function Navbar() {
	const username = AuthService.getCurrentUser().username;
  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg">
				
				<div className="navbar-collapse collapse">
					<ul className="navbar-nav navbar-align">
						<li className="nav-item dropdown">
							<a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                <i className="align-middle" data-feather="settings"></i>
              </a>
					<a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
					<Avatar name={username.toUpperCase()} size="40" round={true} /> <span className="text-dark">{username.toUpperCase()}</span>
              </a>
					<div className="dropdown-menu dropdown-menu-end">
						<a className="dropdown-item" ><i className="align-middle me-1" data-feather="user"></i> Profile</a>
						<div className="dropdown-divider"></div>
						<a className="dropdown-item" onClick={(e)=>{AuthService.logout()}}>Log out</a>
					</div>
				</li>
			</ul>
		</div>
	</nav>
  )
}

export default Navbar