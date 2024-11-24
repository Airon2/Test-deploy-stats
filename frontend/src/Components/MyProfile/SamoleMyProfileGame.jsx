import { useEffect } from "react";

 
 let SampleMyProfileGame = (props)=>{

    useEffect(()=>{
        fetch('')
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    },[])

    return(
        <div className="SampleMyProfileGame">
           
        </div>
    )
 }

 export default SampleMyProfileGame