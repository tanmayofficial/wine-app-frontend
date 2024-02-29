import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React, { useState } from "react";

const SaleBill = () => {
    const [value, setValue] = useState([
        dayjs("2024-04-17"),
        dayjs("2024-04-21"),
      ]);

  return (
    <form>
      <Box sx={{ p: 2, width: "900px" }}>
        <Typography variant="h5" component="div" gutterBottom>
          Sales Entry
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Customer Details
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              name="customerName"
              label="Customer Name"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              name="balance"
              label="Balance"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              name="phoneNo"
              label="Phone Number"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              name="type"
              label="Type"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              name="address"
              label="Address"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>

          <Grid item sx={{ display: "flex", justifyContent: "center" }} xs={4}>
            <Button fullWidth variant="outlined" onClick={() => {}}>
              Add New Code
            </Button>
          </Grid>

          <Grid item xs={4}>
            <TextField
              name="address"
              label="Address"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              name="newcode"
              label="New Code"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              name="item"
              label="Item"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              name="mrp"
              label="MRP (₹)"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              name="billno"
              label="Bill No."
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>

          <Grid item xs={4}>
          <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
            <DatePicker
              name="billdate"
              label="Bill Date"
              value={""}
              onChange={() => {}}
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
          color="secondary"
          size="large"
          variant="outlined"
          onClick={() => {}}
        >
          Print
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

export default SaleBill;
