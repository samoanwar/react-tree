import React, { Component } from 'react';
import categoriesData from './category-tree-mock-data';
import './Tree.scss';
import CategoryChild from './CategoryChild';

class CategoriesTree extends Component {
    state = {
        categories: categoriesData,
    }

    renderCategories = () => {
        const { categories } = this.state;
        return Object.values(categories).filter(c => c.nodeLevel === 0)
    }

    getChildren = (item) => {
        return item.children;
    }

    onToggle = (child) => {       
        child.isOpen = !child.isOpen;
        this.forceUpdate();
    }

    render() {
        const treeItems = this.renderCategories();        
        
        return (
            <div className="wrapper bg-white shadow scrollable">
                {
                    treeItems && treeItems.map((item, i) => (
                        <CategoryChild
                            key={i}
                            category={item}
                            getChildren={(item) => this.getChildren(item)}
                            onToggle={(item, level) => this.onToggle(item, level)}
                        />
                    ))
                }
            </div>
        );
    }
}

export default CategoriesTree;