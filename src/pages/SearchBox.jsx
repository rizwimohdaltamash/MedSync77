// // import { polygon } from 'leaflet';
// import React,{useState} from 'react'
// import Button from 'react-bootstrap/Button';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// import locationFinderImage from '../images/location-pointer.png';

// const NOMINATIM_BASE_URL="https://nominatim.openstreetmap.org/search?";
// // const params={
// //     q:'',
// //     format:'json',
// //     addressdetails:'addressdetails'
// // }

// const SearchBox = (props) => {
//     const {setSelectPosition}=props;
//     const [searchText,setSearchText]=useState('');
//     const [listPlace,setListPlace]=useState([]);    

//   return (


//     <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
//         <div style={{display:"flex"}}>
//         <FloatingLabel
//         controlId="floatingInput"
//         label="Enter a place"
//         className="mb-3" style={{ width: '100%',padding:'7px' }} 
       
//       >
//         <Form.Control type="text" placeholder="name@example.com"  value={searchText} 
//         onChange={(event)=>{
//             setSearchText(event.target.value);
//         }}   />
//       </FloatingLabel>

//         <div style={{flex:1}}>
        
//         </div>
//         <div style={{display:"flex",alignItems:"center",padding:"0px 20px"}}>
//         <Button variant="dark" onClick={()=>{
//             //Search
//             const params={
//                 q:searchText,
//                 format:'json',
//                 addressdetails:1,
//                 polygon_geojson:0
//             };
//             const queryString=new URLSearchParams(params).toString();
//             const requestOptions={
//                 method:"GET",
//                 redirect:"follow"
//             };
//             fetch(`${NOMINATIM_BASE_URL}${queryString}`,requestOptions)
//             .then((response)=>response.text())
//             .then((result)=>{
//                 console.log(JSON.parse(result));
//                 setListPlace(JSON.parse(result));
//             })
//             .catch((err)=>console.log("err:",err));
//         }}>
//             Search</Button>
//         </div>
//     </div>
//     <div>
//     <List component="nav" aria-label='main mailbox folders'>
//         {listPlace.map((item)=>{
//          return(
//             <div key={item?.place_id}>
//            <ListItem button onClick={()=>{
//             setSelectPosition(item);
//            }} >

//             <ListItemIcon >
//                 <img src={locationFinderImage} alt="Placeholder" style={{width:38,height:38}}/>
//             </ListItemIcon>
           
//            <ListItemText primary={item?.display_name}/>

//            </ListItem>
//            <Divider />
          
//             </div>
//          );
       
//         })}  

//     </List>
    

//     </div>
// </div>
//   )
// }

// export default SearchBox;

import React, { useState } from 'react';
import locationFinderImage from '../images/location-pointer.png';

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

const SearchBox = (props) => {
  const { setSelectPosition } = props;
  const [searchText, setSearchText] = useState('');
  const [listPlace, setListPlace] = useState([]);

  const handleSearch = () => {
    const params = {
      q: searchText,
      format: 'json',
      addressdetails: 1,
      polygon_geojson: 0
    };
    const queryString = new URLSearchParams(params).toString();
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setListPlace(JSON.parse(result));
      })
      .catch((err) => console.log("err:", err));
  };

  return (
    <div style={styles.container}>
      <div style={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Enter a place"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.searchButton}>
          Search
        </button>
      </div>

      <div style={styles.listWrapper}>
        {listPlace.map((item) => (
          <div key={item?.place_id} style={styles.listItem}>
            <div
              onClick={() => setSelectPosition(item)}
              style={styles.listItemContent}
            >
              <img src={locationFinderImage} alt="Location" style={styles.icon} />
              <span style={styles.itemText}>{item?.display_name}</span>
            </div>
            <hr style={styles.divider} />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "10px"
  },
  searchWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px"
  },
  input: {
    width: "85%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "16px",
    outline: "none"
  },
  searchButton: {
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginLeft: "10px"
  },
  listWrapper: {
    marginTop: "20px"
  },
  listItem: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    cursor: "pointer"
  },
  listItemContent: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    width: "30px",
    height: "30px",
    marginRight: "10px"
  },
  itemText: {
    fontSize: "14px",
    color: "#333"
  },
  divider: {
    border: "0",
    borderTop: "1px solid #ddd",
    marginTop: "10px"
  }
};

export default SearchBox;
