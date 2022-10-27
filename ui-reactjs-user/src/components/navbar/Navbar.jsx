import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import { useParams } from 'react-router-dom';
import Records from '../../server.json';
import ProductLayout from '../productLayout/ProductLayout';

export default function Navbar() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { id } = useParams();
    console.log(id);
    if (id) {
        Records.find((item) => item.category.name === id);
    }
    const [items, setItems] = useState([]);

    // const categories = [...new Set(Records.map((item) => item.category.name))]
    const categories = Records.filter((item) => item.category.name === id);

    console.log(categories);
    return (
        <>
            <nav className="nav">
                <div className="navTop">
                    <div className="navItem">
                        <img src={PF + 'img/sneakers.png'} alt="" className="sidebarFriendImg" />
                    </div>
                    <div className="navItem">
                        <div className="search">
                            <input type="text" placeholder="Search..." className="searchInput" />
                            <img src={PF + 'icon/search.png'} alt="" width="20" height="20" className="searchIcon" />
                        </div>
                    </div>
                    <div className="navItem">
                        <span className="limitedOffer">Limited Offer!</span>
                    </div>
                </div>
                <div className="navBottom">
                    <Link to="/airforce" className="menuItem">
                        {/* <ProductLayout product= {Records.find(m=>m.category.name ===id)}/> */}
                        AIR FORCE
                    </Link>
                    <Link to="/jordan" className="menuItem">
                        JORDAN
                    </Link>
                    <Link to="/blazer" className="menuItem">
                        BLAZER
                    </Link>
                    <Link to="/hippie" className="menuItem">
                        HIPPIE
                    </Link>
                    <Link to="/crater" className="menuItem">
                        CRATER
                    </Link>
                </div>
            </nav>
        </>
    );
}
