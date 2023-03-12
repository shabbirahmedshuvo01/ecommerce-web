import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-blue-400">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">dEsI~vIBeS</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='login'>Log In</Link></li>
                        <li><Link to='products'>Products</Link></li>
                        <li><Link to='singup'>sing up</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;