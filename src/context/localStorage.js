  import { ToastContainer, toast } from 'react-toastify';

const getLocalStorageData=()=>{
    const getlocalData=localStorage.getItem('appointment')
    if(getlocalData){
        const localData=JSON.parse(getlocalData)
        return localData;
    }
    return []
    
}

const addLocalStorageData=(id)=>{
    const getlocalData=getLocalStorageData()
    if(getlocalData.includes(id)){
        return toast('Already Booked')
    }
    getlocalData.push(id)
    const serializedData = JSON.stringify(getlocalData);

    // CRUCIAL FIX: Save the updated array back to localStorage
    localStorage.setItem('appointment', serializedData);
}

const removeLocalStorageData = (id) => {
    const currentData = getLocalStorageData();
    
    // Filter out the ID to be removed
    if(currentData.includes(id)){
        const updatedData = currentData.filter(appointmentId => appointmentId !== id);
        localStorage.setItem('appointment', JSON.stringify(updatedData));
    }
    

    // Save the filtered array back to localStorage
    
}


export {addLocalStorageData ,getLocalStorageData,removeLocalStorageData}