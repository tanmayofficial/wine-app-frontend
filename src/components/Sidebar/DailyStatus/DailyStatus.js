import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const DailyStatus = () => {
  const [value, setValue] = React.useState([
    dayjs("2024-04-17"),
    dayjs("2024-04-21"),
  ]);

  return (
    <form>
      <Box sx={{ p: 2, width: "900px" }}>
        <Typography variant="h5" component="div" gutterBottom>
          Daily Status
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DateRangePicker"]}
            sx={{ marginBottom: "16px" }}
          >
            <DemoItem label="Pick A Date Range" component="DateRangePicker">
              <DateRangePicker
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              name="PurchaseBill"
              label="Purchase Bill Value"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="PurchaseBill"
              label="Purchase Mrp Value"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="SaleBill"
              label="Sale Bill Value"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="SaleBill"
              label="Sale MRP Value"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="Discount"
              label="Discount Amt. (₹)"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="Payment"
              label="Payment (₹)"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="ReciptOnSale"
              label="Recipt On Sale"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="ReciptOnDue"
              label="Recipt On Due"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="curentStockPurchaseValue"
              label="Curent Stock Purchase Value"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="curentStockMRPValue"
              label="Curent Stock MRP Value"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              name="balanceSupplier"
              label="Supplier Balance"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="balanceCustomer"
              label="Customer Balance"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="cash"
              label="Cash"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
          "& button": { m: 1, marginRight: 4 },
        }}
      >
        <Button
          color="primary"
          size="large"
          variant="outlined"
          onClick={() => {}}
        >
          Save
        </Button>
        <Button
          color="error"
          size="large"
          variant="outlined"
          onClick={() => {}}
        >
          Clear
        </Button>
      </Box>
    </form>
  );
};

export default DailyStatus;
