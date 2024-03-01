import React, { useState } from "react";
import { Box, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const PreviousYearDSR = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedBillType, setSelectedBillType] = useState("");

  const brands = [
    "100 Pipers",
    "100 Pipers 12Yr",
    "8Pm Black",
    "Absolut",
    "Absolut Citron",
    "Absolut Raspberry",
    "Amrut",
    "Antiquity Blue",
    "B Pride",
  ];
  const categories = [
    "50up IML",
    "60UP Country Spirit",
    "60up IML",
    "70up IML",
    "Beer(India)",
    "Brandy (IMFL)",
  ];
  const items = [
    "100 Pipers 375",
    "100 Pipers 12Yr 750",
    "100 Pipers W180" 
  ];
  const billTypes = ["Cash", "Dealer"];


  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleItemChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleBillTypeChange = (event) => {
    setSelectedBillType(event.target.value);
  };

  return (
    <form>
      <Box sx={{ p: 2, width: "900px" }}>
        <Typography variant="h5" component="div" gutterBottom>
          Daily Sale Report
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Item Total
        </Typography>
      </Box>
      <FormControl>
        {/* <FormLabel id="demo-radio-buttons-group-label">DSR</FormLabel> */}
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <FormControlLabel
            value="billDate"
            control={<Radio />}
            label="Bill Date"
          />
          <FormControlLabel value="brand" control={<Radio />} label="Brand" />
          <FormControlLabel
            value="category"
            control={<Radio />}
            label="Category"
          />
          <FormControlLabel value="item" control={<Radio />} label="Item" />
          <FormControlLabel value="type" control={<Radio />} label="Type" />
          <FormControlLabel
            value="allBrand"
            control={<Radio />}
            label="All Brand"
          />
          <FormControlLabel
            value="allCategory"
            control={<Radio />}
            label="All Category"
          />
          <FormControlLabel value="range" control={<Radio />} label="Range" />
          <FormControlLabel value="user" control={<Radio />} label="User" />
          <FormControlLabel
            value="customer"
            control={<Radio />}
            label="Customer"
          />
          <FormControlLabel
            value="flbeercs"
            control={<Radio />}
            label="FL/Beer/Cs"
          />
        </RadioGroup>
      </FormControl>

      <FormControl sx={{width: '100px', margin: 2, marginRight: 3}}>
        <InputLabel id="brand-label">Brand</InputLabel>
        <Select
          labelId="brand-label"
          id="brand"
          value={selectedBrand}
          onChange={handleBrandChange}
          label="Brand"
        >
          {brands.map((brand) => (
            <MenuItem key={brand} value={brand}>
              {brand}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{width: '140px', margin: 2, marginRight: 3}}>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          label="Category"
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{width: '120px', margin: 2, marginRight: 3}}>
        <InputLabel id="item-label">Item</InputLabel>
        <Select
          labelId="item-label"
          id="item"
          value={selectedItem}
          onChange={handleItemChange}
          label="Item"
        >
          {items.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{width: '120px', margin: 2, marginRight: 3}}>
        <InputLabel id="bill-type-label">Bill Type</InputLabel>
        <Select
          labelId="bill-type-label"
          id="bill-type"
          value={selectedBillType}
          onChange={handleBillTypeChange}
          label="Bill Type"
        >
          {billTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
};

export default PreviousYearDSR;