import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AppBarComponent from "./AppBar";
import { sidebarIcons } from "./SidebarIcons";

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


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBarComponent open={open} handleDrawerOpen={handleDrawerOpen} />
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
              <ListItemIcon>{sidebarIcons({ itemName: "Master File" })}</ListItemIcon>
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
                    <ListItemIcon>{sidebarIcons({ itemName: subText })}</ListItemIcon>
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
                    <ListItemIcon>{sidebarIcons({ itemName: subText})}</ListItemIcon>
                    <ListItemText primary={subText} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}

          {/* Adding submenu for Sale Report */}
          <ListItem disablePadding onClick={toggleSaleReport}>
            <ListItemButton>
              <ListItemIcon>{sidebarIcons({ itemName: "Sale Report" })}</ListItemIcon>
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
                    <ListItemIcon>{sidebarIcons({ itemName: subText })}</ListItemIcon>
                    <ListItemText primary={subText} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}

          {/* Adding submenu for Purchase Report */}
          <ListItem disablePadding onClick={togglePurchaseReport}>
            <ListItemButton>
              <ListItemIcon>{sidebarIcons({ itemName: "Purchase Report" })}</ListItemIcon>
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
                    <ListItemIcon>{sidebarIcons({ itemName: subText })}</ListItemIcon>
                    <ListItemText primary={subText} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}

          {/* Adding submenu for Inventory Report */}
          <ListItem disablePadding onClick={toggleInventoryReport}>
            <ListItemButton>
              <ListItemIcon>{sidebarIcons({ itemName: "Inventory Report" })}</ListItemIcon>
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
                    <ListItemIcon>{sidebarIcons({ itemName: subText })}</ListItemIcon>
                    <ListItemText primary={subText} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}

          {/* Adding submenu for Excise Report */}
          <ListItem disablePadding onClick={toggleExciseReport}>
            <ListItemButton>
              <ListItemIcon>{sidebarIcons({ itemName: "Excise Report" })}</ListItemIcon>
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
                    <ListItemIcon>{sidebarIcons({ itemName: subText })}</ListItemIcon>
                    <ListItemText primary={subText} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}

          {/* Adding submenu for Audit & Accounts */}
          <ListItem disablePadding onClick={toggleAuditAndAccounts}>
            <ListItemButton>
              <ListItemIcon>{sidebarIcons({itemName: "Audit and Accounts" })}</ListItemIcon>
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
                    <ListItemIcon>{sidebarIcons({ itemName: subText })}</ListItemIcon>
                    <ListItemText primary={subText} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}

          {/* Adding submenu for Utility */}
          <ListItem disablePadding onClick={toggleUtility}>
            <ListItemButton>
              <ListItemIcon>{sidebarIcons({itemName: "Utility" })}</ListItemIcon>
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
                    <ListItemIcon>{sidebarIcons({ itemName: subText})}</ListItemIcon>
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
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est.
        </Typography>
      </Main>
    </Box>
  );
};

export default Sidebar;
