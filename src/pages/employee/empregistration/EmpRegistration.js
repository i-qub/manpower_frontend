import React, { useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from "@material-ui/core";
import { getUser } from '../../../components/Utils/Common';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import dateFormat from 'dateformat';
require('dotenv').config()
const newURL = process.env.REACT_APP_API_URL;
console.log("18",newURL)
const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  }
}));

export default function EmpRegistration(props) {
  const { onSubmitClose } = props;
  const classes = useStyles();
  const user = getUser();

  const [token, setToken] = useState("");
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
  const [country, setCountry] = useState("India");
  const [email, setEmail] = useState("");
  const [mobile1, setMobile1] = useState("");
  const [mobile2, setMobile2] = useState("");
  const [ctc, setCTC] = useState("");
  const [contractor, setContractor] = useState("");
  const [dept, setDepartment] = useState("");
  const [subdept, setSubDepartment] = useState("");
  const [joindate, setJoinDate] = useState("");
  const [role, setRole] = useState("");
  const [type, setType] = useState("");
  const [education, setEducation] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const [esi, setESI] = useState("");
  const [pf, setPF] = useState("");
  const [medicalcheckup, setMedicalCheckup] = useState("No");

  const [PrimarySkill, setPrimarySkill] = useState("");
  const [primaryActivity, setprimaryActivity] = useState("");
  const [DragMachineOp, setDragMachineOp] = useState("L0");
  const [DragMachineOpAir, setDragMachineOpAir] = useState("L0");
  const [DragMachineCoOp, setDragMachineCoOp] = useState("L0");
  const [CopeMachineOp, setCopeMachineOp] = useState("L0");
  const [CopeMachineCoOp, setCopeMachineCoOp] = useState("L0");
  const [CopeMachineOpAir, setCopeMachineOpAir] = useState("L0");
  const [DragMouldPaintingOp, setDragMouldPaintingOp] = useState("L0");
  const [CoreSettingOp, setCoreSettingOp] = useState("L0");
  const [CoreTranferFixtureOp, setCoreTranferFixtureOp] = useState("L0");
  const [BoxClosingOp, setBoxClosingOp] = useState("L0");
  const [VentingOp, setVentingOp] = useState("L0");
  const [CopeBoxPreprationOp, setCopeBoxPreprationOp] = useState("L0");
  const [ClampingOp, setClampingOp] = useState("L0");
  const [MoldBoxTransferOp, setMoldBoxTransferOp] = useState("L0");
  const [ClampAndPinRemovingOp, setClampAndPinRemovingOp] = useState("L0");
  const [PouringCraneOp, setPouringCraneOp] = useState("L0");
  const [PouringOp, setPouringOp] = useState("L0");
  const [KOutCraneOp, setKOutCraneOp] = useState("L0");
  const [KOutCraneCoOp, setKOutCraneCoOp] = useState("L0");
  const [KOutOp, setKOutOp] = useState("L0");
  const [CastingTransferOp, setCastingTransferOp] = useState("L0");
  const [EmptyBoxTrasferOp, setEmptyBoxTrasferOp] = useState("L0");
  const [SandPlantOp, setSandPlantOp] = useState("L0");
  const [SandPlantCoOp, setSandPlantCoOp] = useState("L0");
  const [NewSandAddOp, setNewSandAddOp] = useState("L0");
  const [CompactibilityCheckingOp, setCompactibilityCheckingOp] = useState("L0");

 

  // useEffect(() => {
  //   const contractor = 'OPTIGMA';
  //   axios.post('http://localhost:9000/emp/fetchToken', {
  //     contractor: contractor
  //   }).then((response) => {
  //     setToken(parseInt(response.data[0].token) + parseInt(1));
  //   });
  // }, []);

  const newEmployee = (event) => {
    event.preventDefault();
    axios.post(newURL+"/emp/addEmployee", {
      token: token,
      name: name,
      dob: dob,
      dobplace: dobplace,
      age: age,
      gender: gender,
      maritalstatus: maritalstatus,
      address: address,
      paddress: paddress,
      city: city,
      state: state,
      zipcode: zipcode,
      country: country,
      email: email,
      mobile1: mobile1,
      mobile2: mobile2,
      contractor: contractor,
      dept: dept,
      joindate: joindate,
      role: role,
      type: type,
      aadhar: aadhar,
      pan: pan,
      esi: esi,
      pf: pf,
      medicalcheckup: medicalcheckup,
      education: education,
      ctc: ctc,
      PrimarySkill: PrimarySkill,
      primaryActivity:primaryActivity,
      DragMachineOp:DragMachineOp,
      DragMachineOpAir:DragMachineOpAir,
      DragMachineCoOp:DragMachineCoOp,
      CopeMachineOp:CopeMachineOp,
      CopeMachineCoOp:CopeMachineCoOp,
      CopeMachineOpAir:CopeMachineOpAir,
      DragMouldPaintingOp:DragMouldPaintingOp,
      CoreSettingOp:CoreSettingOp,
      CoreTranferFixtureOp:CoreTranferFixtureOp,
      BoxClosingOp:BoxClosingOp,
      VentingOp:VentingOp,
      CopeBoxPreprationOp:CopeBoxPreprationOp,
      ClampingOp:ClampingOp,
      MoldBoxTransferOp:MoldBoxTransferOp,
      ClampAndPinRemovingOp:ClampAndPinRemovingOp,
      PouringCraneOp:PouringCraneOp,
      PouringOp:PouringOp,
      KOutCraneOp:KOutCraneOp,
      KOutCraneCoOp:KOutCraneCoOp,
      KOutOp:KOutOp,
      CastingTransferOp:CastingTransferOp,
      EmptyBoxTrasferOp:EmptyBoxTrasferOp,
      SandPlantOp:SandPlantOp,
      SandPlantCoOp:SandPlantCoOp,
      NewSandAddOp:NewSandAddOp,
      CompactibilityCheckingOp:CompactibilityCheckingOp,
      subdept:subdept
    },

      onSubmitClose())
  };

  let newDate = new Date()
  // let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear() - 18;

  const eighteenYearsAgo = `${year}-${month}`;
  var CurrentDate = dateFormat(dob, "yyyy-mm");;
  if (dob !== '') {
    if (CurrentDate >= eighteenYearsAgo) {
      alert('Under Age...')
      window.location.reload();
    }
  }
  return (
    <div>
      <form onSubmit={newEmployee}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={2}>
            <TextField
              required
              label="Token No."
              fullWidth
              onChange={(event) => { setToken(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Full Name"
              fullWidth
              onChange={(event) => { setName(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              type="date"
              label="Birth Date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => { setDOB(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Place of Birth"
              fullWidth
              onChange={(event) => { setDobPlace(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              label="Age"
              fullWidth
              onChange={(event) => { setAge(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormLabel component="legend" required>Gender</FormLabel>
            <RadioGroup row aria-label="gender" name="gender" defaultValue="male" onChange={(event) => { setGender(event.target.value) }} >
              <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
              <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
            </RadioGroup>
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormLabel component="legend" required>Marital Status</FormLabel>
            <RadioGroup row aria-label="mStatus" name="mStatus" defaultValue="married" onChange={(event) => { setMaritalStatus(event.target.value) }}>
              <FormControlLabel value="married" control={<Radio color="primary" />} label="Married" />
              <FormControlLabel value="unmarried" control={<Radio color="primary" />} label="Unmarried" />
              <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
            </RadioGroup>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormLabel component="legend" required>Medical Checkup</FormLabel>
            <RadioGroup row aria-label="mCheckup" name="mCheckup" defaultValue="No" onChange={(event) => { setMedicalCheckup(event.target.value) }}>
              <FormControlLabel value="Yes" control={<Radio color="primary" />} label="Yes" />
              <FormControlLabel value="No" control={<Radio color="primary" />} label="No" />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <TextField
              // required
              label="Present Address"
              fullWidth
              onChange={(event) => { setAddress(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Permanent Address"
              fullWidth
              onChange={(event) => { setPaddress(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              // required
              label="City"
              fullWidth
              onChange={(event) => { setCity(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              name="state"
              label="State"
              fullWidth
              onChange={(event) => { setState(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              // required
              label="Zip/Postal code"
              fullWidth
              onChange={(event) => { setZipCode(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              // required
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
              onChange={(event) => { setEmail(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              // required
              label="Mobile No."
              fullWidth
              inputProps={{ maxLength: 10 }}
              onChange={(event) => { setMobile1(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Alternate No."
              fullWidth
              inputProps={{ maxLength: 10 }}
              onChange={(event) => { setMobile2(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              // required
              label="Education"
              type="text"
              fullWidth
              onChange={(event) => { setEducation(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              // required
              label="Aadhar No."
              fullWidth
              onChange={(event) => { setAadhar(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              // required
              label="PAN No."
              fullWidth
              onChange={(event) => { setPan(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              // required
              label="ESI No."
              fullWidth
              onChange={(event) => { setESI(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              // required
              label="PF No."
              fullWidth
              onChange={(event) => { setPF(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              // required
              label="Join Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              onChange={(event) => { setJoinDate(event.target.value); }}
            />
          </Grid>
          {user[0].role === 'hr' ? (
            <>
              <Grid item xs={12} sm={4}>
                <FormControl required className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Type</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setType(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="HR">HR</option>
                    <option value="HOD">HOD</option>
                    <option value="Permanent">Permanent</option>
                    <option value="CL">CL</option>
                    <option value="IT">IT</option>
                    <option value="Piece Rate">Piece Rate</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl required className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Department</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setDepartment(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="HR">HR</option>
                    <option value="Core Shop">Core Shop</option>
                    <option value="Moulding">Moulding</option>
                    <option value="Melting">Melting</option>
                    <option value="Fettling">Fettling</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl required className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Sub Department</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setSubDepartment(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="HR">HR</option>
                    <option value="Core Shop">Core Shop</option>
                    <option value="Moulding">Moulding</option>
                    <option value="Melting">Melting</option>
                    <option value="Fettling">Fettling</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  // required
                  label="CTC"
                  type="text"
                  fullWidth
                  onChange={(event) => { setCTC(event.target.value); }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl required className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Contractor</InputLabel>
                  <Select
                    native
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
                    <option value="SHRI HANUMAN">SHRI HANUMAN</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl required className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Role</InputLabel>
                  <Select
                    native
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
              <Grid item xs={12} sm={4}>
                <FormControl required className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Primary Activity</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setprimaryActivity(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="DragMachineOp">Drag Machine Op</option>
                    <option value="DragMachineOpAir">Drag Machine Op Air</option>
                    <option value="DragMachineCoOp">Drag Machine Co Op</option>
                    <option value="CopeMachineOp">Cope Machine Op</option>
                    <option value="CopeMachineCoOp">Cope Machine Co Op</option>
                    <option value="CopeMachineOpAir">Cope Machine Op Air</option>
                    <option value="DragMouldPaintingOp">Drag Mould Painting Op</option>
                    <option value="CoreSettingOp">Core Setting Op</option>
                    <option value="CoreTranferFixtureOp">Core Tranfer Fixture Op</option>
                    <option value="BoxClosingOp">Box Closing Op</option>
                    <option value="VentingOp">Venting Op</option>
                    <option value="CopeBoxPreprationOp">Cope Box Prepration Op</option>
                    <option value="ClampingOp">Clamping Op</option>
                    <option value="MoldBoxTransferOp">Mold Box Transfer Op</option>
                    <option value="ClampAndPinRemovingOp">Clamp And Pin Removing Op</option>
                    <option value="PouringCraneOp">Pouring Crane Op</option>
                    <option value="PouringOp">Pouring Op</option>
                    <option value="KOutCraneOp">K Out Crane Op</option>
                    <option value="KOutCraneCoOp">K Out Crane Co Op</option>
                    <option value="KOutOp">K Out Op</option>
                    <option value="CastingTransferOp">Casting Transfer Op</option>
                    <option value="EmptyBoxTrasferOp">Empty Box Trasfer Op</option>
                    <option value="SandPlantOp">Sand Plant Op</option>
                    <option value="SandPlantCoOp">Sand Plant Co Op</option>
                    <option value="NewSandAddOp">New Sand Add Op</option>
                    <option value="CompactibilityCheckingOp">Compactibility Checking Op</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl required className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Primary Skill</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setPrimarySkill(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>

                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Drag Machine Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setDragMachineOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Drag Machine Op Air</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setDragMachineOpAir(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Drag Machine Co Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setDragMachineCoOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Cope Machine Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setCopeMachineOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Cope Machine Co Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setCopeMachineCoOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Cope Machine Op Air</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setCopeMachineOpAir(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Drag Mould Painting Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setDragMouldPaintingOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Core Setting Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setCoreSettingOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Core Tranfer Fixture Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setCoreTranferFixtureOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Box Closing Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setBoxClosingOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Venting Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setVentingOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Cope Box Prepration Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setCopeBoxPreprationOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Clamping Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setClampingOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Mold Box Transfer Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setMoldBoxTransferOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Clamp And Pin Removing Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setClampAndPinRemovingOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Pouring Crane Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setPouringCraneOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Pouring Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setPouringOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>K Out Crane Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setKOutCraneOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>K Out Crane Co Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setKOutCraneCoOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>K Out Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setKOutOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Casting Transfer Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setCastingTransferOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Empty Box Trasfer Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setEmptyBoxTrasferOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Sand Plant Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setSandPlantOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required" className={classes.formControl}>Sand Plant Co Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setSandPlantCoOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>New Sand Add Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setNewSandAddOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Compactibility Checking Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setCompactibilityCheckingOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Type</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setType(event.target.value); }}
                    style={{ width: '100%' }}
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
                <FormControl required className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Type</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setType(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="HR">HR</option>
                    <option value="HOD">HOD</option>
                    <option value="Permanent">Permanent</option>
                    <option value="CL">CL</option>
                    <option value="IT">IT</option>
                    <option value="Piece Rate">Piece Rate</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl required className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Department</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setDepartment(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="HR">HR</option>
                    <option value="Core Shop">Core Shop</option>
                    <option value="Moulding">Moulding</option>
                    <option value="Melting">Melting</option>
                    <option value="Fettling">Fettling</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl required className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Sub Department</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setSubDepartment(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="HR">HR</option>
                    <option value="Core Shop">Core Shop</option>
                    <option value="Moulding">Moulding</option>
                    <option value="Melting">Melting</option>
                    <option value="Fettling">Fettling</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  // required
                  label="CTC"
                  type="text"
                  fullWidth
                  onChange={(event) => { setCTC(event.target.value); }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl required className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Contractor</InputLabel>
                  <Select
                    native
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
                    <option value="SHRI HANUMAN">SHRI HANUMAN</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl required className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Role</InputLabel>
                  <Select
                    native
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
              <Grid item xs={12} sm={4}>
                <FormControl required className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Primary Activity</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setprimaryActivity(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="DragMachineOp">Drag Machine Op</option>
                    <option value="DragMachineOpAir">Drag Machine Op Air</option>
                    <option value="DragMachineCoOp">Drag Machine Co Op</option>
                    <option value="CopeMachineOp">Cope Machine Op</option>
                    <option value="CopeMachineCoOp">Cope Machine Co Op</option>
                    <option value="CopeMachineOpAir">Cope Machine Op Air</option>
                    <option value="DragMouldPaintingOp">Drag Mould Painting Op</option>
                    <option value="CoreSettingOp">Core Setting Op</option>
                    <option value="CoreTranferFixtureOp">Core Tranfer Fixture Op</option>
                    <option value="BoxClosingOp">Box Closing Op</option>
                    <option value="VentingOp">Venting Op</option>
                    <option value="CopeBoxPreprationOp">Cope Box Prepration Op</option>
                    <option value="ClampingOp">Clamping Op</option>
                    <option value="MoldBoxTransferOp">Mold Box Transfer Op</option>
                    <option value="ClampAndPinRemovingOp">Clamp And Pin Removing Op</option>
                    <option value="PouringCraneOp">Pouring Crane Op</option>
                    <option value="PouringOp">Pouring Op</option>
                    <option value="KOutCraneOp">K Out Crane Op</option>
                    <option value="KOutCraneCoOp">K Out Crane Co Op</option>
                    <option value="KOutOp">K Out Op</option>
                    <option value="CastingTransferOp">Casting Transfer Op</option>
                    <option value="EmptyBoxTrasferOp">Empty Box Trasfer Op</option>
                    <option value="SandPlantOp">Sand Plant Op</option>
                    <option value="SandPlantCoOp">Sand Plant Co Op</option>
                    <option value="NewSandAddOp">New Sand Add Op</option>
                    <option value="CompactibilityCheckingOp">Compactibility Checking Op</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl required className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Primary Skill</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setPrimarySkill(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>

                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Drag Machine Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setDragMachineOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Drag Machine Op Air</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setDragMachineOpAir(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Drag Machine Co Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setDragMachineCoOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Cope Machine Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setCopeMachineOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Cope Machine Co Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setCopeMachineCoOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Cope Machine Op Air</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setCopeMachineOpAir(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Drag Mould Painting Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setDragMouldPaintingOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Core Setting Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setCoreSettingOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Core Tranfer Fixture Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setCoreTranferFixtureOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Box Closing Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setBoxClosingOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Venting Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setVentingOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Cope Box Prepration Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setCopeBoxPreprationOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Clamping Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setClampingOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Mold Box Transfer Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setMoldBoxTransferOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Clamp And Pin Removing Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setClampAndPinRemovingOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Pouring Crane Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setPouringCraneOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Pouring Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setPouringOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>K Out Crane Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setKOutCraneOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>K Out Crane Co Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setKOutCraneCoOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>K Out Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setKOutOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Casting Transfer Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setCastingTransferOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Empty Box Trasfer Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setEmptyBoxTrasferOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Sand Plant Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setSandPlantOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required" className={classes.formControl}>Sand Plant Co Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setSandPlantCoOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>New Sand Add Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setNewSandAddOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl  className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required"  className={classes.formControl}>Compactibility Checking Op</InputLabel>
                  <Select
                    native
                    onChange={(event) => { setCompactibilityCheckingOp(event.target.value); }}
                    style={{ width: '100%' }}
                  >
                    <option aria-label="None" value="" />
                    <option value="L0">L0</option>
                    <option value="L1">L1</option>
                    <option value="L2">L2</option>
                    <option value="L3">L3</option>
                    <option value="L4">L4</option>
                  </Select>
                </FormControl>
              </Grid>
            
            </>
          )
          }
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Button
                type="submit"
                style={{
                  fontSize: "18px",
                }}
                color="primary"
                variant="contained"
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
