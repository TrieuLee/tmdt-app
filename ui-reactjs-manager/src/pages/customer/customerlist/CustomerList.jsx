import React from 'react';
import './List.scss';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import Datatable from '../../../components/datatable/Datatable';
export default function CustomerList() {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Datatable />
            </div>
        </div>
    );
}
