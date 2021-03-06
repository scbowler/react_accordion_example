import React, { Component } from 'react';

class AccordionItem extends Component {
    state = {
        visible: false
    }
    
    toggleVisible = () => {
        this.setState({
            visible: !this.state.visible
        });
    }

    render(){
        const { children, title } = this.props;
        const { visible } = this.state;
        
        return (
            <li className="accordion-item" onClick={this.toggleVisible}>
                <div className="collapsible-header">{title} <i className={`material-icons ${visible && 'open'}`}>arrow_drop_down</i></div>
                <div className={`collapsible-body ${visible && 'visible'}`}>{children}</div>
            </li>
        );
    }
}

export default AccordionItem;
