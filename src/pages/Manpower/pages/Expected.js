import React, { useEffect, useState } from "react";
import axios from "axios";
// components
import { Button, Dialog, DialogActions, DialogTitle, FormControl, Grid, InputLabel, LinearProgress, Select } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Typography } from "../../../components/Wrappers/Wrappers";
import Widget from "../../../components/Widget/Widget";
import ViewEmployeesPopup from "../../../components/Popup/ViewEmployeesPopup";
import GraphicalManpowerPopup from "../../../components/Popup/GraphicalManpowerPopup";
import ExpectedEmployees from "./ExpectedEmployees";
import ExpectedGraphicalView from "./ExpectedGraphicalView";
import PageTitle from "../../../components/PageTitle/PageTitle";
import { makeStyles } from '@material-ui/core/styles';
import * as Icons from "@material-ui/icons";
require('dotenv').config()
const newURL = process.env.REACT_APP_API_URL;
console.log("18",newURL)

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  }
}));

function ExpectedManpower() {
  const classes = useStyles();

  const [shell_core, set_shell_core] = useState('');
  const [cold_box, set_cold_box] = useState('');
  const [arpa_900, set_arpa_900] = useState('');
  const [arpa_450, set_arpa_450] = useState('');
  const [w_b_q_3, set_w_b_q_3] = useState('');
  const [hand_moulding, set_hand_moulding] = useState('');
  const [melting, set_melting] = useState('');
  const [fettling, set_fettling] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [subdept, setSubDept] = useState("");

  const [DragMachineOp, setDragMachineOp] = useState("");
  const [DragMachineOpAir, setDragMachineOpAir] = useState("");
  const [DragMachineCoOp, setDragMachineCoOp] = useState("");
  const [CopeMachineOp, setCopeMachineOp] = useState("");
  const [CopeMachineCoOp, setCopeMachineCoOp] = useState("");
  const [CopeMachineOpAir, setCopeMachineOpAir] = useState("");
  const [DragMouldPaintingOp, setDragMouldPaintingOp] = useState("");
  const [CoreSettingOp, setCoreSettingOp] = useState("");
  const [CoreTranferFixtureOp, setCoreTranferFixtureOp] = useState("");
  const [BoxClosingOp, setBoxClosingOp] = useState("");
  const [VentingOp, setVentingOp] = useState("");
  const [CopeBoxPreprationOp, setCopeBoxPreprationOp] = useState("");
  const [ClampingOp, setClampingOp] = useState("");
  const [MoldBoxTransferOp, setMoldBoxTransferOp] = useState("");
  const [ClampAndPinRemovingOp, setClampAndPinRemovingOp] = useState("");
  const [PouringCraneOp, setPouringCraneOp] = useState("");
  const [PouringOp, setPouringOp] = useState("");
  const [KOutCraneOp, setKOutCraneOp] = useState("");
  const [KOutCraneCoOp, setKOutCraneCoOp] = useState("");
  const [KOutOp, setKOutOp] = useState("");
  const [CastingTransferOp, setCastingTransferOp] = useState("");
  const [EmptyBoxTrasferOp, setEmptyBoxTrasferOp] = useState("");
  const [SandPlantOp, setSandPlantOp] = useState("");
  const [SandPlantCoOp, setSandPlantCoOp] = useState("");
  const [NewSandAddOp, setNewSandAddOp] = useState("");
  const [CompactibilityCheckingOp, setCompactibilityCheckingOp] = useState("");

  const [open, setOpen] = useState(false);
  const [openEmployeesPopup, setOpenEmployeesPopup] = useState(false);
  const [openGraphicalManpowerPopup, setGraphicalManpowerPopup] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const GraphicalPopup = () => {
    setOpen(false);
    setGraphicalManpowerPopup(true);
  };

  const EmployeesPopup = () => {
    setOpen(false);
    setOpenEmployeesPopup(true);
  };

  const handleClose = () => {
    setOpenEmployeesPopup(false);
    setGraphicalManpowerPopup(false);
  };


  const [reqs_shell_core, req_shell_core] = useState('');
  const [reqs_cold_box, req_cold_box] = useState('');
  const [reqs_arpa_900, req_arpa_900] = useState('');
  const [reqs_arpa_450, req_arpa_450] = useState('');
  const [reqs_w_b_q_3, req_w_b_q_3] = useState('');
  const [reqs_hand_moulding, req_hand_moulding] = useState('');
  const [reqs_melting, req_melting] = useState('');
  const [reqs_fettling, req_fettling] = useState('');
  const [reqs_DragMachineOp, req_DragMachineOp] = useState("");
  const [reqs_DragMachineOpAir, req_DragMachineOpAir] = useState("");
  const [reqs_DragMachineCoOp, req_DragMachineCoOp] = useState("");
  const [reqs_CopeMachineOp, req_CopeMachineOp] = useState("");
  const [reqs_CopeMachineCoOp, req_CopeMachineCoOp] = useState("");
  const [reqs_CopeMachineOpAir, req_CopeMachineOpAir] = useState("");
  const [reqs_DragMouldPaintingOp, req_DragMouldPaintingOp] = useState("");
  const [reqs_CoreSettingOp, req_CoreSettingOp] = useState("");
  const [reqs_CoreTranferFixtureOp, req_CoreTranferFixtureOp] = useState("");
  const [reqs_BoxClosingOp, req_BoxClosingOp] = useState("");
  const [reqs_VentingOp, req_VentingOp] = useState("");
  const [reqs_CopeBoxPreprationOp, req_CopeBoxPreprationOp] = useState("");
  const [reqs_ClampingOp, req_ClampingOp] = useState("");
  const [reqs_MoldBoxTransferOp, req_MoldBoxTransferOp] = useState("");
  const [reqs_ClampAndPinRemovingOp, req_ClampAndPinRemovingOp] = useState("");
  const [reqs_PouringCraneOp, req_PouringCraneOp] = useState("");
  const [reqs_PouringOp, req_PouringOp] = useState("");
  const [reqs_KOutCraneOp, req_KOutCraneOp] = useState("");
  const [reqs_KOutCraneCoOp, req_KOutCraneCoOp] = useState("");
  const [reqs_KOutOp, req_KOutOp] = useState("");
  const [reqs_CastingTransferOp, req_CastingTransferOp] = useState("");
  const [reqs_EmptyBoxTrasferOp, req_EmptyBoxTrasferOp] = useState("");
  const [reqs_SandPlantOp, req_SandPlantOp] = useState("");
  const [reqs_SandPlantCoOp, req_SandPlantCoOp] = useState("");
  const [reqs_NewSandAddOp, req_NewSandAddOp] = useState("");
  const [reqs_CompactibilityCheckingOp, req_CompactibilityCheckingOp] = useState("");

  var date = new Date();
  var hour = date.getHours();
  var getShift;

  if (hour >= 8 && hour <= 15) { getShift = "Shift I"; } else if (hour >= 16 && hour <= 23) { getShift = "Shift II"; }
  else { getShift = "Shift III"; }

  const [shift, setShift] = useState(getShift);

  useEffect(() => {
    axios.get(newURL+'/req/shell_core').then((response) => { req_shell_core(response.data[0].requirement); });
    axios.get(newURL+'/req/cold_box').then((response) => { req_cold_box(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900').then((response) => { req_arpa_900(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_DragMachineOp').then((response) => { req_DragMachineOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_DragMachineOpAir').then((response) => { req_DragMachineOpAir(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_DragMachineCoOp').then((response) => { req_DragMachineCoOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_CopeMachineOp').then((response) => { req_CopeMachineOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_CopeMachineCoOp').then((response) => { req_CopeMachineCoOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_CopeMachineOpAir').then((response) => { req_CopeMachineOpAir(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_DragMouldPaintingOp').then((response) => { req_DragMouldPaintingOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_CoreSettingOp').then((response) => { req_CoreSettingOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_CoreTranferFixtureOp').then((response) => { req_CoreTranferFixtureOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_BoxClosingOp').then((response) => { req_BoxClosingOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_VentingOp').then((response) => { req_VentingOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_CopeBoxPreprationOp').then((response) => { req_CopeBoxPreprationOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_ClampingOp').then((response) => { req_ClampingOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_MoldBoxTransferOp').then((response) => { req_MoldBoxTransferOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_ClampAndPinRemovingOp').then((response) => { req_ClampAndPinRemovingOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_PouringCraneOp').then((response) => { req_PouringCraneOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_PouringOp').then((response) => { req_PouringOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_KOutCraneOp').then((response) => { req_KOutCraneOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_KOutCraneCoOp').then((response) => { req_KOutCraneCoOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_KOutOp').then((response) => { req_KOutOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_CastingTransferOp').then((response) => { req_CastingTransferOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_EmptyBoxTrasferOp').then((response) => { req_EmptyBoxTrasferOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_SandPlantOp').then((response) => { req_SandPlantOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_SandPlantCoOp').then((response) => { req_SandPlantCoOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_NewSandAddOp').then((response) => { req_NewSandAddOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_900_CompactibilityCheckingOp').then((response) => { req_CompactibilityCheckingOp(response.data[0].requirement); });
    axios.get(newURL+'/req/arpa_450').then((response) => { req_arpa_450(response.data[0].requirement); });
    axios.get(newURL+'/req/w_b_q_3').then((response) => { req_w_b_q_3(response.data[0].requirement); });
    axios.get(newURL+'/req/hand_moulding').then((response) => { req_hand_moulding(response.data[0].requirement); });
    axios.get(newURL+'/req/melting').then((response) => { req_melting(response.data[0].requirement); });
    axios.get(newURL+'/req/fettling').then((response) => { req_fettling(response.data[0].requirement); });

    axios.post(newURL+'/mp/getAllocationData_shell_core', { verified: 'NO', shift: shift }).then((response) => { set_shell_core(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_cold_box', { verified: 'NO', shift: shift }).then((response) => { set_cold_box(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900', { verified: 'NO', shift: shift }).then((response) => { set_arpa_900(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_DragMachineOp', { verified: 'NO', shift: shift }).then((response) => { setDragMachineOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_DragMachineOpAir', { verified: 'NO', shift: shift }).then((response) => { setDragMachineOpAir(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_DragMachineCoOp', { verified: 'NO', shift: shift }).then((response) => { setDragMachineCoOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CopeMachineOp', { verified: 'NO', shift: shift }).then((response) => { setCopeMachineOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CopeMachineCoOp', { verified: 'NO', shift: shift }).then((response) => { setCopeMachineCoOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CopeMachineOpAir', { verified: 'NO', shift: shift }).then((response) => { setCopeMachineOpAir(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_DragMouldPaintingOp', { verified: 'NO', shift: shift }).then((response) => { setDragMouldPaintingOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CoreSettingOp', { verified: 'NO', shift: shift }).then((response) => { setCoreSettingOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CoreTranferFixtureOp', { verified: 'NO', shift: shift }).then((response) => { setCoreTranferFixtureOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_BoxClosingOp', { verified: 'NO', shift: shift }).then((response) => { setBoxClosingOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_VentingOp', { verified: 'NO', shift: shift }).then((response) => { setVentingOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CopeBoxPreprationOp', { verified: 'NO', shift: shift }).then((response) => { setCopeBoxPreprationOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_ClampingOp', { verified: 'NO', shift: shift }).then((response) => { setClampingOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_MoldBoxTransferOp', { verified: 'NO', shift: shift }).then((response) => { setMoldBoxTransferOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_ClampAndPinRemovingOp', { verified: 'NO', shift: shift }).then((response) => { setClampAndPinRemovingOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_PouringCraneOp', { verified: 'NO', shift: shift }).then((response) => { setPouringCraneOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_PouringOp', { verified: 'NO', shift: shift }).then((response) => { setPouringOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_KOutCraneOp', { verified: 'NO', shift: shift }).then((response) => { setKOutCraneOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_KOutCraneCoOp', { verified: 'NO', shift: shift }).then((response) => { setKOutCraneCoOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_KOutOp', { verified: 'NO', shift: shift }).then((response) => { setKOutOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CastingTransferOp', { verified: 'NO', shift: shift }).then((response) => { setCastingTransferOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_EmptyBoxTrasferOp', { verified: 'NO', shift: shift }).then((response) => { setEmptyBoxTrasferOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_SandPlantOp', { verified: 'NO', shift: shift }).then((response) => { setSandPlantOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_SandPlantCoOp', { verified: 'NO', shift: shift }).then((response) => { setSandPlantCoOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_NewSandAddOp', { verified: 'NO', shift: shift }).then((response) => { setNewSandAddOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CompactibilityCheckingOp', { verified: 'NO', shift: shift }).then((response) => { setCompactibilityCheckingOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_450', { verified: 'NO', shift: shift }).then((response) => { set_arpa_450(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_w_b_q_3', { verified: 'NO', shift: shift }).then((response) => { set_w_b_q_3(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_hand_moulding', { verified: 'NO', shift: shift }).then((response) => { set_hand_moulding(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_melting', { verified: 'NO', shift: shift }).then((response) => { set_melting(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_fettling', { verified: 'NO', shift: shift }).then((response) => { set_fettling(response.data[0].count); setLoading(false); });
  }, [shift]);

  var requirements = parseInt(reqs_shell_core) + parseInt(reqs_cold_box) + parseInt(reqs_arpa_900) + parseInt(reqs_arpa_450) + parseInt(reqs_w_b_q_3) + parseInt(reqs_hand_moulding) + parseInt(reqs_melting) + parseInt(reqs_fettling);
  const availability = parseInt(shell_core) + parseInt(cold_box) + parseInt(arpa_900) + parseInt(arpa_450) + parseInt(w_b_q_3) + parseInt(hand_moulding) + parseInt(melting) + parseInt(fettling);

  function refreshPage(e) {
    e.preventDefault();
    window.location.reload(false);
  }

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={4}>
          <PageTitle title="Expected Manpower" />
        </Grid>
        <Grid item xs={8} sm={2}>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Select Shift</InputLabel>
            <Select
              native
              value={shift}
              onChange={(event) => { setShift(event.target.value); }}
              style={{ width: '90%' }}
            >
              <option aria-label="None" value="" />
              <option value="Shift I">Shift I</option>
              <option value="Shift II">Shift II</option>
              <option value="Shift III">Shift III</option>
              <option value="Odd Shift">Odd Shift</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4} sm={1}>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            onClick={refreshPage}
          >
            <Icons.Refresh />
          </Button>
        </Grid>
      </Grid>
      <br></br>
      <Grid container spacing={2} style={{ textAlign: 'center' }}>
        <Grid item xs={12}>
          <Widget title="Overall Manpower" >
            {/* <div style={{ fontSize: "1.3rem", textAlign: 'left', padding: "5px", fontFamily: "Times New Roman" }}>
              L3 :
              <LinearProgress variant="determinate" value={77} color="primary" />
            </div>
            <div style={{ fontSize: "1.3rem", textAlign: 'left', padding: "5px", fontFamily: "Times New Roman" }}>
              L2 :
              <LinearProgress variant="determinate" value={88} color="secondary" />
            </div>
            <div style={{ fontSize: "1.3rem", textAlign: 'left', padding: "5px", fontFamily: "Times New Roman" }}>
              L1 :
              <LinearProgress variant="determinate" value={60} color="primary" />
            </div> */}
            <div style={{ fontSize: "1.3rem", textAlign: 'left', padding: "5px", fontFamily: "Times New Roman" }}>
              Requirement : {requirements}
              <LinearProgress variant="determinate" value={100} color="secondary" />
            </div>
            <div style={{ fontSize: "1.3rem", textAlign: 'left', padding: "5px", fontFamily: "Times New Roman" }}>
              Availability : {availability}
              <LinearProgress variant="determinate" value={availability / 2} color="primary" />
            </div>
            <div style={{ fontSize: "1.3rem", textAlign: 'left', padding: "5px", fontFamily: "Times New Roman" }}>
              Difference : {requirements - availability}
              <LinearProgress variant="determinate" value={(requirements - availability) / 2 - 3} color="secondary" />
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <div style={{ fontSize: "1.5rem", textAlign: "center", margin: 0 }}> Core Shop </div>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Card style={{ backgroundColor: "#405bf6", color: "#ffff" }} onClick={() => { handleClickOpen(); setSubDept('Shell Core'); }}>
            <CardActionArea>
              <CardContent>
                <Typography style={{ fontSize: "1.5rem" }}>
                  Shell Core
                </Typography>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Requirement
                    </Typography>
                    <Typography size="md">{reqs_shell_core}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Availability
                    </Typography>
                    <Typography size="md">{shell_core}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Difference
                    </Typography>
                    <Typography size="md">{reqs_shell_core - shell_core}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid >
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Card style={{ backgroundColor: "#405bf6", color: "#ffff" }} onClick={() => { handleClickOpen(); setSubDept('Cold Box'); }} >
            <CardActionArea>
              <CardContent>
                <Typography style={{ fontSize: "1.5rem" }}>
                  Cold Box
                </Typography>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Requirement
                    </Typography>
                    <Typography size="md">{reqs_cold_box}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Availability
                    </Typography>
                    <Typography size="md">{cold_box}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Difference
                    </Typography>
                    <Typography size="md">{reqs_cold_box - cold_box}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid >
        <Grid item xs={12}>
          <div style={{ fontSize: "1.5rem", textAlign: "center", margin: 0 }}> Moulding </div>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Card style={{ backgroundColor: "#ff8129", color: "#ffff" }} onClick={() => { handleClickOpen(); setSubDept('Arpa 900'); }}>
            <CardActionArea>
              <CardContent>
                <Typography style={{ fontSize: "1.5rem" }}>
                  Arpa 900
                </Typography>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Requirement
                    </Typography>
                    <Typography size="md">{reqs_arpa_900}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Availability
                    </Typography>
                    <Typography size="md">{arpa_900}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Difference
                    </Typography>
                    <Typography size="md">{reqs_arpa_900 - arpa_900}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardContent>
                <Typography style={{ fontSize: "1.5rem" }}>
                  Work Station
                </Typography>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      Work Station
                    </Typography>
                    <Typography size="md">DragMachineOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      Requirement
                    </Typography>
                    <Typography size="md">{reqs_DragMachineOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      Availability
                    </Typography>
                    <Typography size="md">{DragMachineOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      Difference
                    </Typography>
                    <Typography size="md">{reqs_DragMachineOp - DragMachineOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">DragMachineOpAir</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_DragMachineOpAir}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{DragMachineOpAir}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_DragMachineOpAir - DragMachineOpAir}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">DragMachineCoOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_DragMachineCoOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{DragMachineCoOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_DragMachineCoOp - DragMachineCoOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">CopeMachineOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_CopeMachineOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{CopeMachineOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_CopeMachineOp - CopeMachineOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">CopeMachineCoOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_CopeMachineCoOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{CopeMachineCoOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_CopeMachineCoOp - CopeMachineCoOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">CopeMachineOpAir</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_CopeMachineOpAir}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{CopeMachineOpAir}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_CopeMachineOpAir - CopeMachineOpAir}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">DragMouldPaintingOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_DragMouldPaintingOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{DragMouldPaintingOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_DragMouldPaintingOp - DragMouldPaintingOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">CoreSettingOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_CoreSettingOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{CoreSettingOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_CoreSettingOp - CoreSettingOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">CoreTranferFixtureOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_CoreTranferFixtureOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{CoreTranferFixtureOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_CoreTranferFixtureOp - CoreTranferFixtureOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">BoxClosingOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_BoxClosingOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{BoxClosingOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_BoxClosingOp - BoxClosingOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">VentingOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_VentingOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{VentingOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_VentingOp - VentingOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">CopeBoxPreprationOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_CopeBoxPreprationOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{CopeBoxPreprationOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_CopeBoxPreprationOp - CopeBoxPreprationOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
            
              
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid >
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Card style={{ backgroundColor: "#ff8129", color: "#ffff" }} onClick={() => { handleClickOpen(); setSubDept('Arpa 900'); }}>
            <CardActionArea>
              <CardContent>
                <Typography style={{ fontSize: "1.5rem" }}>
                  Work Station
                </Typography>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      Work Station
                    </Typography>
                    <Typography size="md"></Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      Requirement
                    </Typography>
                    <Typography size="md"></Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      Availability
                    </Typography>
                    <Typography size="md"></Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      Difference
                    </Typography>
                    <Typography size="md"></Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">ClampingOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_ClampingOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{ClampingOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_ClampingOp - ClampingOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                {/* 63468e9bdde3473ff1ba38ef */}
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">MoldBoxTransferOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_MoldBoxTransferOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{MoldBoxTransferOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_MoldBoxTransferOp - MoldBoxTransferOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">Clamp&PinRemovingOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_ClampAndPinRemovingOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{ClampAndPinRemovingOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_ClampAndPinRemovingOp - ClampAndPinRemovingOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">PouringCraneOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_PouringCraneOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{PouringCraneOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_PouringCraneOp - PouringCraneOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">PouringOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_PouringOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{PouringOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_PouringOp - PouringOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">KOutCraneOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_KOutCraneOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{KOutCraneOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_KOutCraneOp - KOutCraneOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">KOutCraneCoOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_KOutCraneCoOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{KOutCraneCoOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_KOutCraneCoOp - KOutCraneCoOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">KOutOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_KOutOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{KOutOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_KOutOp - KOutOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">CastingTransferOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_CastingTransferOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{CastingTransferOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_CastingTransferOp - CastingTransferOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">EmptyBoxTrasferOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_EmptyBoxTrasferOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{EmptyBoxTrasferOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_EmptyBoxTrasferOp - EmptyBoxTrasferOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">SandPlantOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_SandPlantOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{SandPlantOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_SandPlantOp - SandPlantOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">SandPlantCoOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_SandPlantCoOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{SandPlantCoOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_SandPlantCoOp - SandPlantCoOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">NewSandAddOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_NewSandAddOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{NewSandAddOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_NewSandAddOp - NewSandAddOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">CompactibilityCheckingOp</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{reqs_CompactibilityCheckingOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="md">{CompactibilityCheckingOp}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="md">{reqs_CompactibilityCheckingOp - CompactibilityCheckingOp}</Typography>
                  </Grid>
                </Grid>
                <br></br>
            
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid >
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Card style={{ backgroundColor: "#ff8129", color: "#ffff" }} onClick={() => { handleClickOpen(); setSubDept('Arpa 450'); }} >
            <CardActionArea>
              <CardContent>
                <Typography style={{ fontSize: "1.5rem" }}>
                  Arpa 450
                </Typography>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Requirement
                    </Typography>
                    <Typography size="md">{reqs_arpa_450}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Availability
                    </Typography>
                    <Typography size="md">{arpa_450}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Difference
                    </Typography>
                    <Typography size="md">{reqs_arpa_450 - arpa_450}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid >
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Card style={{ backgroundColor: "#ff8129", color: "#ffff" }} onClick={() => { handleClickOpen(); setSubDept('W B Q 3'); }} >
            <CardActionArea>
              <CardContent>
                <Typography style={{ fontSize: "1.5rem" }}>
                  W.B.Q.3
                </Typography>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Requirement
                    </Typography>
                    <Typography size="md">{reqs_w_b_q_3}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Availability
                    </Typography>
                    <Typography size="md">{w_b_q_3}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Difference
                    </Typography>
                    <Typography size="md">{reqs_w_b_q_3 - w_b_q_3}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid >
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Card style={{ backgroundColor: "#ff8129", color: "#ffff" }} onClick={() => { handleClickOpen(); setSubDept('Hand Moulding'); }} >
            <CardActionArea>
              <CardContent>
                <Typography style={{ fontSize: "1.5rem" }}>
                  Hand Moulding
                </Typography>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Requirement
                    </Typography>
                    <Typography size="md">{reqs_hand_moulding}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Availability
                    </Typography>
                    <Typography size="md">{hand_moulding}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Difference
                    </Typography>
                    <Typography size="md">{reqs_hand_moulding - hand_moulding}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid >
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Grid item xs={12}>
            <div style={{ fontSize: "1.5rem", textAlign: "center", margin: 0 }}> Melting </div>
          </Grid>
          <br></br>
          <Card style={{ backgroundColor: "#405bf6", color: "#ffff" }} onClick={() => { handleClickOpen(); setSubDept('Melting'); }} >
            <CardActionArea>
              <CardContent>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Requirement
                    </Typography>
                    <Typography size="md">{reqs_melting}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Availability
                    </Typography>
                    <Typography size="md">{melting}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Difference
                    </Typography>
                    <Typography size="md">{reqs_melting - melting}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid >
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Grid item xs={12}>
            <div style={{ fontSize: "1.5rem", textAlign: "center", margin: 0 }}> Fettling </div>
          </Grid>
          <br></br>
          <Card style={{ backgroundColor: "#ff8129", color: "#ffff" }} onClick={() => { handleClickOpen(); setSubDept('Fettling'); }} >
            <CardActionArea>
              <CardContent>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Requirement
                    </Typography>
                    <Typography size="md">{reqs_fettling}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Availability
                    </Typography>
                    <Typography size="md">{fettling}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Difference
                    </Typography>
                    <Typography size="md">{reqs_fettling - fettling}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid >
      </Grid>
      <div>
        <Dialog open={open} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
            <div style={{ display: 'flex' }}>
              <div style={{ flexGrow: 1, fontWeight: 'bold', paddingTop: '5px' }}>View Details</div>
              <Button
                style={{
                  fontSize: "16px",
                  minWidth: "8px",
                  maxHeight: "35px"
                }}
                color="secondary"
                variant="contained"
                onClick={handleClickClose}
              >
                <b> X </b>
              </Button>
            </div>
          </DialogTitle>
          <DialogActions>
            <Button onClick={EmployeesPopup} color="primary">
              All Employee List
            </Button>
            <Button onClick={GraphicalPopup} color="primary">
              Graphical View
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <ViewEmployeesPopup
        openEmployeesPopup={openEmployeesPopup}
        onClose={handleClose}
      >
        <Button
          color='primary'
          variant='contained'
        >
          Absent Report
        </Button>
        <br></br>
        <br></br>
        <ExpectedEmployees
          subdept={subdept}
          shift={shift}
        />
      </ViewEmployeesPopup>
      <GraphicalManpowerPopup
        openGraphicalManpowerPopup={openGraphicalManpowerPopup}
        onClose={handleClose}
      >
        <ExpectedGraphicalView
          subdeptManpower={subdept}
          shift={shift}
        />
      </GraphicalManpowerPopup>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default ExpectedManpower;