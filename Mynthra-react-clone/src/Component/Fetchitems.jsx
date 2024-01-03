import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
const Fetchitems = ()=> {
     const fetchStatus =  useSelector(store=> store.fetchStatus)
    const dispatch = useDispatch();

     useEffect(()=>{
        if(fetchStatus.fetchDone) return;

        const controller = new AbortController();
        const signal = controller.signal;

        fetch("http:/localhost:8080/items", {signal})
        .then((response)=> response.json())
        .then(({items})=>{
            console.log("items is fecthtd",items)
        })
    
        return () =>{
            controller.abort();
        };
  },[fetchStatus]);




    return(<>
        <div>
        fetch done  : {fetchStatus.fetchDone}
        currently fetch : {fetchStatus.currentlyFetching}
        </div>
    </>)
}

export default Fetchitems
