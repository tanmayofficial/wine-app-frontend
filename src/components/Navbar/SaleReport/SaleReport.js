import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Grid,
} from "@mui/material";


const SaleReport = () => {
  return (
    <Box sx={{ p: 2, width: "900px" }}>
      <Typography variant="h5" component="div" gutterBottom>
        Sale Report
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Sale Report Details
      </Typography>
    </Box>
  );
};

export default SaleReport;
