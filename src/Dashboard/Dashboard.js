import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../CustomHooks/useAdmin';
import auth from '../firebase.init';
import Flash from 'react-reveal/Flash';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <Flash>
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to="/dashboard/">My Profile</Link></li>
                    {
                        !admin && <> <li><Link to="/dashboard/addreviews">Add Reviews</Link></li>
                    <li><Link to="/dashboard/reviews">My Reviews</Link></li>
                    <li><Link to="/dashboard/myorders">My Orders</Link></li>
                        
                        </>
                    }
                    { admin && <>
                        <li><Link to="/dashboard/users">All Users</Link></li>
                        <li><Link to="/dashboard/addproducts">Add Products</Link></li>
                        <li><Link to="/dashboard/managetools">Manage Tools</Link></li>
                        <li><Link to="/dashboard/manageorders">Manage Orders</Link></li></>


                    }
                </ul>

            </div>
        </div>
        </Flash>
    );
};

export default Dashboard;