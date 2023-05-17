import React, { useState, useEffect } from "react";
import axios from "axios";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import { getUser } from "../../components/Utils/Common";
require('dotenv').config()
const newURL = process.env.REACT_APP_API_URL;
console.log("18",newURL)

function Location() {
  const [data, setData] = useState("");

  useEffect(() => {
    const user = getUser();
    const token = user[0].token;

    axios.post(newURL+'/emp/getLocationDetails', {
      token: token
    }).then((response) => {
      setData(response.data);
    });
  }, []);
  if (!data) {
    return("Loading...")
  }
  return (
    <div>
      <PageTitle title="Work Location" />
      <h2>Department: "{data[0].dept}"</h2>
      <h2>Sub Department: "{data[0].subdept}"</h2>
      <h2>Location: "{data[0].location}"</h2>
    </div>
  );
}

export default Location;