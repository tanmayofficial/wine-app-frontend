import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {
  FaUser,
  FaStore,
  FaBuilding,
  FaBoxes,
  FaHandHoldingUsd,
  FaWarehouse,
  FaListAlt,
  FaBook,
  FaIndustry,
  FaMoneyBill,
  FaRegFileAlt,
} from "react-icons/fa";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Sidebar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [masterFileOpen, setMasterFileOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleMasterFile = () => {
    setMasterFileOpen(!masterFileOpen);
  };

  const getIcon = (itemName) => {
    switch (itemName) {
      case "MasterFile":
        return <AssignmentIcon />;
      case "Data Entry":
        return <ListAltIcon />;
      case "Sale Report":
        return <MonetizationOnIcon />;
      case "Purchase Report":
        return <AddShoppingCartIcon />;
      case "Inventory Report":
        return <StoreIcon />;
      case "Excise Report":
        return <AssignmentReturnedIcon />;
      case "Audit":
        return <AccountBalanceIcon />;
      case "Accounts":
        return <AccountBalanceWalletIcon />;
      case "Utilities":
        return <DesignServicesIcon />;
      case "Customer Register":
        return <FaUser />;
      case "Suppliers Register":
        return <FaStore />;
      case "LPL Setup":
        return <FaBuilding />;
      case "Stock Register":
        return <FaBoxes />;
      case "Item Category Register":
        return <FaHandHoldingUsd />;
      case "Item Discount Register":
        return <FaWarehouse />;
      case "Dealer Category Discount Register":
        return <FaListAlt />;
      case "Minimum Stock Register":
        return <FaBook />;
      case "Scheme Register":
        return <FaIndustry />;
      case "Ledger Creation":
        return <FaMoneyBill />;
      case "Store Info":
        return <FaRegFileAlt />;
      case "Licensee Info":
        return <FaRegFileAlt />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: "transparent",
          backgroundImage:
            "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            TDR SOFTWARES
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            "MasterFile",
            "Data Entry",
            "Sale Report",
            "Purchase Report",
            "Inventory Report",
            "Excise Report",
            "Audit",
            "Accounts",
            "Utilities",
          ].map((text, index) => (
            <div key={text}>
              <ListItem disablePadding onClick={index === 0 ? toggleMasterFile : null}>
                <ListItemButton>
                  <ListItemIcon>
                    {getIcon(text)}
                    {index === 0 && (masterFileOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
              {/* Adding submenu for MasterFile */}
              {index === 0 && masterFileOpen && (
                <List sx={{ backgroundColor: "#f0f0f0" }}>
                  {[
                    "Customer Register",
                    "Suppliers Register",
                    "LPL Setup",
                    "Stock Register",
                    "Item Category Register",
                    "Item Discount Register",
                    "Dealer Category Discount Register",
                    "Minimum Stock Register",
                    "Scheme Register",
                    "Ledger Creation",
                    "Store Info",
                    "Licensee Info",
                  ].map((subText, subIndex) => (
                    <ListItem key={subText} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          {getIcon(subText)}
                        </ListItemIcon>
                        <ListItemText primary={subText} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              )}
              {index === 0 && <Divider />}
            </div>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Main>
    </Box>
  );
};

export default Sidebar;
