import React, { useEffect, useState } from "react";
import Navigbar from "../Task_1/Navigbar";
import axios from "axios";
import "./Fetchapi.css";

const FetchApi = () => {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };
  useEffect(() => {
    apiGet();
  }, []);
  return (
    <div className="fetchapi">
      <Navigbar />
      <button onClick={apiGet}>Fetch API</button>
      <br />
      <br />
      <br />
      {/* <pre>{JSON.stringify(data,null,2)}</pre> */}

      <table class="table table-success" style={{ fontSize: "20px" }}>
        <thead style={{ fontSize: "20px" }}>
          <tr style={{ fontSize: "20px" }}>
            <th style={{ fontSize: "20px" }}>Id</th>
            <th style={{ fontSize: "20px" }}>Name</th>
            <th style={{ fontSize: "20px" }}>Email</th>
            <th style={{ fontSize: "20px" }}>Address</th>
            <th style={{ fontSize: "20px" }}>company</th>
          </tr>
        </thead>
        {data.map((item) => (
          <tbody style={{ fontSize: "20px" }}>
            <tr style={{ fontSize: "20px" }}>
              <td style={{ fontSize: "20px", textAlign: "-webkit-center" }}>
                {item.id}
              </td>
              <td style={{ fontSize: "20px", textAlign: "-webkit-center" }}>
                {item.name}
              </td>
              <td style={{ fontSize: "20px", textAlign: "-webkit-center" }}>
                {item.email}
              </td>
            
              <td style={{ fontSize: "20px", textAlign: "-webkit-center" }}>
                {item.address.street},{item.address.suite},{item.address.city},
                {item.address.zipcode},{item.address.geo.lat},{item.address.geo.lng}
              </td>
              
              <td style={{ fontSize: "20px", textAlign: "-webkit-center" }}>
                {item.company.name},{item.company.catchPhrase},{item.company.bs}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default FetchApi;


























// import React,{useEffect, useState} from 'react'
// import Navigbar from '../Task_1/Navigbar';
// import axios from 'axios';

// const FetchApi = () => {
//     const [responseData,setResponseData]=useState('');

//     useEffect(()=>{
//     axios({
//       "method": "GET",
//       "url":"https://jsonplaceholder.typicode.com/users",
//       "headers": ''.
//     })
//     .then((response) => {
//       setResponseData(response.data)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
//     },[setResponseData,responseData]);

//     // console.log(responseData)

//   return (
//     <div className='fetchapi'>
//         <Navigbar />

//       <main>
//         {responseData &&
//           <blockquote>
//             "{responseData && responseData.content}"
//               <small>{responseData  &&
//               responseData.name && responseData.email &&
//               responseData.company}</small>
//           </blockquote>
//         }
//       </main>
//         <button>CALL API</button>
//       {/* <pre>
//         <code>
//           {responseData && JSON.stringify(responseData,null,4)}
//         </code>
//       </pre> */}

//     </div>
//   )
// }

// export default FetchApi
