import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import { getUser } from "../../components/Utils/Common";
import RequirementsPopup from "../../components/Popup/RequirementsPopup";
import Requirements from "./Requirements";
require('dotenv').config()
const newURL = process.env.REACT_APP_API_URL;
console.log("18",newURL)

export default function ManpowerPage() {
  const [openReqPopup, setOpenReqPopup] = useState(false);
  const user = getUser();

  const handleClickOpen = () => {
    setOpenReqPopup(true);
  };

  const handleClose = () => {
    setOpenReqPopup(false);
  };

  return (
    <div>
      <PageTitle title="Manpower Management" />
      {(() => {
        if (user[0].role === 'hod') {
          return (
            <div>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                onClick={handleClickOpen}
              >
                Change Requirements
              </Button>
              <br></br>
              <br></br>
            </div>
          )
        }
      })()}
      <Grid container spacing={4} style={{ padding: "1rem" }}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth="100%"
            style={{ padding: "2rem", fontSize: "1rem" }}
            component={Link} to="/manpower/expected"
          >
            Expected Manpower
          </Button>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth="100%"
            style={{ padding: "2rem", fontSize: "1rem" }}
            component={Link} to="/manpower/actual"
          >
            Actual Manpower
          </Button>
        </Grid>
        {/* <Grid item lg={4} md={4} sm={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth="100%"
            style={{ padding: "2rem", fontSize: "1rem" }}
            component={Link} to="/manpower/absent"
          >
            Absent Report
          </Button>
        </Grid> */}
        {/* <Grid item lg={4} md={4} sm={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth="100%"
            style={{ padding: "2rem", fontSize: "1rem" }}
            component={Link} to="/manpower/manpowerreport"
          >
            Report
          </Button>
        </Grid> */}
      </Grid>
      <RequirementsPopup
        openReqPopup={openReqPopup}
        onClose={handleClose}
      >
        <Requirements onSubmitClose={handleClose} />
      </RequirementsPopup>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}