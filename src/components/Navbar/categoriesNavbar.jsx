import { useState } from "react";
import { Link } from "react-router-dom";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import "./categoriesNavbar.css";

const CategoriesNavbar = () => {
    // categories window logic
    const [categoryDropdown, setCategoryDropdown] = useState(null);

    // array of categories and their sub-categories
    const categories = [
        { id: 1, name: 'Electronics', subcategories: ['Phones', 'Laptops', 'Cameras'] },
        { id: 2, name: 'Fashion', subcategories: ['Men', 'Women', 'Children'] },
        { id: 3, name: 'Home', subcategories: ['Furniture', 'Decor', 'Kitchenware'] },
        { id: 4, name: 'Books', subcategories: null }, // no dropdown
    ];

    const handleMouseEnter = (category) => {
        if (category.subcategories) {
            setCategoryDropdown(category);
        }
    };

    const handleMouseLeave = () => {
        setCategoryDropdown(null);
    };

    return (
        <div className="sub-navbar">
            <nav className="nav-categories">
                <ul className="nav-ul">
                    {categories.map(category => (
                        <li 
                            className="nav-li"
                            key={category.id}
                            onMouseEnter={() => handleMouseEnter(category)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link 
                                className="nav-link" 
                            >
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            
            {categoryDropdown && categoryDropdown.subcategories && (
                <div 
                    className="category-window"
                    onMouseEnter={() => setCategoryDropdown(categoryDropdown)}
                    onMouseLeave={handleMouseLeave}
                >
                    <ul>
                        {categoryDropdown.subcategories.map((sub, index) => (
                            <li className="subcategory-li" key={index}>
                                <Link className="subcategory-link">{sub}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </div>
    );
};

export default CategoriesNavbar;