import { useLocation } from "react-router-dom";
import MainContainer from "../components/Container";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Button from '@mui/material/Button';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Map from "../components/Map";
import { useNavigate } from "react-router-dom";

export default function UserInfo() {
  const location = useLocation();
  const { user } = location.state;
  const navigate = useNavigate();
  return (
    <MainContainer>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="user info">
              {user.name[0]}
            </Avatar>
          }
          title={user.name}
          subheader={user.email}
        ></CardHeader>
        <CardContent>
            <Typography>Phone: {`${user.phone}`}</Typography>
            <Typography>Website: {`${user.website}`}</Typography>
            <Typography>Address: {`${user.address.suite} ${user.address.street} ${user.address.city} ${user.address.zipcode}`}</Typography>
          <Map user={user} />
          <Typography >Company: {user.company.name}</Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {user.company.catchPhrase} - {user.company.bs}
          </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={() => navigate('/')}>Back</Button>
        </CardActions>
      </Card>
    </MainContainer>
  );
}
