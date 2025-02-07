import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



// importing icons from hero-icons
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, UserIcon, ShoppingBagIcon, ChevronRightIcon, HeartIcon } from "@heroicons/react/24/outline";

import "./customNavbar.css";
import CategoriesNavbar from "./categoriesNavbar";

const CustomNavBar = () => {
    const { carList } = useSelector((state) => state.cart);

    // logic for the search bar
    const [searchTerm, setSearchTerm] = useState('');
    const [showResults, setShowResults] = useState(false);

    // logic for sidenav bar
    const [isSideNavOpen, setIsSideNavOpen] = useState(true);

    // mimick auth functionality (production purpose)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        setShowResults(event.target.value !== '');  // Show results window if input is not empty
    };

    const clearSearch = () => {
        setSearchTerm('');
        setShowResults(false);  // Hide results window
    };

    return (
        <div>
            <div className='navbar'>
                <div className="navbar-cont">
                    <div className="nav-div-left">
                        <button
                            onClick={() => setIsSideNavOpen(true)}
                        >
                            <Bars3Icon className="hero-nav-icon" />
                        </button>
                        
                        <div className="logo-div">
                            <Link to="/" className="logo-name">
                                <span>Stocko</span>
                            </Link>
                        </div>

                    </div>

                    {/* sidenavbar */}
                    <div className={`sidenav ${isSideNavOpen ? "open" : ""}`}>
                        <div className="sidenav-heading">
                            <span>Stocko</span>
                            <div className="close-nav-div" onClick={() => setIsSideNavOpen(false)}>
                                <XMarkIcon className="hero-nav-icon"/>
                            </div>
                        </div>
                        <div className="sidenav-content-div">
                            {/* auth/profile part */}
                            {isLoggedIn ? (
                                <div className="category-div">
                                    <div>
                                        <UserIcon className="hero-nav-icon"/>
                                        <span>My Account</span>
                                    </div>
                                    <ChevronRightIcon className="hero-nav-icon"/>
                                </div>
                            ) : (
                                <div className="category-div">
                                    <div>
                                        <UserIcon className="hero-nav-icon"/>
                                        <span>Sign up/Login</span>
                                    </div>
                                    <ChevronRightIcon className="hero-nav-icon"/>
                                </div>
                            )}
                            <div className="category-div">
                                <span>Category 1</span>
                                <ChevronRightIcon className="hero-nav-icon"/>
                            </div>
                            <div className="category-div">
                                <span>Category 1</span>
                                <ChevronRightIcon className="hero-nav-icon"/>
                            </div>
                            <div className="category-div">
                                <span>Category 1</span>
                                <ChevronRightIcon className="hero-nav-icon"/>
                            </div>
                        </div>
                    </div>

                    <div className="nav-div-center">
                        <div className="searchbar-div">
                            <MagnifyingGlassIcon className="hero-nav-icon no-cursor-pointer"/>

                            <form>
                                <input 
                                    type="search"
                                    value={searchTerm}
                                    onChange={handleInputChange}
                                    placeholder="Search"
                                    className="search-input"
                                />
                            </form>
                            {showResults && (
                                <div className="search-results-div">
                                    xdcsczdcadcdcddacaddacdd
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="nav-div-right">
                        <button className="search-btn">
                            <MagnifyingGlassIcon className="hero-nav-icon" />
                        </button>
                        <a href="/" className="nav-a-links user-icon">
                            <UserIcon className="hero-nav-icon" />
                        </a>
                        <a href="/" className="nav-a-links">
                            <HeartIcon className="hero-nav-icon" />
                        </a>
                        <a href="/" className="nav-a-links">
                            <ShoppingBagIcon className="hero-nav-icon" />
                        </a>
                    </div>
                </div>
            </div>

            {/* overlay */}
            {isSideNavOpen && <div className="sidenav-overlay" onClick={() => setIsSideNavOpen(false)}>overlay</div>}

            <CategoriesNavbar />
        </div>
    );
};

export default CustomNavBar;