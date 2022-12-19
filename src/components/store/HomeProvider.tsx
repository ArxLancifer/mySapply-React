import React from 'react'
import HomeContext from './home-context'


function HomeProvider(props:any) {


  return (
    <HomeContext.Provider value={"asd"}>
      {props.children}
    </HomeContext.Provider>
  )
}

export default HomeProvider
