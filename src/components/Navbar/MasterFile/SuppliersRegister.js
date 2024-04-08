import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  MenuItem,
} from "@mui/material";
import {
  getAllSuppliers,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} from "../../../services/supplierService";
import { NotificationManager } from "react-notifications";
import { useLoginContext } from "../../../utils/loginContext";

const SuppliersRegister = () => {
  const { loginResponse } = useLoginContext();

  const [formData, setFormData] = useState({
    supName: "",
    address: "",
    mobileNo: "",
    gstinNo: "",
    panNo: "",
    cinNo: "",
    openingBalance: "",
  });

  const [newFormData, setNewFormData] = useState({
    supName: "",
    address: "",
    mobileNo: "",
    gstinNo: "",
    panNo: "",
    cinNo: "",
    openingBalance: "",
  });

  const [allSuppliers, setAllSuppliers] = useState([]);
  const [existingSupplierUpdate, setExistingSupplierUpdate] = useState("");
  const [existingSupplierDelete, setExistingSupplierDelete] = useState("");

  const clearForm = () => {
    setFormData({
      supName: "",
      address: "",
      mobileNo: "",
      gstinNo: "",
      panNo: "",
      cinNo: "",
      openingBalance: "",
    });
  };

  const handleSupplierChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreateSupplier = async () => {
    const payload = {
      name: formData.supName,
      address: formData.address,
      contactNo: formData.mobileNo,
      gstinNo: formData.gstinNo,
      panNo: formData.panNo,
      cinNo: formData.cinNo,
      openingBlance: formData.openingBalance,
    };

    try {
      const createSupplierResponse = await createSupplier(
        payload,
        loginResponse
      );
      if (createSupplierResponse.status === 200) {
        NotificationManager.success("Supplier created successfully", "Success");
        clearForm();
        fetchAllSuppliers();
      } else {
        NotificationManager.error(
          "Error creating Supplier. Please try again later.",
          "Error"
        );
      }
    } catch (error) {
      NotificationManager.error(
        "Error creating Supplier. Please try again later.",
        "Error"
      );
    }
  };

  const handleUpdateSupplier = async () => {
    if (!existingSupplierUpdate) {
      NotificationManager.warning(
        "Please select a supplier to update.",
        "Error"
      );
      return;
    }

    const payload = {
      name: newFormData.supName,
      address: newFormData.address,
      contactNo: newFormData.mobileNo,
      gstinNo: newFormData.gstinNo,
      panNo: newFormData.panNo,
      cinNo: newFormData.cinNo,
      openingBlance: newFormData.openingBalance,
    };

    try {
      const updateItemResponse = await updateSupplier(
        payload,
        existingSupplierUpdate,
        loginResponse
      );
      if (updateItemResponse.status === 200) {
        NotificationManager.success("Supplier updated successfully", "Success");
        setExistingSupplierUpdate("");
        fetchAllSuppliers();
      } else {
        NotificationManager.error(
          "Error updating supplier. Please try again later.",
          "Error"
        );
      }
    } catch (error) {
      NotificationManager.error(
        "Error updating supplier. Please try again later.",
        "Error"
      );
    }
  };
  

  const handleDeleteSupplier = async () => {
    try {
      const deleteItemResponse = await deleteSupplier(
        existingSupplierDelete,
        loginResponse
      );
      if (deleteItemResponse.status === 200) {
        NotificationManager.success("Item deleted successfully", "Success");
        setExistingSupplierDelete("");
        fetchAllSuppliers();
      } else {
        NotificationManager.error(
          "Error deleting item. Please try again later.",
          "Error"
        );
      }
    } catch (error) {
      NotificationManager.error(
        "Error deleting item. Please try again later.",
        "Error"
      );
    }
  };

  const fetchAllSuppliers = async () => {
    try {
      const allItemsResponse = await getAllSuppliers(loginResponse);
      console.log("allItemsResponse: ", allItemsResponse);
      setAllSuppliers(allItemsResponse?.data?.data);
    } catch (error) {
      NotificationManager.error(
        "Error fetching suppliers. Please try again later.",
        "Error"
      );
    }
  };

  useEffect(() => {
    fetchAllSuppliers();
  }, []);

  return (
    <form>
      <Box sx={{ p: 2, width: "900px" }}>
        <Typography variant="h5" component="div" gutterBottom>
          Suppliers Register
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Suppliers Details
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              name="supName"
              label="Name of Supplier/Company"
              variant="outlined"
              fullWidth
              className="form-field"
              value={formData.supName}
              onChange={handleSupplierChange}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              name="address"
              label="Address"
              variant="outlined"
              fullWidth
              className="form-field"
              value={formData.address}
              onChange={handleSupplierChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="mobileNo"
              label="Mobile Number"
              variant="outlined"
              fullWidth
              className="form-field"
              value={formData.mobileNo}
              onChange={handleSupplierChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="gstinNo"
              label="GSTIN Number"
              variant="outlined"
              fullWidth
              className="form-field"
              value={formData.gstinNo}
              onChange={handleSupplierChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="panNo"
              label="PAN Number"
              variant="outlined"
              fullWidth
              className="form-field"
              value={formData.panNo}
              onChange={handleSupplierChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="cinNo"
              label="CIN Number"
              variant="outlined"
              fullWidth
              className="form-field"
              value={formData.cinNo}
              onChange={handleSupplierChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="openingBalance"
              label="Opening Balance"
              variant="outlined"
              fullWidth
              className="form-field"
              value={formData.openingBalance}
              onChange={handleSupplierChange}
            />
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              "& button": { marginTop: 2, marginLeft: 2 },
            }}
          >
            <Button
              color="primary"
              size="large"
              variant="outlined"
              onClick={handleCreateSupplier}
            >
              Create
            </Button>
            <Button
              color="warning"
              size="large"
              variant="outlined"
              onClick={clearForm}
            >
              Clear
            </Button>
          </Box>
        </Grid>

        <Typography variant="subtitle1" gutterBottom sx={{ marginTop: 2 }}>
          Update Supplier
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              select
              fullWidth
              name="existingSupplierUpdate"
              label="Existing Supplier"
              value={existingSupplierUpdate}
              variant="outlined"
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                    },
                  },
                },
              }}
              onChange={(e) => setExistingSupplierUpdate(e.target.value)}
            >
              {allSuppliers?.map((item) => (
                <MenuItem key={item._id} value={item._id}>
                  {item.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {existingSupplierUpdate && (
            <>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  type="text"
                  name="newSupplierName"
                  label="New Supplier Name"
                  value={newFormData.supName}
                  variant="outlined"
                  onChange={(e) =>
                    setNewFormData({ ...newFormData, supName: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  type="text"
                  name="address"
                  label="Address"
                  value={newFormData.address}
                  variant="outlined"
                  onChange={(e) =>
                    setNewFormData({ ...newFormData, address: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  type="text"
                  name="mobileNo"
                  label="Mobile Number"
                  value={newFormData.mobileNo}
                  variant="outlined"
                  onChange={(e) =>
                    setNewFormData({ ...newFormData, mobileNo: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  type="text"
                  name="gstinNo"
                  label="GSTIN Number"
                  value={newFormData.gstinNo}
                  variant="outlined"
                  onChange={(e) =>
                    setNewFormData({ ...newFormData, gstinNo: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  type="text"
                  name="panNo"
                  label="PAN Number"
                  value={newFormData.panNo}
                  variant="outlined"
                  onChange={(e) =>
                    setNewFormData({ ...newFormData, panNo: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  type="text"
                  name="cinNo"
                  label="CIN Number"
                  value={newFormData.cinNo}
                  variant="outlined"
                  onChange={(e) =>
                    setNewFormData({ ...newFormData, cinNo: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  type="text"
                  name="openingBalance"
                  label="Opening Balance"
                  value={newFormData.openingBalance}
                  variant="outlined"
                  onChange={(e) =>
                    setNewFormData({ ...newFormData, openingBalance: e.target.value })
                  }
                />
              </Grid>
            </>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              "& button": { marginTop: 2, marginLeft: 2 },
            }}
          >
            <Button
              color="primary"
              size="large"
              variant="outlined"
              onClick={handleUpdateSupplier}
            >
              Change
            </Button>
            <Button
              color="warning"
              size="large"
              variant="outlined"
              onClick={() => {
                setExistingSupplierUpdate("");
                
              }}
            >
              Clear
            </Button>
          </Box>
        </Grid>

        <Typography variant="subtitle1" gutterBottom sx={{ marginTop: 2 }}>
          Delete Supplier
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              select
              fullWidth
              name="existingSupplierDelete"
              label="Existing Supplier"
              value={existingSupplierDelete}
              variant="outlined"
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                    },
                  },
                },
              }}
              onChange={(e) => setExistingSupplierDelete(e.target.value)}
            >
              {allSuppliers?.map((item) => (
                <MenuItem key={item._id} value={item._id}>
                  {item.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              "& button": { marginTop: 2, marginLeft: 2 },
            }}
          >
            <Button
              color="primary"
              size="large"
              variant="outlined"
              onClick={handleDeleteSupplier}
            >
              Delete
            </Button>
            <Button
              color="warning"
              size="large"
              variant="outlined"
              onClick={() => setExistingSupplierDelete("")}
            >
              Clear
            </Button>
          </Box>
        </Grid>
      </Box>
    </form>
  );
};

export default SuppliersRegister;
