import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Services/ServiceCard';
import Services from '../Services/Services';

const Allservices = () => {
    const services= useLoaderData()
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            {services.map(service=> 
            <ServiceCard
            key={service.id}
            data={service}
            >

            </ServiceCard>)}
        </div>
    );
};

export default Allservices;