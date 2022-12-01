import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar';
import './dashboard.css';
import Navbar from '../navbar/navbar';
import Favourites from '../favourites/favourites';
import QuickAccess from '../quikaccess/QuickAccess';

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
                </section>
                <section className='storage'>
                    storage
                </section>
            </div>
        )
    }
}

export default Dashboard;
