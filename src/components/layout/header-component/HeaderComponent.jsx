import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

const drawerWidth = 240;

const HeaderComponent = ({
  navItems,
  handleDrawerToggle,
  mobileOpen,
  isTablet,
}) => {
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", justifyContent:"center"}}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <LinkedInIcon sx={{ fontSize: 40, color: "#0077B5" }} />
        </Typography>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={{
        display: { xs: "block", sm: "block", md: "none" }, // Show for both mobile & tablet
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
      }}
    >
      {drawer}
    </Drawer>
  );
};

export default HeaderComponent;
