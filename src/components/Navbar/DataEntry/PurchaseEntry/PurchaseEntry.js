import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const PurchaseEntry = () => {
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
          <Grid item xs={4}>
            <TextField
              name="supplierName"
              label="Supplier Name"
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
              name="passno"
              label="Pass No."
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
              name="date"
              label="Date"
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
              name="date"
              label="Date"
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

          <Grid item xs={4}>
            <TextField
              name="stockin"
              label="Stock in"
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
              name="entrtyno"
              label="Entry No."
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
              name="purchaserateonmrp"
              label="Purchase Rate on MRP (%)"
              variant="outlined"
              type="number"
              fullWidth
              className="form-field"
              value={""}
              onChange={() => {}}
            />
          </Grid>

        </Grid>

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
          sx={{marginTop: 3, marginRight: 2}}
        >
          Save
        </Button>
        <Button
          color="secondary"
          size="large"
          variant="outlined"
          onClick={() => {}}
          sx={{marginTop: 3, marginRight: 2}}
        >
          Print
        </Button>
        <Button
          color="error"
          size="large"
          variant="outlined"
          onClick={() => {}}
          sx={{marginTop: 3}}
        >
          Clear
        </Button>
      </Box>
      </Box>

      
    </form>
  );
};

export default PurchaseEntry;
