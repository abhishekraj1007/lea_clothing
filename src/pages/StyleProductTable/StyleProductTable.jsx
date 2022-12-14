import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Card, IconButton, Paper } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AddEditStyleProduct from "./AddEditStyleProduct";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StyleProductApi from "../../services/api/StyleProductApi";
import { styleProductActions } from "./store/slice/styleProductSlice";
// import { useNavigate } from "react-router-dom";

export default function StyleProductTable() {
  //   const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);
  const [openProuctModal, setOpenProductModal] = useState(false);
  const rowsData = useSelector((state) => state.styleProduct.allStyleProducts);

  useEffect(async () => {
    try {
      const resData = await StyleProductApi.getAllStyles();

      if (resData) {
        // console.log("resData---", resData);
        let updateArray = resData;
        dispatch(styleProductActions.updateStyleProduct({ updateArray }));
        dispatch(styleProductActions.updateSlideStyles({ updateArray }));
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onEditHandler = (rowID) => {
    // navigate(`/style-product/${rowID}/edit`);
    setOpenProductModal(true);
    setSelectedProductIndex(rowID);
  };

  return (
    <>
      <Box sx={{ m: 2 }}>
        <Card sx={{ p: 2 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Action</TableCell>
                  <TableCell>SL No.</TableCell>
                  <TableCell>Image URL</TableCell>
                  <TableCell>Display Title</TableCell>
                  <TableCell>Product Title</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsData.map((row, rowID) => (
                  <TableRow
                    key={`${row.attribute}_${row.value}`}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <IconButton
                        size="small"
                        onClick={() => onEditHandler(rowID)}
                        color="primary"
                      >
                        <ModeEditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>{rowID + 1}</TableCell>
                    <TableCell>
                      <img
                        src={row.imgUrl}
                        alt={row.attribute}
                        width="50"
                        height="50"
                      />
                    </TableCell>
                    <TableCell>{row.attribute}</TableCell>
                    <TableCell>{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Box>

      {openProuctModal && (
        <AddEditStyleProduct
          openProuctModal={openProuctModal}
          selectedProductIndex={selectedProductIndex}
          setOpenProductModal={setOpenProductModal}
        />
      )}
    </>
  );
}
