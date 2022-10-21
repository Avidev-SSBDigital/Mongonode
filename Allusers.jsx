import { useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";

import { getUsers } from "../service/Api.js";

const Allusers = () => {
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    console.log(response);
  }
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
        </TableRow>
      </TableHead>
      <TableBody></TableBody>
    </Table>
  );
};

export default Allusers;
