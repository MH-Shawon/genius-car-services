import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import './Services.css'




const Services = () => {

    const [Services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='service-title'>Our Services</h1>
            <div className="services-container">
            {
                Services.map(service =>
                <Service key={service.id}
                service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;