import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
require('dotenv').config()
const newURL = process.env.REACT_APP_API_URL;


const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%',
    }
}));

export default function ViewDetails(props) {
    const { onSubmitClose } = props;
    const classes = useStyles();

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

            setprimarySkill(response.data[0].primarySkill);
            setprimaryActivity(response.data[0].primaryActivity);
            setDragMachineOp(response.data[0].DragMachineOp);
            setDragMachineOpAir(response.data[0].DragMachineOpAir);
            setDragMachineCoOp(response.data[0].DragMachineCoOp);
            setCopeMachineOp(response.data[0].CopeMachineOp);
            setCopeMachineCoOp(response.data[0].CopeMachineCoOp);
            setCopeMachineOpAir(response.data[0].CopeMachineOpAir);
            setDragMouldPaintingOp(response.data[0].DragMouldPaintingOp);
            setCoreSettingOp(response.data[0].CoreSettingOp);
            setCoreTranferFixtureOp(response.data[0].CoreTranferFixtureOp);
            setBoxClosingOp(response.data[0].BoxClosingOp);
            setVentingOp(response.data[0].VentingOp);
            setCopeBoxPreprationOp(response.data[0].CopeBoxPreprationOp);
            setClampingOp(response.data[0].ClampingOp);
            setMoldBoxTransferOp(response.data[0].MoldBoxTransferOp);
            setClampAndPinRemovingOp(response.data[0].ClampAndPinRemovingOp);
            setPouringCraneOp(response.data[0].PouringCraneOp);
            setPouringOp(response.data[0].PouringOp);
            setKOutCraneOp(response.data[0].KOutCraneOp);
            setKOutCraneCoOp(response.data[0].KOutCraneCoOp);
            setKOutOp(response.data[0].KOutOp);
            setCastingTransferOp(response.data[0].CastingTransferOp);
            setEmptyBoxTrasferOp(response.data[0].EmptyBoxTrasferOp);
            setSandPlantOp(response.data[0].SandPlantOp);
            setSandPlantCoOp(response.data[0].SandPlantCoOp);
            setNewSandAddOp(response.data[0].NewSandAddOp);
            setCompactibilityCheckingOp(response.data[0].CompactibilityCheckingOp);

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
    const [subdept, setSubDept] = useState("");
    const [location, setLocation] = useState("");
    const [medicalcheckup, setMedicalCheckup] = useState("");
    const [education, setEducation] = useState("");
    const [ctc, setCTC] = useState("");
    const [aadhar, setAadhar] = useState("");
    const [pan, setPan] = useState("");
    const [esi, setESI] = useState("");
    const [pf, setPF] = useState("");
    const [primarySkill, setprimarySkill] = useState("");
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

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const [rejectcmt, setRejectCmt] = useState("");

    const handleReject = (event) => {
        event.preventDefault();
        axios.post(newURL+"/emp/rejectVerification", {
            token: token,
            rejectcmt: rejectcmt
        },
            setOpen(false),
            onSubmitClose());
        window.location.reload();
    };

    const handleClose = () => {
        setOpen(false);
    };

    const verifyEmployee = (event) => {
        event.preventDefault();
        if (token !== '') {
            axios.post(newURL+"/emp/verifyEmployee", {
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
                enddate: enddate,
                role: role,
                type: type,
                medicalcheckup: medicalcheckup,
                education: education,
                ctc: ctc,
                aadhar: aadhar,
                pan: pan,
                esi: esi,
                pf: pf,
                primarySkill: primarySkill,
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
                onSubmitClose());
            window.location.reload();
        }
    };

    const updateEmployee = (event) => {
        // event.preventDefault();
            axios.post(newURL+"/emp/updateEmployee", {
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
                enddate: enddate,
                role: role,
                type: type,
                medicalcheckup: medicalcheckup,
                education: education,
                ctc: ctc,
                aadhar: aadhar,
                pan: pan,
                esi: esi,
                pf: pf,
                primarySkill: primarySkill,
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
                onSubmitClose());
            window.location.reload();
        
    };

    if (!token) {
        return "Loading...";
    }
    return (
        <div>
            <form onSubmit={verifyEmployee}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            disabled
                            label="Token"
                            fullWidth
                            value={token}
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
                    <Grid item xs={12} sm={4}>
                <FormControl required className={classes.formControl}>
                  <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Primary Activity</InputLabel>
                  <Select
                    native
                    value={primaryActivity}
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
                    value={primarySkill}
                    onChange={(event) => { setprimarySkill(event.target.value); }}
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
                    value={DragMachineOp}
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
                    value={DragMachineOpAir}
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
                    value={DragMachineCoOp}
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
                    value={CopeMachineOp}
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
                    value={CopeMachineCoOp}
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
                    value={CopeMachineOpAir}
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
                    value={DragMouldPaintingOp}
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
                    value={CoreSettingOp}
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
                    value={CoreTranferFixtureOp}
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
                    value={BoxClosingOp}
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
                    value={VentingOp}
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
                    value={CopeBoxPreprationOp}
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
                    value={ClampingOp}
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
                    value={MoldBoxTransferOp}
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
                    value={ClampAndPinRemovingOp}
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
                    value={PouringCraneOp}
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
                    value={PouringOp}
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
                    value={KOutCraneOp}
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
                    value={KOutCraneCoOp}
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
                    value={KOutOp}
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
                    value={CastingTransferOp}
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
                    value={EmptyBoxTrasferOp}
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
                    value={SandPlantOp}
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
                    value={SandPlantCoOp}
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
                    value={NewSandAddOp}
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
                    value={CompactibilityCheckingOp}
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
                    <Grid item xs={12} sm={4}>
                        <Button variant="contained" style={{backgroundColor: "orange",marginLeft: "70px",marginTop: "15px"}} onClick={updateEmployee}>UPDATE</Button>
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
            </form>
            <div>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Reject Comment of {name}</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="rejectcmt"
                            label="Reject Comment"
                            type="text"
                            fullWidth
                            onChange={(event) => { setRejectCmt(event.target.value); }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleReject} color="primary">
                            Reject
                        </Button>
                        <Button onClick={handleClose} color="secondary">
                            Cancle
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}
