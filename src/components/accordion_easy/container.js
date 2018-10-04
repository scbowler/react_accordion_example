import React, { Component } from 'react';
import './accordion.css';

class AccordionContainer extends Component {
    render(){
        return (
            <ul className="accordion-container easy">
                { this.props.children }
            </ul>
        );
    }
}

export default AccordionContainer;
