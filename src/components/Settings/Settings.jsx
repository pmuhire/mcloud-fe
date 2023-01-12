import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Storage from '../storage/Storage';

const Settings = () => {
    return (
        <div className='dashboard'>
            <section className='aside'>
                <Sidebar />
            </section>
            <section className='content'>

            </section>
            <section className='storage'>
                <Storage />
            </section>
        </div>
    )
}

export default Settings
