import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar';
import './dashboard.css';

export class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard'>
                <section className='aside'>
                    <Sidebar />
                </section>
                <section className='content'>
                   content
                </section>
                <section className='storage'>
                    storage
                </section>
            </div>
        )
    }
}

export default Dashboard;
