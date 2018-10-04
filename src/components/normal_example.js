import React from 'react';
import Accordion from './accordion';
import AccordionItem from './accordion/item';

export default props => (
    <div>
        <p className="center description">The true accordion only allows one panel to be opened at a time. When a panel is opened any other panel that is open will close. Having the accordion function in this manner is a little trickier than just allowing any number of panels to be open at once. The state must be controlled from the AccordionContainer.</p>
        <Accordion>
            <AccordionItem title="Item 1">
                <h2>Item 1 content</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt maxime repellat saepe rem voluptate!</p>
                <h3>And More Stuff</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quasi officia repellat! Similique quibusdam enim magnam expedita repellat autem numquam.</p>
            </AccordionItem>
            <AccordionItem title="Item 2">
                <h2>Item 2 content</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt maxime repellat saepe rem voluptate!</p>
                <h3>And More Stuff</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quasi officia repellat! Similique quibusdam enim magnam expedita repellat autem numquam.</p>
            </AccordionItem>
            <AccordionItem title="Item 3">
                <h2>Item 3 content</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt maxime repellat saepe rem voluptate!</p>
                <h3>And More Stuff</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quasi officia repellat! Similique quibusdam enim magnam expedita repellat autem numquam.</p>
            </AccordionItem>
            <AccordionItem title="Item 4">
                <h2>Item 4 content</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt maxime repellat saepe rem voluptate!</p>
                <h3>And More Stuff</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quasi officia repellat! Similique quibusdam enim magnam expedita repellat autem numquam.</p>
            </AccordionItem>
            <AccordionItem title="Item 5">
                <h2>Item 5 content</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt maxime repellat saepe rem voluptate!</p>
                <h3>And More Stuff</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quasi officia repellat! Similique quibusdam enim magnam expedita repellat autem numquam.</p>
            </AccordionItem>
        </Accordion>
    </div>
);
