import { DashboardSidebar } from '@/Components/dashboard/DashboardSidebar';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='flex gap-2 min-h-screen'>
            <DashboardSidebar></DashboardSidebar>
            <div>{children}</div>
        </div>
    );
};

export default DashboardLayout;