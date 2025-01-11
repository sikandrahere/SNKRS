import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";
import { navItems } from '../../components/assets/allProduct';
import './Navbar.css';
import { productContext } from '../../context//ProductProvider';
import { CiMenuBurger } from "react-icons/ci";


const Navbar = () => {
    const { totalItems, quary, handleSearch } = useContext(productContext)
    const navigate = useNavigate();

    const onSearchChange = (e) => {
        handleSearch(e.target.value);
    };

    return (
        <div className="menu-bar">
            <nav>

                {/* left menu */}
                <div className="left-menu-section">
                    <div className='menu-icon'>
                        <CiMenuBurger />
                    </div>
                    <ul className="left-menu">
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name} className={item.subItems ? 'has-dropdown' : ''}>
                                    <span onClick={() => navigate(item.slug)} >
                                        {item.name}
                                    </span>
                                    {item.subItems && (
                                        <ul className="dropdown-menu">
                                            {item.subItems.map((subItem) => (
                                                <li 
                                                 key={subItem.name} onClick={() => navigate(subItem.slug)} className='subItems-list'>
                                                    {subItem.name}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ) : null
                        )}
                    </ul>
                </div>

                {/*logo  */}
                <Link className="logo">S N K R S</Link>

                {/* right menu */}
                <ul className="right-menu">
                    <li>
                        <div className='search-box'>
                            <input
                                type="text"
                                className='search'
                                value={quary}
                                onChange={onSearchChange}
                                placeholder='Search'
                            />
                        </div>
                    </li>
                    <li>
                        <Link to={'/favourite'} >
                            <FaRegHeart />
                        </Link>
                    </li>
                    <li className='cart-icon'>
                        <Link to={'/cart'} >
                            <IoBagHandleOutline />
                            <p>{totalItems()}</p>
                        </Link>
                    </li>
                </ul>
                <div>
                    <Link to={'/login'}>
                        <FaRegUser className='profile' />
                    </Link>
                </div>
            </nav>


        </div>
    );
};

export default Navbar;