import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Services/ServiceCard';
import Services from '../Services/Services';

const Allservices = () => {
    // const services= useLoaderData()
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("https://yoga-coach-server.vercel.app/allservices")
          .then((res) => res.json())
          .then((data) => {setServices(data)
          setLoading(false)
          });
      }, []);

      if (loading) {
        return (<div className='mx-auto my-auto'>
            <button className="btn btn-square loading"></button>
        </div>)
      }
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