import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Grid,
} from "@mui/material";

const SuppliersRegister = () => {
  const suppliersData = {
    "suppliers": [
      {
        "supName": "ABC Corporation",
        "contactPersons": "John Doe",
        "address": "123 Main Street, Anytown, USA",
        "mobileNo": "123-456-7890",
        "gstIn": "GSTIN123",
        "cinNo": "CIN123",
        "openingBalance": 5000,
        "tcsCalculation": 10
      },
      {
        "supName": "XYZ Enterprises",
        "contactPersons": "Jane Smith",
        "address": "456 Elm Street, Othertown, USA",
        "mobileNo": "987-654-3210",
        "gstIn": "GSTIN456",
        "cinNo": "CIN456",
        "openingBalance": 8000,
        "tcsCalculation": 15
      },
      {
        "supName": "PQR Industries",
        "contactPersons": "Alice Johnson",
        "address": "789 Oak Street, Anycity, USA",
        "mobileNo": "555-123-4567",
        "gstIn": "GSTIN789",
        "cinNo": "CIN789",
        "openingBalance": 3000,
        "tcsCalculation": 8
      },
      {
        "supName": "LMN Ltd.",
        "contactPersons": "Bob Brown",
        "address": "321 Pine Street, Otherville, USA",
        "mobileNo": "444-987-6543",
        "gstIn": "GSTIN321",
        "cinNo": "CIN321",
        "openingBalance": 10000,
        "tcsCalculation": 12
      }
    ]
  };

  const [formData, setFormData] = useState({
    supName: "",
    contactPersons: "",
    address: "",
    mobileNo: "",
    gstIn: "",
    cinNo: "",
    openingBalance: "",
    tcsCalculation: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSupplierChange = (event) => {
    const selectedSupplierName = event.target.value;
    const selectedSupplier = suppliersData.suppliers.find(
      (supplier) => supplier.supName === selectedSupplierName
    );
    if (selectedSupplier) {
      setFormData({
        supName: selectedSupplier.supName,
        contactPersons: selectedSupplier.contactPersons,
        address: selectedSupplier.address,
        mobileNo: selectedSupplier.mobileNo,
        gstIn: selectedSupplier.gstIn,
        cinNo: selectedSupplier.cinNo,
        openingBalance: selectedSupplier.openingBalance,
        tcsCalculation: selectedSupplier.tcsCalculation,
      });
    }
  };

  return (
    <form>
      <Box sx={{ p: 2, width: "900px" }}>
        <Typography variant="h5" component="div" gutterBottom>
          Suppliers Register
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Suppliers Details
        </Typography>

        <Grid container spacing={2} sx={{ marginTop: 1 }}>
          <Grid item xs={6}>
            <TextField
              select
              name="supName"
              label="Name of Supplier/Company"
              variant="outlined"
              fullWidth
              className="form-field"
              value={formData.supName}
              onChange={handleSupplierChange}
            >
              {suppliersData.suppliers.map((supplier) => (
                <MenuItem key={supplier.supName} value={supplier.supName}>
                  {supplier.supName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="contactPersons"
              label="Contact Persons"
              variant="outlined"
              fullWidth
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
              className="form-field"
              value={formData.address}
              onChange={handleFormChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              name="mobileNo"
              label="Mobile No."
              variant="outlined"
              fullWidth
              className="form-field"
              type="number"
              value={formData.mobileNo}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="gstIn"
              label="GSTIN"
              variant="outlined"
              fullWidth
              className="form-field"
              type="number"
              value={formData.gstIn}
              onChange={handleFormChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              name="cinNo"
              label="CIN No."
              variant="outlined"
              fullWidth
              className="form-field"
              type="number"
              value={formData.cinNo}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="openingBalance"
              label="Opening Balance (Rs.)"
              variant="outlined"
              fullWidth
              className="form-field"
              type="number"
              inputProps={{ min: 0 }}
              value={formData.openingBalance}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="tcsCalculation"
              label="TCS Calculation"
              variant="outlined"
              fullWidth
              className="form-field"
              type="number"
              value={formData.tcsCalculation}
              onChange={handleFormChange}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px",
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

export default SuppliersRegister;
