import React from 'react';
import './Experts.css'

import experts1 from '../../../Images/experts/expert-1.jpg'
import experts2 from '../../../Images/experts/expert-2.jpg'
import experts3 from '../../../Images/experts/expert-3.jpg'
import experts4 from '../../../Images/experts/expert-4.jpg'
import experts5 from '../../../Images/experts/expert-5.jpg'
import experts6 from '../../../Images/experts/expert-6.png'

import Expert from '../Expert/Expert';

const experts = [
    { id:1, name:"Will Smith", img: experts1 },
    { id:1, name:"The Rock", img: experts2 },
    { id:1, name:"John Cena", img: experts3 },
    { id:1, name:"Ben Dissel", img: experts4 },
    { id:1, name:"Messi Vai", img: experts5 },
    { id:1, name:"Ronda", img: experts6 },
]


const Experts = () => {

    

    return (
        <div  id="experts" className='container'>
            <h2 className='experts-title text-primary m-3'>Our Experts</h2>
            <div className="experts-container">
            {
                experts.map(expert => <Expert
                key={expert.id}
                expert={expert}
                ></Expert>)
            }
            </div>
        </div>
    );
};

export default Experts;