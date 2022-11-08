import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])

    return (
        <div>
            {services.map(service=>
            <ServiceCard
            key={service._id}
            data={service}
            ></ServiceCard>)}
        </div>
    );
};

export default Services;