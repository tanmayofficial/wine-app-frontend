import { Box, Typography } from "@mui/material";
import React from "react";

const PurchaseReport = () => {
  return (
    <Box sx={{ p: 2, width: "900px" }}>
      <Typography variant="h5" component="div" gutterBottom>
        Purchase Report
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Purchase Report Details
      </Typography>
    </Box>
  );
};

export default PurchaseReport;
