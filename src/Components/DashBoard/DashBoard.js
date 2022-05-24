import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label for="dashboard-drawer" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side">
                    <label for="dashboard-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>My Profile</Link></li>
                        <li><Link to='/dashboard/cart'>My Cart</Link></li>
                        <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                        <li><Link to='/dashboard/addtool'>Add Tools</Link></li>
                        <li><Link to='/dashboard/manageorder'>Manage Orders</Link></li>
                        <li><Link to='/dashboard/managetools'>Manage Tools</Link></li>
                        <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;