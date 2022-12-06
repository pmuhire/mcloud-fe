import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar';
import './dashboard.css';
import Navbar from '../navbar/navbar';
import Favourites from '../favourites/favourites';
import QuickAccess from '../quikaccess/QuickAccess';
import RecentUpload from '../recentUploads/RecentUpload';
import Storage from '../storage/Storage';
// import SimpleDialogDemo from '../notification/Notification';

export class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard'>
                <section className='aside'>
                    <Sidebar />
                </section>
                <section className='content'>
                   <Navbar />
                   <Favourites />
                   <QuickAccess />
                   <RecentUpload />
                </section>
                <section className='storage'>
                    <Storage />
                </section>
            </div>
        )
    }
}

export default Dashboard;
