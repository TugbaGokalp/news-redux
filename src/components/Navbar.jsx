import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../features/authSlice"

export default function Navbar() {
  const navigate = useNavigate();
const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(clearUser())
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            News
          </Typography>
          {user?.email && user.password &&(
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          )}
          {!user?.email && (
            <Button
              color="inherit"
              onClick={() => {
                navigate("/login");
              }}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
