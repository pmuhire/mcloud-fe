import React from 'react';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import Storage from '../storage/Storage';

const Starred = () => {
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

export default Starred
