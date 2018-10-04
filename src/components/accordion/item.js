import React, { Component } from 'react';

class AccordionItem extends Component {
    render(){
        const { children, isVisible, title, toggleVisible } = this.props;
        
        return (
            <li className="accordion-item" onClick={toggleVisible}>
                <div className="collapsible-header">{title} <i className={`material-icons ${isVisible && 'open'}`}>arrow_drop_down</i></div>
                <div className={`collapsible-body ${isVisible && 'visible'}`}>{children}</div>
            </li>
        );
    }
}

export default AccordionItem;
