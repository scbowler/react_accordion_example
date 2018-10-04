import React from 'react';
import Accordion from './accordion_easy';
import AccordionItem from './accordion_easy/item';

export default props => (
    <div>
        <p className="description center">The easier example allows any number of panels to be open at once. This technique is a little easier to create, each AccordionItem controls its own state.</p>
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
