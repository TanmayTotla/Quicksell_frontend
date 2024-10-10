import React from 'react';
import Tag from './Tag';
import './styles/Card.css';

// Constants for icon paths
const iconPaths = {
    done: '/icons/status/Todo.svg',
    ellipsis: '/icons/ellipsis.svg'
};

const Card = ({ ticket, grouping, user }) => {
    // Renders user status based on grouping
    const renderUserStatus = () => {
        if (grouping !== 'user') {
            return (
                <div className='card-user'>
                    <div className='card-user-icon'>
                        {user.name.split(" ").map((n) => n[0].toUpperCase()).join("")}
                    </div>
                    <div className={`user-status ${user.available ? 'active-user' : 'inactive-user'}`}></div>
                </div>
            );
        }
        return null;
    };

    // Renders status image if not grouped by status
    const renderStatusImage = () => (
        grouping !== 'status' && (
            <img src={`/icons/status/${ticket.status}.svg`} alt="Status Icon" />
        )
    );

    // Renders priority icon if not grouped by priority
    const renderPriorityIcon = () => (
        grouping !== 'priority' && (
            <div className='card-footer-priority'>
                <img src={`/icons/priority/${ticket.priority}.svg`} alt="Priority Icon" />
            </div>
        )
    );

    return (
        <div className='card'>
            <div className='card-header'>
                <div className='card-id'>{ticket.id}</div>
                {renderUserStatus()}
            </div>
            <div className='card-body'>
                {renderStatusImage()}
                <span>{ticket.title}</span>
            </div>
            <div className='card-footer'>
                {renderPriorityIcon()}
                <div className='card-footer-tags'>
                    {ticket.tag.map((tag, index) => (
                        <Tag key={index} tag={tag} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
