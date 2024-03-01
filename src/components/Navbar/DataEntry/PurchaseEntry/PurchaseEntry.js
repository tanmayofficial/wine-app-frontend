import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  MenuItem,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";


const PurchaseEntry = () => {
  const todaysDate = dayjs();
  const [supplierName, setSupplierName] = useState("");
  const [passNo, setPassNo] = useState("");
  const [passDate, setPassDate] = useState(todaysDate);
  const [address, setAddress] = useState("");
  const [billNo, setBillNo] = useState("");
  const [billDate, setBillDate] = useState(todaysDate);
  const [stockIn, setStockIn] = useState("");
  const [entrtyNo, setEntrtyNo] = useState("");

  const [tableData, setTableData] = useState(
    Array.from({ length: 5 }, () => ({
      itemCode: "",
      itemDescription: "",
      mrp: "",
      batch: "",
      case: "",
      pcs: "",
      brk: "",
      purRate: "",
      btlRate: "",
      gro: "",
      sp: "",
      amount: "",
    }))
  );

  const handleItemCodeChange = (event, index, field) => {
    const { value } = event.target;
    const dummyData = {
      itemCode: "12345",
      itemDescription: "item1",
      mrp: "550",
      batch: "0",
      case: "",
      pcs: "1",
      brk: "2",
      purRate: "450",
      btlRate: "550",
      gro: "0",
      sp: "0",
      amount: "550",
    };
    const newData = [...tableData];
    newData[index] = { ...newData[index], ...dummyData };
    setTableData(newData);
  };

  const handlePassDateChange = (selectedDate) => {
    setPassDate(selectedDate);
  }

  const handleBillDateChange = (selectedDate) => {
    setBillDate(selectedDate);
  }

  return (
    <form>
      <Box sx={{ p: 2, width: "900px" }}>
        <Typography variant="h5" component="div" gutterBottom>
          Purchase Entry
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Purchase Bills Entry
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              name="supplierName"
              label="Supplier Name"
              variant="outlined"
              type="text"
              fullWidth
              className="form-field"
              value={supplierName}
              onChange={(e) => setSupplierName(e.target.value)}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              name="passNo"
              label="Pass No."
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={passNo}
              onChange={(e) => setPassNo(e.target.value)}
            />
          </Grid>

          <Grid item xs={3}>
            <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
              <DatePicker
                name="passDate"
                label="Pass Date"
                value={passDate}
                sx={{}}
                onChange={handlePassDateChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                )}
                fullWidth
              />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={3}>
            <TextField
              name="address"
              label="Address"
              variant="outlined"
              type="text"
              fullWidth
              className="form-field"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              name="billNo"
              label="Bill No."
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={billNo}
              onChange={(e) => setBillNo(e.target.value)}
            />
          </Grid>

          <Grid item xs={3}>
            <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
              <DatePicker
                name="billDate"
                label="Bill Date"
                value={billDate}
                onChange={handleBillDateChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                )}
                fullWidth
              />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={3}>
            <TextField
              select
              name="stockIn"
              label="Stock in"
              variant="outlined"
              type="text"
              fullWidth
              className="form-field"
              value={stockIn}
              onChange={(e) => setStockIn(e.target.value)}
            >
              <MenuItem value="item1">Item 1</MenuItem>
              <MenuItem value="item2">Item 2</MenuItem>
              <MenuItem value="item3">Item 3</MenuItem>
              <MenuItem value="item4">Item 4</MenuItem>
              <MenuItem value="item5">Item 5</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={3}>
            <TextField
              name="entrtyNo"
              label="Entry No."
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={entrtyNo}
              onChange={(e) => setEntrtyNo(e.target.value)}
            />
          </Grid>

          {/* <Grid item xs={3}>
            <TextField
              name="purchaserateonmrp"
              label="Purchase Rate on MRP (%)"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid> */}
        </Grid>

        <TableContainer component={Paper} sx={{ marginTop: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item Code</TableCell>
                <TableCell>Item Description</TableCell>
                <TableCell>MRP</TableCell>
                <TableCell>Batch</TableCell>
                <TableCell>Case</TableCell>
                <TableCell>Pcs</TableCell>
                <TableCell>Brk</TableCell>
                <TableCell>Pur Rate</TableCell>
                <TableCell>Btl Rate</TableCell>
                <TableCell>GRO</TableCell>
                <TableCell>SP</TableCell>
                <TableCell>Amt(₹)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ padding: '8px' }}>
                    <TextField
                      size="small"
                      value={row.itemCode}
                      onChange={(event) =>
                        handleItemCodeChange(event, index, "itemCode")
                      }
                      fullWidth
                      // InputProps={{ readOnly: row.itemDescription !== "" }}
                    />
                  </TableCell>
                  <TableCell sx={{ padding: '8px' }}>
                    <TextField
                      select
                      size="small"
                      value={row.itemDescription}
                      onChange={(event) =>
                        handleItemCodeChange(event, index, "itemDescription")
                      }
                      fullWidth
                    >
                      <MenuItem value="item1">Item 1</MenuItem>
                      <MenuItem value="item2">Item 2</MenuItem>
                      <MenuItem value="item3">Item 3</MenuItem>
                      <MenuItem value="item4">Item 4</MenuItem>
                      <MenuItem value="item5">Item 5</MenuItem>
                    </TextField>
                  </TableCell>
                  <TableCell sx={{ padding: '8px' }}>
                    <TextField
                      size="small"
                      value={row.mrp}
                      onChange={(event) =>
                        handleItemCodeChange(event, index, "mrp")
                      }
                      fullWidth
                    />
                  </TableCell>
                  <TableCell sx={{ padding: '8px' }}>
                    <TextField
                      size="small"
                      value={row.batch || ""}
                      onChange={(event) =>
                        handleItemCodeChange(event, index, "batch")
                      }
                      fullWidth
                    />
                  </TableCell>
                  <TableCell sx={{ padding: '8px' }}>
                    <TextField
                      size="small"
                      value={row.case || ""}
                      onChange={(event) =>
                        handleItemCodeChange(event, index, "case")
                      }
                      fullWidth
                    />
                  </TableCell>
                  <TableCell sx={{ padding: '8px' }}>
                    <TextField
                      size="small"
                      value={row.pcs || ""}
                      onChange={(event) =>
                        handleItemCodeChange(event, index, "pcs")
                      }
                      fullWidth
                    />
                  </TableCell>
                  <TableCell sx={{ padding: '8px' }}>
                    <TextField
                      size="small"
                      value={row.brk || ""}
                      onChange={(event) =>
                        handleItemCodeChange(event, index, "brk")
                      }
                      fullWidth
                    />
                  </TableCell>
                  <TableCell sx={{ padding: '8px' }}>
                    <TextField
                      size="small"
                      value={row.purRate || ""}
                      onChange={(event) =>
                        handleItemCodeChange(event, index, "purRate")
                      }
                      fullWidth
                    />
                  </TableCell>
                  <TableCell sx={{ padding: '8px' }}>
                    <TextField
                      size="small"
                      value={row.btlRate || ""}
                      onChange={(event) =>
                        handleItemCodeChange(event, index, "btlRate")
                      }
                      fullWidth
                    />
                  </TableCell>
                  <TableCell sx={{ padding: '8px' }}>
                    <TextField
                      size="small"
                      value={row.gro || ""}
                      onChange={(event) =>
                        handleItemCodeChange(event, index, "gro")
                      }
                      fullWidth
                    />
                  </TableCell>
                  <TableCell sx={{ padding: '8px' }}>
                    <TextField
                      size="small"
                      value={row.sp || ""}
                      onChange={(event) =>
                        handleItemCodeChange(event, index, "sp")
                      }
                      fullWidth
                    />
                  </TableCell>
                  <TableCell sx={{ padding: '8px' }}>
                    <TextField
                      size="small"
                      value={row.amount || ""}
                      onChange={(event) =>
                        handleItemCodeChange(event, index, "amount")
                      }
                      fullWidth
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            color="primary"
            size="large"
            variant="outlined"
            onClick={() => {}}
            sx={{ marginTop: 3, marginRight: 2 }}
          >
            Save
          </Button>
          <Button
            color="secondary"
            size="large"
            variant="outlined"
            onClick={() => {}}
            sx={{ marginTop: 3, marginRight: 2 }}
          >
            Print
          </Button>
          <Button
            color="error"
            size="large"
            variant="outlined"
            onClick={() => {}}
            sx={{ marginTop: 3 }}
          >
            Clear
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default PurchaseEntry;
