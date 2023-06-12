import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';
// components
import { Button, Dialog, DialogActions, DialogContent,DialogTitle, FormControl, Grid, InputLabel, LinearProgress, Select } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Typography } from "../../../components/Wrappers/Wrappers";
import Widget from "../../../components/Widget/Widget";
import ViewEmployeesPopup from "../../../components/Popup/ViewEmployeesPopup";
import GraphicalManpowerPopup from "../../../components/Popup/GraphicalManpowerPopup";
import ViewDetailsPopup from '../../../components/Popup/ViewDetailsPopup';
import ExpectedEmployees from "./ExpectedEmployees";
import ExpectedGraphicalView from "./ExpectedGraphicalView";
import PageTitle from "../../../components/PageTitle/PageTitle";
import { makeStyles } from '@material-ui/core/styles';
import * as Icons from "@material-ui/icons";

require('dotenv').config()
const newURL = process.env.REACT_APP_API_URL;

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  }
}));

function ExpectedManpower(props) {
  const classes = useStyles();
  const [openDetailsPopup, setEmployeeDetailsPopup] = useState(false);
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

  const [DragMachineOp_avl, setDragMachineOp_avl] = useState("");
  const [DragMachineOpAir_avl, setDragMachineOpAir_avl] = useState("");
  const [DragMachineCoOp_avl, setDragMachineCoOp_avl] = useState("");
  const [CopeMachineOp_avl, setCopeMachineOp_avl] = useState("");
  const [CopeMachineCoOp_avl, setCopeMachineCoOp_avl] = useState("");
  const [CopeMachineOpAir_avl, setCopeMachineOpAir_avl] = useState("");
  const [DragMouldPaintingOp_avl, setDragMouldPaintingOp_avl] = useState("");
  const [CoreSettingOp_avl, setCoreSettingOp_avl] = useState("");
  const [CoreTranferFixtureOp_avl, setCoreTranferFixtureOp_avl] = useState("");
  const [BoxClosingOp_avl, setBoxClosingOp_avl] = useState("");
  const [VentingOp_avl, setVentingOp_avl] = useState("");
  const [CopeBoxPreprationOp_avl, setCopeBoxPreprationOp_avl] = useState("");
  const [ClampingOp_avl, setClampingOp_avl] = useState("");
  const [MoldBoxTransferOp_avl, setMoldBoxTransferOp_avl] = useState("");
  const [ClampAndPinRemovingOp_avl, setClampAndPinRemovingOp_avl] = useState("");
  const [PouringCraneOp_avl, setPouringCraneOp_avl] = useState("");
  const [PouringOp_avl, setPouringOp_avl] = useState("");
  const [KOutCraneOp_avl, setKOutCraneOp_avl] = useState("");
  const [KOutCraneCoOp_avl, setKOutCraneCoOp_avl] = useState("");
  const [KOutOp_avl, setKOutOp_avl] = useState("");
  const [CastingTransferOp_avl, setCastingTransferOp_avl] = useState("");
  const [EmptyBoxTrasferOp_avl, setEmptyBoxTrasferOp_avl] = useState("");
  const [SandPlantOp_avl, setSandPlantOp_avl] = useState("");
  const [SandPlantCoOp_avl, setSandPlantCoOp_avl] = useState("");
  const [NewSandAddOp_avl, setNewSandAddOp_avl] = useState("");
  const [CompactibilityCheckingOp_avl, setCompactibilityCheckingOp_avl] = useState("");


  const [DragMachineOp_data, setDragMachineOp_data] = useState("");
  const [DragMachineOpAir_data, setDragMachineOpAir_data] = useState("");
  const [DragMachineCoOp_data, setDragMachineCoOp_data] = useState("");
  const [CopeMachineOp_data, setCopeMachineOp_data] = useState("");
  const [CopeMachineCoOp_data, setCopeMachineCoOp_data] = useState("");
  const [CopeMachineOpAir_data, setCopeMachineOpAir_data] = useState("");
  const [DragMouldPaintingOp_data, setDragMouldPaintingOp_data] = useState("");
  const [CoreSettingOp_data, setCoreSettingOp_data] = useState("");
  const [CoreTranferFixtureOp_data, setCoreTranferFixtureOp_data] = useState("");
  const [BoxClosingOp_data, setBoxClosingOp_data] = useState("");
  const [VentingOp_data, setVentingOp_data] = useState("");
  const [CopeBoxPreprationOp_data, setCopeBoxPreprationOp_data] = useState("");
  const [ClampingOp_data, setClampingOp_data] = useState("");
  const [MoldBoxTransferOp_data, setMoldBoxTransferOp_data] = useState("");
  const [ClampAndPinRemovingOp_data, setClampAndPinRemovingOp_data] = useState("");
  const [PouringCraneOp_data, setPouringCraneOp_data] = useState("");
  const [PouringOp_data, setPouringOp_data] = useState("");
  const [KOutCraneOp_data, setKOutCraneOp_data] = useState("");
  const [KOutCraneCoOp_data, setKOutCraneCoOp_data] = useState("");
  const [KOutOp_data, setKOutOp_data] = useState("");
  const [CastingTransferOp_data, setCastingTransferOp_data] = useState("");
  const [EmptyBoxTrasferOp_data, setEmptyBoxTrasferOp_data] = useState("");
  const [SandPlantOp_data, setSandPlantOp_data] = useState("");
  const [SandPlantCoOp_data, setSandPlantCoOp_data] = useState("");
  const [NewSandAddOp_data, setNewSandAddOp_data] = useState("");
  const [CompactibilityCheckingOp_data, setCompactibilityCheckingOp_data] = useState("");

  const [open, setOpen] = useState(false);
  const [openEmployeesPopup, setOpenEmployeesPopup] = useState(false);
  const [openGraphicalManpowerPopup, setGraphicalManpowerPopup] = useState(false);

  const [verified, setVerified] = useState('');
  const { token } = props;
  useEffect(() => {
    const { token } = props;
    axios.post(newURL+'/emp/viewDetails', {
        token: token
    }).then((response) => {
        setVerified(response.data[0].verified);
        setName(response.data[0].name);
        setDOB(response.data[0].dob);
        setDobPlace(response.data[0].dobplace);
        setAge(response.data[0].age);
        setGender(response.data[0].gender);
        setMaritalStatus(response.data[0].maritalstatus);
        setAddress(response.data[0].address);
        setPaddress(response.data[0].paddress);
        setCity(response.data[0].city);
        setState(response.data[0].state);
        setZipCode(response.data[0].zipcode);
        setCountry(response.data[0].country);
        setEmail(response.data[0].email);
        setMobile1(response.data[0].mobile1);
        setMobile2(response.data[0].mobile2);
        setJoinDate(response.data[0].joindate);
        setEndDate(response.data[0].enddate);
        setType(response.data[0].type);
        setDepartment(response.data[0].dept);
        setContractor(response.data[0].contractor);
        setRole(response.data[0].role);
        setSubDept(response.data[0].subdept);
        setLocation(response.data[0].location);
        setMedicalCheckup(response.data[0].medicalcheckup);
        setEducation(response.data[0].education);
        setCTC(response.data[0].ctc);
        setAadhar(response.data[0].aadhar);
        setPan(response.data[0].pan);
        setESI(response.data[0].esi);
        setPF(response.data[0].pf);
    });
  }, [props]);
  
  const [name, setName] = useState("");
  const [dob, setDOB] = useState("");
  const [dobplace, setDobPlace] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState('male');
  const [maritalstatus, setMaritalStatus] = useState("married");
  const [address, setAddress] = useState("");
  const [paddress, setPaddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [mobile1, setMobile1] = useState("");
  const [mobile2, setMobile2] = useState("");
  const [contractor, setContractor] = useState("");
  const [dept, setDepartment] = useState("");
  const [joindate, setJoinDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [role, setRole] = useState("");
  const [type, setType] = useState("");

  const [location, setLocation] = useState("");
  const [medicalcheckup, setMedicalCheckup] = useState("");
  const [education, setEducation] = useState("");
  const [ctc, setCTC] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const [esi, setESI] = useState("");
  const [pf, setPF] = useState("");
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const EmployeeDetailsPopup = () => {
    setOpen(false);
    setEmployeeDetailsPopup(true);
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
    setEmployeeDetailsPopup(false);
  };

  const [deactivationDate, setDeactivationDate] = useState("");

  const DragMachineOp_Col = (DragMachineOp === 0) ? "red" : "green";
  const DragMachineOpAir_Col = (DragMachineOpAir === 0) ? "red" : "green";
  const DragMachineCoOp_Col = (DragMachineCoOp === 0) ? "red" : "green";
  const CopeMachineOp_Col = (CopeMachineOp === 0) ? "red" : "green";
  const CopeMachineCoOp_Col = (CopeMachineCoOp === 0) ? "red" : "green";
  const CopeMachineOpAir_Col = (CopeMachineOpAir === 0) ? "red" : "green";
  const DragMouldPaintingOp_Col = (DragMouldPaintingOp === 0) ? "red" : "green";
  const CoreSettingOp_Col = (CoreSettingOp === 0) ? "red" : "green";
  const CoreTranferFixtureOp_Col = (CoreTranferFixtureOp === 0) ? "red" : "green";
  const BoxClosingOp_Col = (BoxClosingOp === 0) ? "red" : "green";
  const VentingOp_Col = (VentingOp === 0) ? "red" : "green";
  const CopeBoxPreprationOp_Col = (CopeBoxPreprationOp === 0) ? "red" : "green";
  const ClampingOp_Col = (ClampingOp === 0) ? "red" : "green";
  const MoldBoxTransferOp_Col = (MoldBoxTransferOp === 0) ? "red" : "green";
  const ClampAndPinRemovingOp_Col = (ClampAndPinRemovingOp === 0) ? "red" : "green";
  const PouringCraneOp_Col = (PouringCraneOp === 0) ? "red" : "green";
  const PouringOp_Col = (PouringOp === 0) ? "red" : "green";
  const KOutCraneOp_Col = (KOutCraneOp === 0) ? "red" : "green";
  const KOutCraneCoOp_Col = (KOutCraneCoOp === 0) ? "red" : "green";
  const KOutOp_Col = (KOutOp === 0) ? "red" : "green";
  const CastingTransferOp_Col = (CastingTransferOp === 0) ? "red" : "green";
  const EmptyBoxTrasferOp_Col = (EmptyBoxTrasferOp === 0) ? "red" : "green";
  const SandPlantOp_Col = (SandPlantOp === 0) ? "red" : "green";
  const SandPlantCoOp_Col = (SandPlantCoOp === 0) ? "red" : "green";
  const NewSandAddOp_Col = (NewSandAddOp === 0) ? "red" : "green";
  const CompactibilityCheckingOp_Col = (CompactibilityCheckingOp === 0) ? "red" : "green";


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
  const [newdate, setDate] = useState();

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

    axios.post(newURL+'/mp/getAllocationData_arpa_900_DragMachineOp', { verified: 'NO', shift: shift,date:newdate }).then((response) => { setDragMachineOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_DragMachineOpAir', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setDragMachineOpAir(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_DragMachineCoOp', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setDragMachineCoOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CopeMachineOp', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setCopeMachineOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CopeMachineCoOp', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setCopeMachineCoOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CopeMachineOpAir', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setCopeMachineOpAir(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_DragMouldPaintingOp', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setDragMouldPaintingOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CoreSettingOp', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setCoreSettingOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CoreTranferFixtureOp', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setCoreTranferFixtureOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_BoxClosingOp', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setBoxClosingOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_VentingOp', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setVentingOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CopeBoxPreprationOp', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setCopeBoxPreprationOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_ClampingOp', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setClampingOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_MoldBoxTransferOp', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setMoldBoxTransferOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_ClampAndPinRemovingOp', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setClampAndPinRemovingOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_PouringCraneOp', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setPouringCraneOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_PouringOp', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setPouringOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_KOutCraneOp', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setKOutCraneOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_KOutCraneCoOp', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setKOutCraneCoOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_KOutOp', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setKOutOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CastingTransferOp', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setCastingTransferOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_EmptyBoxTrasferOp', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setEmptyBoxTrasferOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_SandPlantOp', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setSandPlantOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_SandPlantCoOp', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setSandPlantCoOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_NewSandAddOp', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setNewSandAddOp(response.data[0].count); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CompactibilityCheckingOp', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setCompactibilityCheckingOp(response.data[0].count); });
    
    axios.post(newURL+'/mp/getAllocationData_arpa_900_DragMachineOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setDragMachineOp_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_DragMachineOpAir_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setDragMachineOpAir_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_DragMachineCoOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setDragMachineCoOp_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CopeMachineOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setCopeMachineOp_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CopeMachineCoOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setCopeMachineCoOp_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CopeMachineOpAir_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setCopeMachineOpAir_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_DragMouldPaintingOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setDragMouldPaintingOp_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CoreSettingOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setCoreSettingOp_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CoreTranferFixtureOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setCoreTranferFixtureOp_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_BoxClosingOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setBoxClosingOp_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_VentingOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setVentingOp_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CopeBoxPreprationOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setCopeBoxPreprationOp_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_ClampingOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setClampingOp_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_MoldBoxTransferOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setMoldBoxTransferOp_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_ClampAndPinRemovingOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setClampAndPinRemovingOp_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_PouringCraneOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setPouringCraneOp_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_PouringOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setPouringOp_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_KOutCraneOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setKOutCraneOp_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_KOutCraneCoOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setKOutCraneCoOp_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_KOutOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setKOutOp_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CastingTransferOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setCastingTransferOp_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_EmptyBoxTrasferOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setEmptyBoxTrasferOp_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_SandPlantOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setSandPlantOp_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_SandPlantCoOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setSandPlantCoOp_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_NewSandAddOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setNewSandAddOp_avl(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CompactibilityCheckingOp_avl', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setCompactibilityCheckingOp_avl(response.data); });


    axios.post(newURL+'/mp/getAllocationData_arpa_900_DragMachineOp_data', { verified: 'NO', shift: shift ,date:newdate }).then((response) => { setDragMachineOp_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_DragMachineOpAir_data', { verified: 'NO', shift: shift,date:newdate  }).then((response) => { setDragMachineOpAir_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_DragMachineCoOp_data', { verified: 'NO', shift: shift ,date:newdate }).then((response) => { setDragMachineCoOp_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CopeMachineOp_data', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setCopeMachineOp_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CopeMachineCoOp_data', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setCopeMachineCoOp_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CopeMachineOpAir_data', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setCopeMachineOpAir_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_DragMouldPaintingOp_data', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setDragMouldPaintingOp_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CoreSettingOp_data', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setCoreSettingOp_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CoreTranferFixtureOp_data', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setCoreTranferFixtureOp_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_BoxClosingOp_data', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setBoxClosingOp_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_VentingOp_data', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setVentingOp_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CopeBoxPreprationOp_data', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setCopeBoxPreprationOp_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_ClampingOp_data', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setClampingOp_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_MoldBoxTransferOp_data', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setMoldBoxTransferOp_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_ClampAndPinRemovingOp_data', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setClampAndPinRemovingOp_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_PouringCraneOp_data', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setPouringCraneOp_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_PouringOp_data', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setPouringOp_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_KOutCraneOp_data', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setKOutCraneOp_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_KOutCraneCoOp_data', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setKOutCraneCoOp_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_KOutOp_data', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setKOutOp_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CastingTransferOp_data', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setCastingTransferOp_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_EmptyBoxTrasferOp_data', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setEmptyBoxTrasferOp_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_SandPlantOp_data', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setSandPlantOp_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_SandPlantCoOp_data', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setSandPlantCoOp_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_NewSandAddOp_data', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setNewSandAddOp_data(response.data); });
    axios.post(newURL+'/mp/getAllocationData_arpa_900_CompactibilityCheckingOp_data', { verified: 'NO', shift: shift ,date:newdate  }).then((response) => { setCompactibilityCheckingOp_avl(response.data); });

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
//   console.log("273",DragMachineOp_avl[0])
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div>
      <Grid container spacing={2} >
        
        <Grid item xs={12} sm={5}>
          <PageTitle title="Expected Manpower Arpa 900" />
        </Grid>
        <Grid item xs={8} sm={2} style={{marginTop: "-20px",fontSize: "10px"}}>
        <DialogContent >
            <InputLabel htmlFor="age-native-required" className={classes.formControl} >Select Date</InputLabel>
            <TextField
                autoFocus
                margin="dense"
                id="deactivationDate"
                type="date"
                fullWidth
                value={newdate}
                onChange={(event) => { setDate(event.target.value);setShift(event.target.value); }}
            />
              </DialogContent>
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
   
        {/* <Grid item xs={12}>
          <div style={{ fontSize: "1.5rem", textAlign: "center", margin: 0 }}> Availabile Employee </div>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Card style={{ backgroundColor: "#405bf6", color: "#ffff" }} onClick={() => { handleClickOpen(); setSubDept('Shell Core'); }}>
            <CardActionArea>
              <CardContent>
                <Typography style={{ fontSize: "1.5rem" }}>
                Availabile Employee Arpa 900
                </Typography>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Work Station
                    </Typography>
                    <Typography size="md">{reqs_shell_core}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Employee Name
                    </Typography>
                    <Typography size="md">{reqs_shell_core}</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography colorBrightness="secondary" noWrap>
                      Skill
                    </Typography>
                    <Typography size="md">{shell_core}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      Contact Number
                    </Typography>
                    <Typography size="md">{reqs_shell_core - shell_core}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid > */}
        {/* <Grid item lg={6} md={6} sm={6} xs={12}>
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
        </Grid > */}
        <Grid item xs={12}>
          <div style={{ fontSize: "1.5rem", textAlign: "center", margin: 0 }}> Moulding </div>
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Card style={{ backgroundColor: "#808080", color: "#ffff" }} onClick={() => { handleClickOpen(); setSubDept('Arpa 900'); }}>
            <CardActionArea>
         
              <CardContent>
                <Typography style={{ fontSize: "1.5rem" }}>
                  Work Station
                </Typography>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap style={{textAlign:"left"}}>
                      Line
                    </Typography>
                    <Typography size="sm"></Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      P Name
                    </Typography>
                    <Typography size="sm"></Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      Alt Name
                    </Typography>
                    <Typography size="sm"></Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      Contact
                    </Typography>
                    <Typography size="sm"></Typography>
                  </Grid>
                </Grid>

                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                    </Typography>
                    <Typography size="s" style={{textAlign:"left",fontSize:"15px"}}>Drag Machine Op</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                    </Typography>
                    <Typography size="s" style={{ backgroundColor: DragMachineOp_Col }}>{DragMachineOp_data.length > 0 ? DragMachineOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                    </Typography>
                    <Typography size="s">{DragMachineOp_avl.length > 0 ? DragMachineOp_avl[0].name : "NA"}</Typography>
                  </Grid>
                 
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="s">{DragMachineOp_avl.length > 0 ? DragMachineOp_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>Drag Machine Op Air</Typography>
                  </Grid>
           
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: DragMachineOpAir_Col }}>{DragMachineOpAir_data.length > 0 ? DragMachineOpAir_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m">{DragMachineOpAir_avl.length > 0 ? DragMachineOpAir_avl[0].name : "NA"}</Typography>
                  </Grid>
              
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{DragMachineOpAir_avl.length > 0 ? DragMachineOpAir_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>Drag Machine Co Op</Typography>
                  </Grid>
                
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: DragMachineCoOp_Col }}>{DragMachineCoOp_data.length > 0 ? DragMachineCoOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m">{DragMachineCoOp_avl.length > 0 ? DragMachineCoOp_avl[0].name : "NA"}</Typography>
                  </Grid>
               
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{DragMachineCoOp_avl.length > 0 ? DragMachineCoOp_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>Cope Machine Op</Typography>
                  </Grid>
              
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                    
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: CopeMachineOp_Col }}>{CopeMachineOp_data.length > 0 ? CopeMachineOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                    
                    </Typography>
                    <Typography size="m">{CopeMachineOp_avl.length > 0 ? CopeMachineOp_avl[0].CopeMachineOp : "NA"}</Typography>
                  </Grid>
               
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{CopeMachineOp_avl.length > 0 ? CopeMachineOp_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>Cope Machine Co Op</Typography>
                  </Grid>
            
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                    
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: CopeMachineCoOp_Col }}>{CopeMachineCoOp_data.length > 0 ? CopeMachineCoOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                    
                    </Typography>
                    <Typography size="m">{CopeMachineCoOp_avl.length > 0 ? CopeMachineCoOp_avl[0].name : "NA"}</Typography>
                  </Grid>
              
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{CopeMachineCoOp_avl.length > 0 ? CopeMachineCoOp_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>Cope Machine Op Air</Typography>
                  </Grid>
           
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                   
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: CopeMachineOpAir_Col }}>{ CopeMachineOpAir_data.length > 0 ? CopeMachineOpAir_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                   
                    </Typography>
                    <Typography size="m">{ CopeMachineOpAir_avl.length > 0 ? CopeMachineOpAir_avl[0].name : "NA"}</Typography>
                  </Grid>
               
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{ CopeMachineOpAir_avl.length > 0 ? CopeMachineOpAir_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>Drag Mould Painting Op</Typography>
                  </Grid>
        
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: DragMouldPaintingOp_Col }}>{DragMouldPaintingOp_data.length > 0 ? DragMouldPaintingOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m">{DragMouldPaintingOp_avl.length > 0 ? DragMouldPaintingOp_avl[0].name : "NA"}</Typography>
                  </Grid>
               
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{DragMouldPaintingOp_avl.length > 0 ? DragMouldPaintingOp_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>Core Setting Op</Typography>
                  </Grid>
             
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                    
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: CoreSettingOp_Col }}>{CoreSettingOp_data.length > 0 ? CoreSettingOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                    
                    </Typography>
                    <Typography size="m">{CoreSettingOp_avl.length > 0 ? CoreSettingOp_avl[0].name : "NA"}</Typography>
                  </Grid>
               
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{CoreSettingOp_avl.length > 0 ? CoreSettingOp_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>Core Tranfer Fixture Op</Typography>
                  </Grid>
             
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                   
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: CoreTranferFixtureOp_Col }}>{ CoreTranferFixtureOp_data.length > 0 ? CoreTranferFixtureOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                   
                    </Typography>
                    <Typography size="m">{ CoreTranferFixtureOp_avl.length > 0 ? CoreTranferFixtureOp_avl[0].name : "NA"}</Typography>
                  </Grid>
             
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{ CoreTranferFixtureOp_avl.length > 0 ? CoreTranferFixtureOp_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>Box Closing Op</Typography>
                  </Grid>
       
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: BoxClosingOp_Col }}>{ BoxClosingOp_data.length > 0 ? BoxClosingOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m">{ BoxClosingOp_avl.length > 0 ? BoxClosingOp_avl[0].name : "NA"}</Typography>
                  </Grid>
           
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{ BoxClosingOp_avl.length > 0 ? BoxClosingOp_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>Venting Op</Typography>
                  </Grid>
             
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: VentingOp_Col }}>{VentingOp_data.length > 0 ? VentingOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m">{VentingOp_avl.length > 0 ? VentingOp_avl[0].name : "NA"}</Typography>
                  </Grid>
              
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{VentingOp_avl.length > 0 ? VentingOp_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>Cope Box Prepration Op</Typography>
                  </Grid>

                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: CopeBoxPreprationOp_Col }}>{ CopeBoxPreprationOp_data.length > 0 ? CopeBoxPreprationOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m">{ CopeBoxPreprationOp_avl.length > 0 ? CopeBoxPreprationOp_avl[0].name : "NA"}</Typography>
                  </Grid>
                
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{ CopeBoxPreprationOp_avl.length > 0 ? CopeBoxPreprationOp_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>Clamping Op</Typography>
                  </Grid>
                
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                    
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: ClampingOp_Col }}>{ClampingOp_data.length > 0 ? ClampingOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                    
                    </Typography>
                    <Typography size="m">{ClampingOp_avl.length > 0 ? ClampingOp_avl[0].name : "NA"}</Typography>
                  </Grid>
                
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{ClampingOp_avl.length > 0 ? ClampingOp_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>Mold Box Transfer Op</Typography>
                  </Grid>
              
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                   
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: MoldBoxTransferOp_Col }}>{ MoldBoxTransferOp_data.length > 0 ? MoldBoxTransferOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                   
                    </Typography>
                    <Typography size="m">{ MoldBoxTransferOp_avl.length > 0 ? MoldBoxTransferOp_avl[0].name : "NA"}</Typography>
                  </Grid>
                
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{ MoldBoxTransferOp_avl.length > 0 ? MoldBoxTransferOp_avl[0]. mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>Clamp & Pin Removing Op</Typography>
                  </Grid>
        
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                   
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: ClampAndPinRemovingOp_Col }}>{ ClampAndPinRemovingOp_data.length > 0 ? ClampAndPinRemovingOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                   
                    </Typography>
                    <Typography size="m">{ ClampAndPinRemovingOp_avl.length > 0 ? ClampAndPinRemovingOp_avl[0].name : "NA"}</Typography>
                  </Grid>
             
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{ ClampAndPinRemovingOp_avl.length > 0 ? ClampAndPinRemovingOp_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>Pouring Crane Op</Typography>
                  </Grid>
                
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                    
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: PouringCraneOp_Col }}>{PouringCraneOp_data.length > 0 ? PouringCraneOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                    
                    </Typography>
                    <Typography size="m">{PouringCraneOp_avl.length > 0 ? PouringCraneOp_avl[0].name : "NA"}</Typography>
                  </Grid>
                  
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{PouringCraneOp_avl.length > 0 ? PouringCraneOp_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>Pouring Op</Typography>
                  </Grid>
               
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: PouringOp_Col }}>{PouringOp_data.length > 0 ? PouringOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m">{PouringOp_avl.length > 0 ? PouringOp_avl[0].name : "NA"}</Typography>
                  </Grid>
                 
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{PouringOp_avl.length > 0 ? PouringOp_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>K Out Crane Op</Typography>
                  </Grid>
            
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: KOutCraneOp_Col }}>{ KOutCraneOp_data.length > 0 ? KOutCraneOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m">{ KOutCraneOp_avl.length > 0 ? KOutCraneOp_avl[0].name : "NA"}</Typography>
                  </Grid>
                 
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{ KOutCraneOp_avl.length > 0 ? KOutCraneOp_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>K Out Crane Co Op</Typography>
                  </Grid>
                
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: KOutCraneCoOp_Col }}>{KOutCraneCoOp_data.length > 0 ? KOutCraneCoOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m">{KOutCraneCoOp_avl.length > 0 ? KOutCraneCoOp_avl[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{KOutCraneCoOp_avl.length > 0 ? KOutCraneCoOp_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>K Out Op</Typography>
                  </Grid>

                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: KOutOp_Col }}>{KOutOp_data.length > 0 ? KOutOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m">{KOutOp_avl.length > 0 ? KOutOp_avl[0].name : "NA"}</Typography>
                  </Grid>
              
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{KOutOp_avl.length > 0 ? KOutOp_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>Casting Transfer Op</Typography>
                  </Grid>
            
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: CastingTransferOp_Col }}>{CastingTransferOp_data.length > 0 ? CastingTransferOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m">{CastingTransferOp_avl.length > 0 ? CastingTransferOp_avl[0].name : "NA"}</Typography>
                  </Grid>
             
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{CastingTransferOp_avl.length > 0 ? CastingTransferOp_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>Empty Box Trasfer Op</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                   
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: EmptyBoxTrasferOp_Col }}>{ EmptyBoxTrasferOp_data.length > 0 ? EmptyBoxTrasferOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                   
                    </Typography>
                    <Typography size="m">{ EmptyBoxTrasferOp_avl.length > 0 ? EmptyBoxTrasferOp_avl[0].name : "NA"}</Typography>
                  </Grid>
              
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{ EmptyBoxTrasferOp_avl.length > 0 ? EmptyBoxTrasferOp_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>Sand Plant Op</Typography>
                  </Grid>
            
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                    
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: SandPlantOp_Col }}>{SandPlantOp_data.length > 0 ? SandPlantOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                    
                    </Typography>
                    <Typography size="m">{SandPlantOp_avl.length > 0 ? SandPlantOp_avl[0].name : "NA"}</Typography>
                  </Grid>
           
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{SandPlantOp_avl.length > 0 ? SandPlantOp_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>Sand Plant Co Op</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                    
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: SandPlantCoOp_Col }}>{SandPlantCoOp_data.length > 0 ? SandPlantCoOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                    
                    </Typography>
                    <Typography size="m">{SandPlantCoOp_avl.length > 0 ? SandPlantCoOp_avl[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{SandPlantCoOp_avl.length > 0 ? SandPlantCoOp_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>New Sand Add Op</Typography>
                  </Grid>
     
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                    
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: NewSandAddOp_Col }}>{NewSandAddOp_data.length > 0 ? NewSandAddOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                    
                    </Typography>
                    <Typography size="m">{NewSandAddOp_avl.length > 0 ? NewSandAddOp_avl[0].name : "NA"}</Typography>
                  </Grid>
             
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{NewSandAddOp_avl.length > 0 ? NewSandAddOp_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

                
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                      
                    </Typography>
                    <Typography size="m" style={{textAlign:"left"}}>Compactibility Checking Op</Typography>
                  </Grid>
      
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                    
                    </Typography>
                    <Typography size="m" style={{ backgroundColor: CompactibilityCheckingOp_Col }}>{CompactibilityCheckingOp_data.length > 0 ? CompactibilityCheckingOp_data[0].name : "NA"}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                    
                    </Typography>
                    <Typography size="m">{CompactibilityCheckingOp_avl.length > 0 ? CompactibilityCheckingOp_avl[0].name : "NA"}</Typography>
                  </Grid>
         
                  <Grid item xs={3}>
                    <Typography colorBrightness="secondary" noWrap>
                     
                    </Typography>
                    <Typography size="m">{CompactibilityCheckingOp_avl.length > 0 ? CompactibilityCheckingOp_avl[0].mobile1 : "NA"}</Typography>
                  </Grid>
                </Grid>
                <br></br>

              </CardContent>
            </CardActionArea>
          </Card>
        </Grid >
      </Grid>
      
      <div>
        
        <Dialog open={open} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
          <div style={{ flexGrow: 1, fontWeight: 'bold', paddingTop: '5px' }}>Emplyoee Details</div>
            <div style={{ display: 'flex' }}>
              
              <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            disabled
                            label="Token"
                            fullWidth
                            // value={token}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            label="Full Name"
                            fullWidth
                            value={name}
                            onChange={(event) => { setName(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            type="text"
                            label="Birth Date"
                            fullWidth
                            value={dob}
                            onChange={(event) => { setDOB(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Place of Birth"
                            fullWidth
                            value={dobplace}
                            onChange={(event) => { setDobPlace(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="Age"
                            fullWidth
                            value={age}
                            onChange={(event) => { setAge(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup row aria-label="gender" name="gender" value={gender} onChange={(event) => { setGender(event.target.value) }} >
                            <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                            <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <FormLabel component="legend">Marital Status</FormLabel>
                        <RadioGroup row aria-label="mStatus" name="mStatus" value={maritalstatus}
                            onChange={(event) => { setMaritalStatus(event.target.value) }}
                        >
                            <FormControlLabel value="married" control={<Radio color="primary" />} label="Married" />
                            <FormControlLabel value="unmarried" control={<Radio color="primary" />} label="Unmarried" />
                            <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormLabel component="legend" required>Medical Checkup</FormLabel>
                        <RadioGroup row aria-label="mCheckup" name="mCheckup" defaultValue="No" value={medicalcheckup} onChange={(event) => { setMedicalCheckup(event.target.value) }}>
                            <FormControlLabel value="Yes" control={<Radio color="primary" />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio color="primary" />} label="No" />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            label="Present Address"
                            fullWidth
                            value={address}
                            onChange={(event) => { setAddress(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Permanent Address"
                            fullWidth
                            value={paddress}
                            onChange={(event) => { setPaddress(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            label="City"
                            fullWidth
                            value={city}
                            onChange={(event) => { setCity(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="state"
                            required
                            name="state"
                            label="State/Province/Region"
                            fullWidth
                            value={state}
                            onChange={(event) => { setState(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            label="Zip / Postal code"
                            fullWidth
                            value={zipcode}
                            onChange={(event) => { setZipCode(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            label="Country"
                            fullWidth
                            value={country}
                            onChange={(event) => { setCountry(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Email"
                            fullWidth
                            value={email}
                            onChange={(event) => { setEmail(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="Mobile No."
                            fullWidth
                            value={mobile1}
                            inputProps={{ maxLength: 10 }}
                            onChange={(event) => { setMobile1(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Alternate No."
                            fullWidth
                            value={mobile2}
                            inputProps={{ maxLength: 10 }}
                            onChange={(event) => { setMobile2(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="Education"
                            type="text"
                            fullWidth
                            value={education}
                            onChange={(event) => { setEducation(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="Aadhar No."
                            fullWidth
                            value={aadhar}
                            onChange={(event) => { setAadhar(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="PAN No."
                            fullWidth
                            value={pan}
                            onChange={(event) => { setPan(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="ESI No."
                            fullWidth
                            value={esi}
                            onChange={(event) => { setESI(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="PF No."
                            fullWidth
                            value={pf}
                            onChange={(event) => { setPF(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="Join Date"
                            type="text"
                            fullWidth
                            value={joindate}
                            onChange={(event) => { setJoinDate(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="End Date"
                            type="text"
                            fullWidth
                            value={enddate}
                            onChange={(event) => { setEndDate(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl required className={classes.formControl}>
                            <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Type</InputLabel>
                            <Select
                                native
                                onChange={(event) => { setType(event.target.value); }}
                                style={{ width: '100%' }}
                                value={type}
                            >
                                <option aria-label="None" value="" />
                                <option value="Permanent">Permanent</option>
                                <option value="CL">CL</option>
                                <option value="IT">IT</option>
                                <option value="Piece Rate">Piece Rate</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="CTC"
                            type="text"
                            fullWidth
                            value={ctc}
                            onChange={(event) => { setCTC(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl required className={classes.formControl}>
                            <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Department</InputLabel>
                            <Select
                                native
                                onChange={(event) => { setDepartment(event.target.value); }}
                                style={{ width: '100%' }}
                                value={dept}
                            >
                               <option aria-label="None" value="" />
                                <option value="Core Shop">Core Shop</option>
                                <option value="Moulding">Moulding</option>
                                <option value="Melting">Melting</option>
                                <option value="Fettling">Fettling</option>
                                <option value="HR">HR</option>
                            </Select>
                        </FormControl>
                    </Grid>
               
                    {(() => {
                        if (verified === 'YES') {
                            return (
                                <>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            required
                                            id="subdept"
                                            name="subdept"
                                            label="Sub Dept"
                                            type="text"
                                            fullWidth
                                            value={subdept}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            required
                                            id="location"
                                            name="location"
                                            label="Location"
                                            type="text"
                                            fullWidth
                                            value={location}
                                        />
                                    </Grid>
                                </>
                            )
                        }
                    })()}
                    <Grid item xs={12} sm={4}>
                        <FormControl required className={classes.formControl}>
                            <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Contractor</InputLabel>
                            <Select
                                native
                                value={contractor}
                                onChange={(event) => { setContractor(event.target.value); }}
                                style={{ width: '100%' }}
                            >
                                <option aria-label="None" value="" />
                                <option value="Permanent">Permanent</option>
                                <option value="OPTIGMA">OPTIGMA</option>
                                <option value="SBBMT">SBBMT</option>
                                <option value="INDUMATI">INDUMATI</option>
                                <option value="SRUJAN">SRUJAN</option>
                                <option value="NEW GANESH">NEW GANESH</option>
                                <option value="SHREE SERVICES">SHREE SERVICES</option>
                                <option value="DMC NEEM">DMC NEEM</option>
                                <option value="MPTA NEEM">MPTA NEEM</option>
                                <option value="YIT NEEM">YIT NEEM</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl required className={classes.formControl}>
                            <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Role</InputLabel>
                            <Select
                                native
                                value={role}
                                onChange={(event) => { setRole(event.target.value); }}
                                style={{ width: '100%' }}
                            >
                                <option aria-label="None" value="" />
                                <option value="hr">HR</option>
                                <option value="hod">HOD</option>
                                <option value="employee">Employee</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    {(() => {
                        if (verified === 'NO') {
                            return (
                                <>
                                    <Grid spacing={2}>
                                        <Grid item xs={12} sm={4}>
                                            <Button
                                                type="submit"
                                                style={{
                                                    fontSize: "18px",
                                                }}
                                                color="primary"
                                                variant="contained"
                                            >
                                                Verify
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    <Grid spacing={2} style={{ paddingLeft: '10px' }}>
                                        <Grid item xs={12} sm={4}>
                                            <Button
                                                style={{
                                                    fontSize: "18px",
                                                }}
                                                color="secondary"
                                                variant="contained"
                                                onClick={handleClickOpen}
                                            >
                                                Reject
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </>
                            )
                        }
                    })()}
                </Grid>
            </div>
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
      <ViewDetailsPopup
                openDetailsPopup={openDetailsPopup}
                // token={token}
                onClose={handleClose}
            >
                {/* <ViewDetails
                    onSubmitClose={handleClose}
                    // token={token}
                /> */}
      </ViewDetailsPopup>
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