import React, { useEffect, useState } from 'react';
import './styles/Kanban.css';
import Navbar from './Navbar';
import Title from './Title';
import Card from './Card';
import Order from './Order';
import DATA from './getItems';

const Kanban = () => {
    const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
    const [ordering, setOrdering] = useState(localStorage.getItem('ordering') || 'title');

    // Store ordering preference in local storage
    useEffect(() => {
        localStorage.setItem('ordering', ordering);
    }, [ordering]);

    // Store grouping preference in local storage
    useEffect(() => {
        localStorage.setItem('grouping', grouping);
        if (grouping === 'priority') {
            setOrdering('title'); // Reset ordering when grouping by priority
        }
    }, [grouping]);

    return (
        <div className='page'>
            <Navbar grouping={grouping} ordering={ordering} setGrouping={setGrouping} setOrdering={setOrdering} />
            <div className='board'>
                {DATA[grouping].map(group => (
                    <div key={group.title} className='group-column'>
                        <Title 
                            title={group.title} 
                            grouping={grouping} 
                            count={group.tickets.length} 
                            available={grouping === 'user' ? DATA.users.find(user => user.name === group.title)?.available : null} 
                        />
                        {Order(group.tickets, ordering).map(item => (
                            <Card 
                                key={item.id} // Added key prop for list rendering
                                ticket={item} 
                                grouping={grouping} 
                                user={DATA.users.find(user => user.id === item.userId)} 
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Kanban;
