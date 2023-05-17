import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import PageTitle from '../../../components/PageTitle/PageTitle';
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import axios from 'axios';
import { getUser } from '../../../components/Utils/Common';
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

function PendingAllocation() {
  const [view, setView] = useState([]);

  useEffect(() => {
    const user = getUser();
    if (user[0].role === 'contractor') {
      const contractor = user[0].contractor;
      axios.post(newURL+'/emp/pendingAllocation', {
        contractor: contractor
      }).then((response) => {
        setView(response.data);
      });
    } else {
      axios.post(newURL+'/emp/allocation')
        .then((response) => {
          setView(response.data);
        });
    }
  }, []);
  return (
    <div>
      <PageTitle title="Pending Allocation" />
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          title="Pending Allocation"
          columns={[
            { title: 'Token No.', field: 'token' },
            { title: 'Name', field: 'name', width: "40%" },
            { title: 'Contractor', field: 'contractor' },
            { title: 'Join Date', field: 'joindate' },
            { title: 'End Date', field: 'enddate' },
            { title: 'Mobile No.', field: 'mobile1' },
            { title: 'Department', field: 'dept' }
          ]}
          fontSize='12px'
          data={view}
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
              padding: '10px',
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
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

export default PendingAllocation;