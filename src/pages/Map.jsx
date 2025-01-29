import React,{useState} from 'react'
import MainMap from './MainMap';
import SearchBox from './SearchBox';

const MyMap = () => {
    const [selectPosition,setSelectPosition]=useState(null);
    console.log(selectPosition);
  return (
    <div style={{
       
        display:"flex",
        flexDirection:"row",
         width:"100%",
         height:"100vh"   
    }}>
      
    <div style={{width:"50vw",height:"100vh"}}>
        <MainMap selectPosition={selectPosition}/>
    </div>

    <div style={{width:"50vw",borderLeft:"1px solid black"}}>
        <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
    </div>

    </div>
  )
}

export default MyMap;


