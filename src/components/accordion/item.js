import React, { Component } from 'react';

class AccordionItem extends Component {
    render(){
        const { children, title } = this.props;
        
        return (
            <li className="accordion-item">
                <div className="collapsible-header">{title}</div>
                <div className="collapsible-body">{children}</div>
            </li>
        );
    }
}

export default AccordionItem;
