import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Grid,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CustomerRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactPersons: "",
    address: "",
    phoneNo: "",
    mobileNo: "",
    openingBalance: "",
    discount: "",
    validUpto: null,
    customerType: "",
    discountCategory: "",
    additionalCharges: "",
  });

  console.log("formData", formData);

  const handleSave = () => {
    // Api to send data sendDataToApi(formData)
  };

  const handleClear = () => {
    setFormData({
      name: "",
      contactPersons: "",
      address: "",
      phoneNo: "",
      mobileNo: "",
      openingBalance: "",
      discount: "",
      validUpto: null,
      customerType: "",
      discountCategory: "",
      additionalCharges: "",
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form>
      <Box sx={{ p: 2, width: "900px" }}>
        <Typography variant="h5" component="div" gutterBottom>
          Customer Information
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Customer Details
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              name="name"
              label="Name of Customer/Company"
              variant="outlined"
              fullWidth
              margin="normal"
              className="form-field"
              value={formData.name}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="contactPersons"
              label="Contact Persons"
              variant="outlined"
              fullWidth
              margin="normal"
              className="form-field"
              value={formData.contactPersons}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="address"
              label="Address"
              variant="outlined"
              fullWidth
              margin="normal"
              className="form-field"
              value={formData.address}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="phoneNo"
              label="Phone No."
              variant="outlined"
              fullWidth
              margin="normal"
              className="form-field"
              type="number"
              value={formData.phoneNo}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="mobileNo"
              label="Mobile No."
              variant="outlined"
              fullWidth
              margin="normal"
              className="form-field"
              type="number"
              value={formData.mobileNo}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="openingBalance"
              label="Opening Balance (Rs.)"
              variant="outlined"
              fullWidth
              margin="normal"
              className="form-field"
              type="number"
              inputProps={{ min: 0 }}
              value={formData.openingBalance}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="discount"
              label="Discount (%)"
              variant="outlined"
              fullWidth
              margin="normal"
              className="form-field"
              type="number"
              value={formData.discount}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                name="validUpto"
                label="Valid Upto"
                value={formData.validUpto}
                onChange={(newValue) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    validUpto: newValue,
                  }))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                )}
                fullWidth
                margin="normal"
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="customerType"
              select
              label="Customer Type"
              variant="outlined"
              fullWidth
              margin="normal"
              className="form-field"
              value={formData.customerType}
              onChange={handleFormChange}
            >
              <MenuItem value="cash">Cash</MenuItem>
              <MenuItem value="online">Online</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="discountCategory"
              select
              label="Discount Category"
              variant="outlined"
              fullWidth
              margin="normal"
              className="form-field"
              value={formData.discountCategory}
              onChange={handleFormChange}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="additionalCharges"
              label="Additional Charges (%)"
              variant="outlined"
              fullWidth
              margin="normal"
              className="form-field"
              type="number"
              value={formData.additionalCharges}
              onChange={handleFormChange}
            />
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
          onClick={handleSave}
        >
          Save
        </Button>
        <Button
          color="error"
          size="large"
          variant="outlined"
          onClick={handleClear}
        >
          Clear
        </Button>
      </Box>
    </form>
  );
};

export default CustomerRegister;
