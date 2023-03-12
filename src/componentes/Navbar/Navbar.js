import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <div className="navbar bg-blue-400">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">dEsI~vIBeS</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='products'>Products</Link></li>
                        {/* <li><Link to='dashboard'>Dashboard</Link></li> */}
                        {
                            user?.uid ? <>
                                <li><Link to='dashboard'>Dashboard</Link></li>
                                <li><button onClick={handleLogOut}>Log Out</button></li>
                            </>
                                :
                                <li><Link to='login'>Log In</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;