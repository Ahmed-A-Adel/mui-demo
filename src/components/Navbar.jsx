import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Mail, MailLock, Notifications, Pages } from "@mui/icons-material";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ themeProps }) => ({
  backgroundColor: "white",
  padding: " 0 10px",
  borderRadius: "5px",
  width: "40%",
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  alignItems: "center",

  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const StyledIcon = styled(Box)(({ theme }) => ({
  padding: " 0 10px",
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  // __________ Functions _____________________
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <AppBar component={"nav"} position="sticky" s>
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{ display: { xs: "none", sm: "inline-block" } }}
        >
          が目ばれ
        </Typography>
        <AcUnitIcon
          sx={{
            display: { xs: "inline-block", sm: "none" },
            marginRight: "5px",
          }}
        />
        <Search>
          <InputBase placeholder="search ..."></InputBase>{" "}
        </Search>
        <StyledIcon>
          <Badge badgeContent={4} color="error">
            <Mail></Mail>
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications></Notifications>
          </Badge>
          <Avatar
            sx={{ cursor: "pointer" }}
            onClick={handleOpen}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr9wy-2dQHKS2J80vbRj3SSAXscCsTBgq46Q&usqp=CAU"
          />
        </StyledIcon>
        <UserBox>
          <Typography variant="p">若部</Typography>
          <Avatar
            sx={{ cursor: "pointer" }}
            onClick={handleOpen}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr9wy-2dQHKS2J80vbRj3SSAXscCsTBgq46Q&usqp=CAU"
          />
        </UserBox>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
