// import styled from "@emotion/styled/types/base";
import { FormControl, FormGroup, Input, InputLabel, Typography,styled,Button } from "@mui/material";

import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { editUser, getUser } from "../service/Api";
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
const Edituser = () => {
  const [user, setUser] = useState(defaultValue);

  let navigate = useNavigate();

  const { id } =useParams();

  useEffect(()=>{
    loadUserDetails();

},[])
const loadUserDetails =async()=>{
    const response =await getUser(id);
    setUser(response.data);
}

  const onValueChange =(e)=>{
     console.log(e.target.name,e.target.value);
       setUser({ ...user,[e.target.name]:e.target.value});
   console.log(user);
  }

  const editUserDetails = async()=>{
    await editUser(user,id);
    navigate('/all')
  }
  return (
    <Container>
    <Typography variant="h4">Edit user</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange ={(e) => onValueChange(e)} name ="name" value={user.name} />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange ={(e) => onValueChange(e)} name="email" value={user.email} />
      </FormControl>
      <FormControl>
        <InputLabel>username</InputLabel>
        <Input onChange ={(e) => onValueChange(e)} name="username" value={user.username}/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone number</InputLabel>
        <Input onChange ={(e) => onValueChange(e)} name="phone" value={user.phone} />
      </FormControl>
      <FormControl>
      <Button varient="contained" onClick ={() => editUserDetails()}>Edit user</Button>
      
      </FormControl>
      </Container>
  );
};

export default Edituser;
