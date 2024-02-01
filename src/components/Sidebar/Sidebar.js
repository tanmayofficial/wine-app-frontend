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

const drawerWidth = 328;

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
  const [dataEntryOpen, setDataEntryOpen] = useState(false);
  const [saleReportOpen, setSaleReportOpen] = useState(false);
  const [purchaseReportOpen, setPurchaseReportOpen] = useState(false);
  const [inventoryReportOpen, setInventoryReportOpen] = useState(false);
  const [exciseReportOpen, setExciseReportOpen] = useState(false);
  const [auditAndAccountsOpen, setAuditAndAccountsOpen] = useState(false); 
  const [utilityOpen, setUtilityOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleMasterFile = () => {
    setMasterFileOpen(!masterFileOpen);
  };

  const toggleDataEntry = () => {
    setDataEntryOpen(!dataEntryOpen);
  };

  const toggleSaleReport = () => {
    setSaleReportOpen(!saleReportOpen);
  };

  const togglePurchaseReport = () => {
    setPurchaseReportOpen(!purchaseReportOpen);
  };

  const toggleInventoryReport = () => {
    setInventoryReportOpen(!inventoryReportOpen);
  };

  const toggleExciseReport = () => {
    setExciseReportOpen(!exciseReportOpen);
  };

  const toggleAuditAndAccounts = () => {
    setAuditAndAccountsOpen(!auditAndAccountsOpen);
  };

  const toggleUtility = () => {
    setUtilityOpen(!utilityOpen);
  };

  const getIcon = (itemName) => {
    switch (itemName) {
      case "Master File":
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
      case "Audit and Accounts":
        return <AccountBalanceIcon />;
      // case "":
      //   return <AccountBalanceWalletIcon />;
      case "Utility":
        return <DesignServicesIcon />;
      // Master File submenu icons
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
      // Data Entry submenu icons
      case "Sale Bill":
        return <MonetizationOnIcon />;
      case "Purchase Entry":
        return <AddShoppingCartIcon />;
      case "Stock Transfer":
        return <StoreIcon />;
      case "Party Payment":
        return <AccountBalanceIcon />;
      case "General Payment":
        return <AccountBalanceWalletIcon />;
      case "Customer Receipt":
        return <FaUser />;
      case "General Receipt":
        return <FaRegFileAlt />;
      case "Cash Deposit to Bank":
        return <FaMoneyBill />;
      case "Cash Withdrawn from Bank":
        return <FaMoneyBill />;
      case "Journal Entry":
        return <FaBook />;
      // Sale Report submenu icons
      case "Sale Report (Summary)":
        return <MonetizationOnIcon />;
      case "Item Wise Sale Report":
        return <FaBoxes />;
      case "Daily Sale Report (DSR)":
        return <AssignmentIcon />;
      case "Daily Profit Report":
        return <FaMoneyBill />;
      case "Sale Status Report":
        return <AccountBalanceIcon />;
      case "Daily Item Sale Status (Category)":
        return <FaHandHoldingUsd />;
      case "Daily Item Sale Status (Brand)":
        return <FaHandHoldingUsd />;
      case "Daily Item Status":
        return <FaBoxes />;
      case "Customer Due Report":
        return <FaUser />;
      case "Salesman Report":
        return <FaUser />;
      case "Receipt Report":
        return <FaRegFileAlt />;
      case "Bill Wise Collection Report":
        return <FaRegFileAlt />;
      case "Dealer Sale Discount Chart":
        return <FaListAlt />;
      case "Customer Transaction Details":
        return <FaUser />;
      case "Profit on Sale":
        return <FaMoneyBill />;
      // Purchase Report submenu icons
      case "Purchase Report (Summary)":
        return <AddShoppingCartIcon />;
      case "Item Wise Purchase Report":
        return <FaBoxes />;
      case "Daily Purchase Report (DPR)":
        return <AssignmentIcon />;
      case "Suppliers Balance Report":
        return <AccountBalanceIcon />;
      case "Payment Report":
        return <AccountBalanceWalletIcon />;
      case "Bill Wise Payment Report":
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
          {/* Adding submenu for MasterFile */}
          <ListItem disablePadding onClick={toggleMasterFile}>
            <ListItemButton>
              <ListItemIcon>{getIcon("Master File")}</ListItemIcon>
              <ListItemText primary={"Master File"} />
              <ListItemIcon>
                {masterFileOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          {masterFileOpen && (
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
                    <ListItemIcon>{getIcon(subText)}</ListItemIcon>
                    <ListItemText primary={subText} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}

          {/* Adding submenu for Data Entry */}
          <ListItem disablePadding onClick={toggleDataEntry}>
            <ListItemButton>
              <ListItemIcon>
                <ListAltIcon />
              </ListItemIcon>
              <ListItemText primary="Data Entry" />
              <ListItemIcon>
                {dataEntryOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          {dataEntryOpen && (
            <List sx={{ backgroundColor: "#f0f0f0" }}>
              {[
                "Sale Bill",
                "Purchase Entry",
                "Stock Transfer",
                "Party Payment",
                "General Payment",
                "Customer Receipt",
                "General Receipt",
                "Cash Deposit to Bank",
                "Cash Withdrawn from Bank",
                "Journal Entry",
              ].map((subText, subIndex) => (
                <ListItem key={subText} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{getIcon(subText)}</ListItemIcon>
                    <ListItemText primary={subText} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}

          {/* Adding submenu for Sale Report */}
          <ListItem disablePadding onClick={toggleSaleReport}>
            <ListItemButton>
              <ListItemIcon>{getIcon("Sale Report")}</ListItemIcon>
              <ListItemText primary={"Sale Report"} />
              <ListItemIcon>
                {saleReportOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          {saleReportOpen && (
            <List sx={{ backgroundColor: "#f0f0f0" }}>
              {[
                "Sale Report (Summary)",
                "Item Wise Sale Report",
                "Daily Sale Report (DSR)",
                "Daily Profit Report",
                "Sale Status Report",
                "Daily Item Sale Status (Category)",
                "Daily Item Sale Status (Brand)",
                "Daily Item Status",
                "Customer Due Report",
                "Salesman Report",
                "Receipt Report",
                "Bill Wise Collection Report",
                "Dealer Sale Discount Chart",
                "Customer Transaction Details",
                "Profit on Sale",
              ].map((subText, subIndex) => (
                <ListItem key={subText} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{getIcon(subText)}</ListItemIcon>
                    <ListItemText primary={subText} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}

          {/* Adding submenu for Purchase Report */}
          <ListItem disablePadding onClick={togglePurchaseReport}>
            <ListItemButton>
              <ListItemIcon>{getIcon("Purchase Report")}</ListItemIcon>
              <ListItemText primary={"Purchase Report"} />
              <ListItemIcon>
                {purchaseReportOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          {purchaseReportOpen && (
            <List sx={{ backgroundColor: "#f0f0f0" }}>
              {[
                "Purchase Report (Summary)",
                "Item Wise Purchase Report",
                "Daily Purchase Report (DPR)",
                "Suppliers Balance Report",
                "Payment Report",
                "Bill Wise Payment Report",
              ].map((subText, subIndex) => (
                <ListItem key={subText} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{getIcon(subText)}</ListItemIcon>
                    <ListItemText primary={subText} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}

          {/* Adding submenu for Inventory Report */}
          <ListItem disablePadding onClick={toggleInventoryReport}>
            <ListItemButton>
              <ListItemIcon>{getIcon("Inventory Report")}</ListItemIcon>
              <ListItemText primary={"Inventory Report"} />
              <ListItemIcon>
                {inventoryReportOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          {inventoryReportOpen && (
            <List sx={{ backgroundColor: "#f0f0f0" }}>
              {[
                "Transfer Report",
                "Urgent Report",
                "Stock Report",
                "Godown/Showroon Ledger",
                "FL Beer CS Ledger",
                "Stock Statement",
                "On Date Report",
                "Brand/Pack Ledger By MRP Range",
                "Item Rate Chart",
                "Bar Code List",
              ].map((subText, subIndex) => (
                <ListItem key={subText} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{getIcon(subText)}</ListItemIcon>
                    <ListItemText primary={subText} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}

          {/* Adding submenu for Excise Report */}
          <ListItem disablePadding onClick={toggleExciseReport}>
            <ListItemButton>
              <ListItemIcon>{getIcon("Excise Report")}</ListItemIcon>
              <ListItemText primary={"Excise Report"} />
              <ListItemIcon>
                {exciseReportOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          {exciseReportOpen && (
            <List sx={{ backgroundColor: "#f0f0f0" }}>
              {[
                "Monthly Online Statement - Excise",
                "Stock Statement(Pcs)",
                "Stock Statement(All) Excise",
                "Stock Statement-form1-excise",
                "Category Register(All)",
                "Category Register(Godown)",
                "Category Register(Counter)",
                "Brand Register(Godown)",
                "Brand Register(All)",
                "Brand Register(Counter)",
                "On Date Stock Register",
                "Daily Stock Book",
                "Monthly Comparative Figure",
                "Monthly Category Sales Figure",
                "Monthly Brand Sale Figure",
              ].map((subText, subIndex) => (
                <ListItem key={subText} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{getIcon(subText)}</ListItemIcon>
                    <ListItemText primary={subText} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}

          {/* Adding submenu for Audit & Accounts */}
          <ListItem disablePadding onClick={toggleAuditAndAccounts}>
            <ListItemButton>
              <ListItemIcon>{getIcon("Audit and Accounts")}</ListItemIcon>
              <ListItemText primary={"Audit and Accounts"} />
              <ListItemIcon>
                {auditAndAccountsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          {auditAndAccountsOpen && (
            <List sx={{ backgroundColor: "#f0f0f0" }}>
              {[
                "Ledger",
                "Cash Book",
                "Bank Book",
                "Journal Report",
                "Daily Sales Figure",
                "Monthly Sales Figure",
                "Daily Purchase Figure",
                "Monthly Purchase Figure",
                "Govt. Round Off, special Purposes, Tds Payment On Purchase",
                "Fl Status",
                "Trial Balance",
                "Profit And Loss A/c",
                "Balance Sheet",                
              ].map((subText, subIndex) => (
                <ListItem key={subText} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{getIcon(subText)}</ListItemIcon>
                    <ListItemText primary={subText} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}

          {/* Adding submenu for Utility */}
          <ListItem disablePadding onClick={toggleUtility}>
            <ListItemButton>
              <ListItemIcon>{getIcon("Utility")}</ListItemIcon>
              <ListItemText primary={"Utility"} />
              <ListItemIcon>
                {utilityOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          {utilityOpen && (
            <List sx={{ backgroundColor: "#f0f0f0" }}>
              {[
                "Backup",
                "Admin Panel",
                "Stock Updation",
                "User Control",
                "3 Years Sale Report",
                "Monthly MRP Wise Sale",
                "Stock Modify",
                "Dsr Modify",
                "Alternate Sale",         
              ].map((subText, subIndex) => (
                <ListItem key={subText} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{getIcon(subText)}</ListItemIcon>
                    <ListItemText primary={subText} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
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
