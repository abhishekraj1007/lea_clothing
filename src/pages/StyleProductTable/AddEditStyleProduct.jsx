import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Divider,
  Paper,
  Stack,
  TextField,
  IconButton,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { styleProductActions } from "./store/slice/styleProductSlice";
import CloseIcon from "@mui/icons-material/Close";

const AddEditStyleProduct = ({
  openProuctModal,
  setOpenProductModal,
  selectedProductIndex,
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);

  const [imgURL, setImgURL] = useState("");
  const [attribute, setAttribute] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("value", value);
    console.log("attribute", attribute);
    console.log("imgURL", imgURL);

    if (value && attribute && imgURL) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [value, attribute, imgURL]);

  const handleSubmit = () => {
    setLoading(true);
    let index = selectedProductIndex;
    let newProductData = {
      attribute: attribute,
      value: value,
      imgUrl: imgURL,
    };
    dispatch(styleProductActions.updateStyleProduct({ newProductData, index }));
    setTimeout(() => {
      setLoading(false);
      setOpenProductModal(false);
    }, 2000);
  };

  return (
    <>
      <Dialog open={openProuctModal} fullWidth maxWidth="sm">
        <DialogTitle>{"Edit Product"}</DialogTitle>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Divider />
        </Grid>

        <DialogContent>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Stack spacing={2}>
              <TextField
                label="Image URL"
                fullWidth
                variant="outlined"
                name="imgURL"
                value={imgURL}
                onChange={(e) => setImgURL(e.target.value)}
              />
              <TextField
                label="Display Title"
                fullWidth
                variant="outlined"
                name="attribute"
                value={attribute}
                onChange={(e) => setAttribute(e.target.value)}
              />
              <TextField
                label="Product Title"
                fullWidth
                variant="outlined"
                name="value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Stack>
          </Grid>
        </DialogContent>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Divider />
        </Grid>

        <DialogActions>
          <Button variant="outlined" onClick={() => setOpenProductModal(false)}>
            {"Close"}
          </Button>
          <LoadingButton
            variant="outlined"
            loading={loading}
            disabled={disableBtn}
            onClick={handleSubmit}
            // sx={{ mt: 3, mb: 2 }}
          >
            {"Save"}
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddEditStyleProduct;
