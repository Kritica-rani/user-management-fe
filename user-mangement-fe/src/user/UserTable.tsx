import type React from "react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useUsers } from "../context/UserContext";

interface Person {
  id: number;
  name: string;
  email: string;
  age: number;
}

const UserTable: React.FC = () => {
  const { users, deleteUserInfo } = useUsers();
  const handleDelete = (id: number) => {
    deleteUserInfo(id);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Age</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length > 0 ? (
            users.map((person) => (
              <TableRow
                key={person.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {person.name}
                </TableCell>
                <TableCell>{person.email}</TableCell>
                <TableCell>{person.age}</TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="delete"
                    color="error"
                    onClick={() => handleDelete(person.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4}>
                <Box sx={{ py: 3, textAlign: "center" }}>
                  <Typography variant="body1" color="text.secondary">
                    No data available
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
