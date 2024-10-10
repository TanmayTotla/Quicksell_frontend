import React from 'react';
import './styles/Title.css';

const icons = {
    plus: '/icons/plus.svg',
    ellipsis: '/icons/ellipsis.svg',
    priority: {
        'No priority': 0,
        'Low': 1,
        'Medium': 2,
        'High': 3,
        'Urgent': 4,
    },
};

// Component for rendering user initials and availability indicator
const UserInfo = ({ title, available }) => (
    <div className='card-user'>
        <div className='card-user-icon'>
            {title.split(" ").map(n => n[0].toUpperCase()).join("")}
        </div>
        <div className={available ? 'active-user' : 'inactive-user'}></div>
    </div>
);

// Function to determine icon source based on grouping type
const getIconSrc = (grouping, title) => {
    switch (grouping) {
        case 'status':
            return `/icons/status/${title}.svg`;
        case 'priority':
            return `/icons/priority/${icons.priority[title]}.svg`;
        default:
            return null;
    }
};

// Main Title Component
const Title = ({ title, grouping, count, available = true }) => {
    return (
        <div className='card-title'>
            <div className='card-title-left'>
                {grouping === 'user' ? (
                    <UserInfo title={title} available={available} />
                ) : (
                    <>
                        {getIconSrc(grouping, title) && <img src={getIconSrc(grouping, title)} alt={`${grouping} icon`} />}
                        <span className='group-title'>{title}</span>
                    </>
                )}
                <span className='group-count'>{count}</span>
            </div>
            {count > 0 && (
                <div className='card-title-right'>
                    <button className='card-title-right-btn' aria-label="Add"><img src={icons.plus} alt="Add" /></button>
                    <button className='card-title-right-btn' aria-label="More options"><img src={icons.ellipsis} alt="More options" /></button>
                </div>
            )}
        </div>
    );
};

export default Title;
