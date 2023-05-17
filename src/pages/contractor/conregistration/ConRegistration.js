import React, { useState } from 'react';
import Axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
require('dotenv').config()
const newURL = process.env.REACT_APP_API_URL;
console.log("18",newURL)

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  }
}));

export default function ConRegistration(props) {
  const { onSubmitClose } = props;
  const classes = useStyles();

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
  const [dept, setDepartment] = useState("");
  const [joindate, setJoinDate] = useState("");
  const [contractor, setContractor] = useState("");

  const newContractor = (event) => {
    event.preventDefault();
    Axios.post(newURL+"/con/addContractor", {
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
      dept: dept,
      joindate: joindate,
      contractor: contractor
    },
      onSubmitClose());
    window.location.reload();
  };

  return (
    <div>
      <form onSubmit={newContractor}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              label="Full Name/Company Name"
              fullWidth
              onChange={(event) => { setName(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
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
              label="Age"
              fullWidth
              onChange={(event) => { setAge(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row aria-label="gender" name="gender" defaultValue="male" onChange={(event) => { setGender(event.target.value) }} >
              <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
              <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
            </RadioGroup>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormLabel component="legend">Marital Status</FormLabel>
            <RadioGroup row aria-label="mStatus" name="mStatus" defaultValue="married" onChange={(event) => { setMaritalStatus(event.target.value) }}>
              <FormControlLabel value="married" control={<Radio color="primary" />} label="Married" />
              <FormControlLabel value="unmarried" control={<Radio color="primary" />} label="Unmarried" />
              <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
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
              required
              label="City"
              fullWidth
              onChange={(event) => { setCity(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField id="state"
              required
              name="state"
              label="State/Province/Region"
              fullWidth
              onChange={(event) => { setState(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              label="Zip/Postal code"
              fullWidth
              onChange={(event) => { setZipCode(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              label="Country"
              fullWidth
              onChange={(event) => { setCountry(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              label="Email"
              fullWidth
              onChange={(event) => { setEmail(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
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
              required
              label="Join Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              onChange={(event) => { setJoinDate(event.target.value); }}
            />
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
                <option value="Anywhere">Anywhere</option>
                <option value="Core Shop">Core Shop</option>
                <option value="Moulding">Moulding</option>
                <option value="Melting">Melting</option>
                <option value="Fettling">Fettling</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              label="Contractor"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              onChange={(event) => { setContractor(event.target.value); }}
            />
          </Grid>
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
