import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../CustomHooks/useAdmin';
import auth from '../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    {
                        !admin && <> <li><Link to="/dashboard/addreviews">Add Reviews</Link></li>
                    <li><Link to="/dashboard/reviews">My Reviews</Link></li>
                    <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                        
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
    );
};

export default Dashboard;