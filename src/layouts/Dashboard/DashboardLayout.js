import React from 'react';
import Sidebar from './Sidebar';
import {Outlet} from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className="flex flex-no-wrap">
            <Sidebar />
            <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
                <div className="w-full h-full">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;



