import React from 'react';
import './Navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Tìm kiếm..." />
                    <SearchOutlinedIcon sx={{ ml: 22 }} />
                </div>
                <div className="items">
                    <div className="item">
                        <img
                            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
