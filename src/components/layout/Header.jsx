import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PeopleIcon from "@mui/icons-material/People";
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AppsIcon from "@mui/icons-material/Apps";
import PostAddIcon from "@mui/icons-material/PostAdd";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#eef3f8",
  "&:hover": {
    backgroundColor: "#dce6f1",
  },
  marginLeft: theme.spacing(2),
  width: "300px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  width: "100%",
}));

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#ffffff", color: "#000" }}
      >
        <Container>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <LinkedInIcon sx={{ fontSize: 40, color: "#0077B5" }} />
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
            <Box sx={{ display: "", alignItems: "center", gap: 2 }}>
              <IconButton
                
                sx={{
                  // display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <HomeIcon sx={{ fontSize: 28 }} />
                <Typography variant="caption">Home</Typography>
              </IconButton>
              <IconButton
                sx={{
                  // display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                
              >
                <PeopleIcon />
                <Typography variant="caption">My Network</Typography>
              </IconButton>
              <IconButton
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                }}
                
              >
                <BusinessCenterIcon />
                <Typography variant="caption">Jobs</Typography>
              </IconButton>
              <IconButton
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                }}
                
              >
                <MessageIcon />
                {/* <Badge className="" badgeContent={4} color="error" /> */}
                <Typography variant="caption">Messaging</Typography>
              </IconButton>
              <IconButton
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                }}
                
              >
                <NotificationsIcon />
                <Badge badgeContent={5} color="error" />
                <Typography variant="caption">Notifications</Typography>
              </IconButton>
              <IconButton
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                }}
                
              >
                <AccountCircle />
                <Typography variant="caption">Me</Typography>
              </IconButton>
              <IconButton
                 className="ms-4"
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                }}
                
              >
                <AppsIcon />
                <Typography variant="caption">For Business</Typography>
              </IconButton>
              <IconButton 
           
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                }}
                
              >
                <PostAddIcon />
                <Typography variant="caption">Post a job</Typography>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
