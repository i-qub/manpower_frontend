import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import ConRegiPopup from "../../components/Popup/ConRegiPopup";
import ConRegistration from "../../pages/contractor/conregistration/ConRegistration";
import PageTitle from "../../components/PageTitle/PageTitle";
import MaterialTable from 'material-table';
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import axios from 'axios';
import ViewEmployees from "./ViewEmployees";
import ViewEmployeesPopup from "../../components/Popup/ViewEmployeesPopup";
require('dotenv').config()
const newURL = process.env.REACT_APP_API_URL;
console.log("18",newURL)


const theme = createTheme({
  overrides: {
    MuiTableCell: {
      root: {
        paddingTop: 10,
        paddingBottom: 10,
        "&:last-child": {
          paddingRight: 5
        }
      }
    }
  }
});

function Contractor() {
  const [openRegiPopup, setOpenRegiPopup] = useState(false);
  const [openEmployeesPopup, setOpenEmployeesPopup] = useState(false);
  const [contractor, setContractor] = useState("");
  const [token, setToken] = useState("");

  const handleOpen = () => {
    setOpenEmployeesPopup(true);
  };

  const handleClickClose = () => {
    setOpenEmployeesPopup(false);
  };

  const handleClickOpen = () => {
    setOpenRegiPopup(true);
  };

  const handleClose = () => {
    setOpenRegiPopup(false);
  };

  const [view, setView] = useState([]);

  useEffect(() => {
    axios.get(newURL+'/con/viewContractor')
      .then((response) => {
        setView(response.data);
      });
  }, []);

  const [deactivationDate, setDeactivationDate] = useState("");
  const [openDeactivation, setOpenDeactivation] = useState(false);

  const handleClickOpenDeactivation = () => {
    setOpenDeactivation(true);
  };

  const handleClickCloseDeactivation = () => {
    setOpenDeactivation(false);
  };

  const deactivate = () => {
    axios.post(newURL+'/emp/deactivateEmp', {
      token: token,
      deactivationDate: deactivationDate
    })
    window.location.reload();
  }

  return (
    <div>
      <PageTitle title="Contractor Management" />
      <Button
        variant="contained"
        size="medium"
        color="primary"
        onClick={handleClickOpen}
      >
        New Contractor
      </Button>
      <br></br>
      <br></br>
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          title="Contractor List"
          columns={[
            { title: 'Token No.', field: 'token' },
            { title: 'Name', field: 'name', width: "40%" },
            { title: 'Company Name', field: 'contractor' },
            { title: 'Mobile No.', field: 'mobile1' },
            { title: 'Department', field: 'dept' }
          ]}
          fontSize='12px'
          data={view}
          onRowClick={(event, rowData) => {
            const contractor = rowData.contractor;
            setContractor(contractor);
            handleOpen(true);
          }}
          actions={[
            {
              tooltip: 'Deactivate User',
              onClick: (event, rowData) => {
                event.stopPropagation();
                setToken(rowData.token);
                handleClickOpenDeactivation();
              }
            }
          ]}
          components={{
            Action: props => (
              <Button
                onClick={(event) => props.action.onClick(event, props.data)}
                color="primary"
                variant="contained"
                style={{ textTransform: 'none' }}
                size="small"
              >
                Deactivate
              </Button>
            ),
          }}
          options={{
            pageSize: 10,
            exportAllData: true,
            exportButton: true,
            selection: false,
            sorting: false,
            headerStyle: {
              backgroundColor: '#262626',
              color: '#FFF',
              fontSize: '14px',
              padding: '15px',
              paddingLeft: '15px',
              zIndex: '1'
            },
            rowStyle: {
              fontSize: 14,
              backgroundColor: '#f3f3f3',
              paging: 'none'
            },
            actionsColumnIndex: -1
          }}
        />
      </MuiThemeProvider>
      <div>
        <Dialog open={openDeactivation} onClose={handleClickCloseDeactivation} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Select Deactivation Date</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="deactivationDate"
              type="date"
              fullWidth
              onChange={(event) => { setDeactivationDate(event.target.value); }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={deactivate} color="primary">
              Deactivate
            </Button>
            <Button onClick={handleClickCloseDeactivation} color="secondary">
              Cancle
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <ViewEmployeesPopup
        openEmployeesPopup={openEmployeesPopup}
        contractor={contractor}
        onClose={handleClickClose}
      >
        <ViewEmployees
          onSubmitClose={handleClose}
          contractor={contractor}
        />
      </ViewEmployeesPopup>
      <ConRegiPopup
        openRegiPopup={openRegiPopup}
        onClose={handleClose}
      >
        <ConRegistration onSubmitClose={handleClose} />
      </ConRegiPopup>
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

export default Contractor;