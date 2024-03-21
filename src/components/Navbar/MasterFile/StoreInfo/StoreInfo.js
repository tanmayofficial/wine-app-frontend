import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

const StoreInfo = () => {
  const [storeName, setStoreName] = useState("");
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");
  const [phNo, setPhNo] = useState("");

  const clearForm = () => {
    setStoreName("");
    setCategory("");
    setAddress("");
    setPhNo("");
  };

  return (
    <form>
      <Box sx={{ p: 2, width: "900px" }}>
        <Typography variant="h5" component="div" gutterBottom>
          Store Information
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Store Details
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              fullWidth
              type="text"
              name="storeName"
              margin="normal"
              label="Name of Store"
              variant="outlined"
              className="form-field"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              fullWidth
              type="text"
              name="category"
              margin="normal"
              label="Category"
              variant="outlined"
              className="form-field"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              fullWidth
              type="text"
              name="address"
              margin="normal"
              label="Address"
              variant="outlined"
              className="form-field"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              fullWidth
              type="number"
              name="phNo"
              margin="normal"
              label="Phone Number"
              variant="outlined"
              className="form-field"
              value={phNo}
              onChange={(e) => setPhNo(e.target.value)}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            // marginTop: "10px",
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
            onClick={clearForm}
            sx={{ marginTop: 3 }}
          >
            Clear
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default StoreInfo;
