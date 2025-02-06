import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  InputBase,
  styled,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HeaderComponent from "./header-component/HeaderComponent";
import SearchIcon from "@mui/icons-material/Search";
import { Outlet } from "react-router-dom";
// import Pages from "../HomePage/Pages";

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

const navItems = [
  "Home",
  "My Network",
  "Jobs",
  "Messages",
  "Notifications",
  "Me",
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: "#ffffff" }}>
          <Container>
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  mr: 2,
                  display: { xs: "block", sm: "block", md: "none" },
                }}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                variant="h6"
                component="div"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <LinkedInIcon sx={{ fontSize: 40, color: "#0077B5" }} />
                <Search sx={{ color: "#000" }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: "#000" }}>
                    {item}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <nav>
          <HeaderComponent
            navItems={navItems}
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
            isTablet={isTablet}
          />
        </nav>
      </Box>
      {/* <Box>
        <Pages/>
      </Box> */}
      <Outlet />
    </>
  );
};

export default Header;
