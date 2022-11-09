import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const data= useLoaderData()

    return (
        <div>
            <h2>service detail : {data.title}</h2>
        </div>
    );
};

export default ServiceDetail;