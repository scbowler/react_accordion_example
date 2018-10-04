import React from 'react';

export default props => {
    const { children, isVisible, title, toggleVisible } = props;
    
    return (
        <li className="accordion-item" onClick={toggleVisible}>
            <div className="collapsible-header">{title} <i className={`material-icons ${isVisible && 'open'}`}>arrow_drop_down</i></div>
            <div className={`collapsible-body ${isVisible && 'visible'}`}>{children}</div>
        </li>
    );
}
