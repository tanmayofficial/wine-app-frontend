import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

const ItemCatRegister = () => {
  const [category, setCategory] = useState("");
  const [indexNo, setIndexNo] = useState("");
  const [groupNo, setGroupNo] = useState("");
  const [existingCategory, setExistingCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");

  return (
    <form>
      <Box sx={{ p: 2, width: "900px" }}>
        <Typography variant="h5" component="div" gutterBottom>
          Item Category Information
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Item Category Details
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              fullWidth
              type="text"
              name="selectedCategory"
              label="Item Category"
              value={category}
              variant="outlined"
              onChange={(e) => setCategory(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              type="number"
              name="indexNo"
              label="Index No."
              value={indexNo}
              variant="outlined"
              onChange={(e) => setIndexNo(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              type="number"
              name="groupNo"
              label="Group No."
              value={groupNo}
              variant="outlined"
              onChange={(e) => setGroupNo(e.target.value)}
            />
          </Grid>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 2,
              "& button": { m: 1, marginRight: 2 },
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
        </Grid>

        <Typography variant="subtitle1" gutterBottom>
          Change Category
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              select
              fullWidth
              name="existingCategory"
              label="Existing Category"
              value={existingCategory}
              variant="outlined"
              onChange={(e) => setExistingCategory(e.target.value)}
            >
              {[
                "25 UP IML",
                "50 UP Country Sprit",
                "50 UP IML",
                "60 UP IML",
                "70 UP IML",
                "80 UP Country Sprit",
              ].map((item, id) => {
                return (
                  <MenuItem key={id} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </TextField>
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              name="newCategory"
              label="New Category"
              value={newCategory}
              variant="outlined"
              onChange={(e) => setNewCategory(e.target.value)}
            />
          </Grid>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 2,
              "& button": { m: 1, marginRight: 4 },
            }}
          >
            <Button
              color="secondary"
              size="large"
              variant="outlined"
              onClick={() => {}}
            >
              Change
            </Button>
          </Box>
        </Grid>
      </Box>
    </form>
  );
};

export default ItemCatRegister;
