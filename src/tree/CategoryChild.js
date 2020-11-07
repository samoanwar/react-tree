import React from 'react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

const CategoryChild = (props) => {
    const { category, getChildren, Level = 0, onToggle } = props;
    
    return (
        <div className="category-child" style={{paddingLeft: 20+Level}}> 
            <div className="node-item">
                <span 
                    className={`toggle-icon ${category.isOpen ? "active" : "" }`}
                    onClick={() => onToggle(category)}> 
                    {
                        category.isOpen && category.children 
                        ? <FaChevronDown style={{fontSize: 10}} /> 
                        : category.children == null 
                        ? "-" 
                        : <FaChevronRight style={{fontSize: 10}}/>
                    } 
                </span> 
                { category.url } 
            </div>
            { 
                category.isOpen && getChildren(category) && getChildren(category).map((childElement, i) => (
                    <CategoryChild 
                        key={i}
                        {...props}
                        category={childElement}
                        nodeLevel={Level+1}
                    />
                ))
            } 
        </div>
    )
}

export default CategoryChild;