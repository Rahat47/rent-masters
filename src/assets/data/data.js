import React from 'react';
import hotelImg1 from '../images/Radisson-Blu.jpg';
import hotelImg2 from '../images/Radisson-Blu.jpg';
import hotelImg3 from '../images/Radisson-Blu.jpg';
import hotelImg4 from '../images/Radisson-Blu.jpg';
import hotelImg5 from '../images/Radisson-Blu.jpg';
import hotelImg6 from '../images/Radisson-Blu.jpg';

const data = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }
    const hotels = [
        {
            title: 'Radisson Blu Chattogram',
            img: hotelImg1,
            bed: 1,
            capacity: 1,
            bedType: 'Single',
            bathroom: 1,
            price: 1200
        },
        {
            title: 'Radisson Blu Chattogram',
            img: hotelImg2,
            bed: 1,
            capacity: 1,
            bedType: 'Single',
            bathroom: 1,
            price: 1200
        },
        {
            title: 'Radisson Blu Chattogram',
            img: hotelImg3,
            bed: 1,
            capacity: 1,
            bedType: 'Single',
            bathroom: 1,
            price: 1200
        },
        {
            title: 'Radisson Blu Chattogram',
            img: hotelImg4,
            bed: 1,
            capacity: 1,
            bedType: 'Single',
            bathroom: 1,
            price: 1200
        },
        {
            title: 'Radisson Blu Chattogram',
            img: hotelImg5,
            bed: 1,
            capacity: 1,
            bedType: 'Single',
            bathroom: 1,
            price: 1200
        },
        {
            title: 'Radisson Blu Chattogram',
            img: hotelImg6,
            bed: 1,
            capacity: 1,
            bedType: 'Single',
            bathroom: 1,
            price: 1200
        },
    
    ]
    return (
        <div style={style}>
            {
               //hotels.map(room => <Room key={room.bedType} room={room}></Room>)
            }
        </div>
    );
};

export default data;
