import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useGetUsers } from "../../api/getUsers";

export interface User {
  id: number;
  email: string;
}
export const Users = () => {
  const newUsers = useGetUsers();

  return (
    <Box
      sx={{
        margin: "50px 20px 50px 50px",
        display: "flex",
        flexDirection: "column",
        gap: '40px',
        minHeight: '70vh'
      }}
    >
      <Typography variant="h4">Новые заявки</Typography>
      {/* {newUsers && ( */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {newUsers.map((user) => ( */}
              {/* <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      {/* )} */}
    </Box>
  );
};
