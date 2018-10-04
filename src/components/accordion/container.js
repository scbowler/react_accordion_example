import React, { Component } from 'react';
import './accordion.css';

class AccordionContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: this.setAllFalse()
        }
    }

    setAllFalse(){
        return this.props.children.map( () => ({visible: false}));
    }

    toggleVisible(index){
        const items = this.setAllFalse();
        
        items[index].visible = !this.state.items[index].visible;

        this.setState({items});
    }

    render(){
        const childrenElements = React.Children.map(this.props.children, (child, index) => (
            React.cloneElement(child, {
                toggleVisible: () => this.toggleVisible(index),
                isVisible: this.state.items[index].visible
            })
        ));

        return (
            <ul className="accordion-container">
                { childrenElements }
            </ul>
        );
    }
}

export default AccordionContainer;
