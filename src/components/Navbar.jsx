import React, { useState, useEffect, useRef } from 'react';
import './styles/Navbar.css';

const settingsIcon = '/icons/settings.svg';
const chevronIcon = '/icons/chevron-down.svg';

const Navbar = ({ grouping, ordering, setGrouping, setOrdering }) => {
    const [isOpen, setIsOpen] = useState(false); // Dropdown toggle state
    const buttonRef = useRef(null); // Ref for the button to toggle dropdown
    const dropdownRef = useRef(null); // Ref for the dropdown itself

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
                setIsOpen(true);
            } else if (buttonRef.current && buttonRef.current.contains(event.target)) {
                setIsOpen(!isOpen); // Toggle dropdown
            } else {
                setIsOpen(false); // Close dropdown
            }
        };
        window.addEventListener('click', handleOutsideClick);

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [isOpen]);

    // Helper to capitalize first letter of a string
    const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

    return (
        <div className='navbar'>
            <div className='display-container' ref={buttonRef}>
                {/* Display Button */}
                <div className='display'>
                    <img src={settingsIcon} alt='Settings' />
                    <span>Display</span>
                    <img src={chevronIcon} alt='Chevron down' />
                </div>

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className='display-settings' ref={dropdownRef}>
                        <div className='display-setting'>
                            <div>Grouping</div>
                            {/* Grouping Selector */}
                            <select
                                value={capitalize(grouping)}
                                onChange={(e) => {
                                    const selectedGroup = e.target.children[e.target.selectedIndex].getAttribute('data-id');
                                    setGrouping(selectedGroup);
                                }}
                            >
                                <option key='status' data-id='status'>Status</option>
                                <option key='user' data-id='user'>User</option>
                                <option key='priority' data-id='priority'>Priority</option>
                            </select>
                        </div>

                        <div className='display-setting'>
                            <div>Sorting</div>
                            {/* Sorting Selector */}
                            <select
                                value={capitalize(ordering)}
                                onChange={(e) => {
                                    const selectedOrder = e.target.children[e.target.selectedIndex].getAttribute('data-id');
                                    setOrdering(selectedOrder);
                                }}
                            >
                                <option key='title' data-id='title'>Title</option>
                                {grouping !== 'priority' && (
                                    <option key='priority' data-id='priority'>Priority</option>
                                )}
                            </select>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
