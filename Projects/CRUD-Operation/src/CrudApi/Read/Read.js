import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navigbar from "../../Task_1/Navigbar";

const Read = () => {
  const [apiData, setApiData] = useState([]);

  const autoNamed = () => {
    axios
      .get(`https://63a2e940471b38b2060026fc.mockapi.io/Crud`)
      .then((getData) => {
        // console.log(getData.data)
        setApiData(getData.data);
      });
  };
  useEffect(() => {
    autoNamed();
  }, []);

  const setId = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    // console.log(data);
  };

  const takeData =()=>{
    axios
      .get(`https://63a2e940471b38b2060026fc.mockapi.io/Crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  }

  const onDelete=(id)=>{
    axios.delete(`https://63a2e940471b38b2060026fc.mockapi.io/Crud/${id}`)
    .then(()=>{
      takeData();
    })
  }

  return (
    <div>
      <Navigbar />
      <h3>Read Api Data</h3>
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>phone</Table.HeaderCell>
              <Table.HeaderCell>Company</Table.HeaderCell>
              <Table.HeaderCell>Update</Table.HeaderCell>
              <Table.HeaderCell>Delete</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {apiData.map((data) => {
              return (
                <Table.Row>
                  <Table.Cell>{data.id}</Table.Cell>
                  <Table.Cell>{data.name}</Table.Cell>
                  <Table.Cell>{data.email}</Table.Cell>
                  <Table.Cell>{data.address}</Table.Cell>
                  <Table.Cell>{data.phone}</Table.Cell>
                  <Table.Cell>{data.company}</Table.Cell>
                  <Table.Cell>
                    <Link to="/update">
                      <button
                        style={{ color: "green" }}
                        onClick={() => {
                          setId(data);
                        }}
                      >
                        Update
                      </button>
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    {/* <Link to="/delete"> */}
                      <button style={{ color: "red" }} onClick={()=>onDelete(data.id)}>Delete</button>
                    {/* </Link> */}
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default Read;
