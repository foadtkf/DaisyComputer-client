import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Tada from 'react-reveal/Tada';
import useAdmin from './../../CustomHooks/useAdmin';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const [isAdmin] = useAdmin(user);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
      };
      const userMenu = (
        <>
          <li className="hover-bordered">
            <Link to="/dashboard">My Profile</Link>
          </li>
          {!isAdmin && user && (
            <> <li><Link to="/dashboard/addreviews">Add Reviews</Link></li>
                    <li><Link to="/dashboard/reviews">My Reviews</Link></li>
                    <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                        
                        </>
          )}
          {isAdmin &&    (
            <>
                        <li><Link to="/dashboard/users">All Users</Link></li>
                        <li><Link to="/dashboard/addproducts">Add Products</Link></li>
                        <li><Link to="/dashboard/managetools">Manage Tools</Link></li>
                        <li><Link to="/dashboard/manageorders">Manage Orders</Link></li></>
          )
          }
          
        </>
      );
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        {
            user ? <li><button className="btn btn-ghost" onClick={logout}>Sign out</button></li>:<li><Link to="/login">Login</Link></li>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Tada>
                <a className="btn btn-ghost normal-case text-xl">Daisy Computers</a></Tada>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                    {
                        user?.photoURL && <img id="optionalstuff" height={50} src={user.photoURL}alt="" className="rounded-full w-11"/>
                    }
                </ul>
            </div>
            <div className="navbar-end  lg:hidden">
        {user && (
          <div>
            <Outlet></Outlet>
            <div className="flex-none gap-2">
              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-base-content"
                >
                  
                  {userMenu}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;