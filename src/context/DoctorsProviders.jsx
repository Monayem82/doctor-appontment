import React, { useEffect, useState } from 'react';
import { DoctorsContext } from './doctorsContext';

const DoctorsProviders = ({children}) => {
    const [doctorsData,setDoctorsData]=useState(null)

    useEffect(()=>{
        fetch('/public/doctorsLists.json').then(res=>res.json()).then(data=>setDoctorsData(data))
    },[])

    // console.log(doctorsData)

    const informations={
        doctorsData,
    }
    

    return (
        <DoctorsContext.Provider value={informations}>
            {children}
        </DoctorsContext.Provider>
    );
};

export default DoctorsProviders;