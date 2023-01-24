import React, { useEffect, useState } from 'react'
import HomeContext from './home-context'


function HomeProvider(props:any) {
    const [homeData, setHomeData] = useState([])


    async function fetchHomeData(){
        const data = await fetch("http://localhost:5500/admin/products/categories");
        const finalData = await data.json();
        setHomeData(finalData)
    }

    useEffect(()=>{
        fetchHomeData();
    }, [])
    
    

  return (
    <HomeContext.Provider value={homeData}>
      {props.children}
    </HomeContext.Provider>
  )
}

export default HomeProvider
