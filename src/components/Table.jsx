import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import IconButton from "@mui/material/IconButton";
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import { useNavigate } from "react-router-dom";

export default function Tables({ users , filterUser }) {
    const navigate = useNavigate();
    const handleViewUser = (user) => { 
        navigate(`/user/${user.id}`, {state : { user }})
    } 
  return (
    <>
      <Box
        component="span"
        m={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Information
        </Typography>

        <TextField
          id="search"
          label="Search user"
          placeholder="Search user by name"
          variant="outlined"
          size="small"
          onChange={(e) => filterUser(e,users)}
        />
      </Box>

      <Table size="small" sx={{ minWidth: 650 }} >
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <IconButton
                  aria-label="view user"
                  color="success"
                  onClick={() => handleViewUser(user)}
                >
                  <ContactPageRoundedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
