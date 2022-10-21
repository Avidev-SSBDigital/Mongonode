// import styled from "@emotion/styled/types/base";
import { FormControl, FormGroup, Input, InputLabel, Typography,styled,Button } from "@mui/material";

import { useState } from "react";
import { addUser } from "../service/Api";
const Container =styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & >  div{
    margin-top: 20px;
  }
  `

  const defaultValue={
    name:'',
    username:'',
    email:'',
    phone:''
  }
const Adduser = () => {
  const [user, setUser] = useState(defaultValue);

  const onValueChange =(e)=>{
     console.log(e.target.name,e.target.value);
       setUser({ ...user,[e.target.name]:e.target.value});
   console.log(user);
  }

  const addUserDetails = async()=>{
    await addUser(user);
  }
  return (
    <Container>
    <Typography variant="h4">Add user</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange ={(e) => onValueChange(e)} name ="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange ={(e) => onValueChange(e)} name="email"  />
      </FormControl>
      <FormControl>
        <InputLabel>username</InputLabel>
        <Input onChange ={(e) => onValueChange(e)} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone number</InputLabel>
        <Input onChange ={(e) => onValueChange(e)} name="phone" />
      </FormControl>
      <FormControl>
      <Button varient="contained" onClick ={() => addUserDetails()}>Add User</Button>
      
      </FormControl>
      </Container>
  );
};

export default Adduser;
