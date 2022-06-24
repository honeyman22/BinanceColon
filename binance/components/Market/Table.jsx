import React, { useState } from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Modal } from "@mui/material";
import {
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import useCoinsReducers from "../../hooks/useCoinsReducers";
const MarketTable = () => {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = useState(0);
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(newPage);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const coins = useCoinsReducers();
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const [Open, setOpen] = useState(false);

  return (
    <div>
      <div className="w-full flex bg-black/5 flex-col items-center justify-center h-auto p-5">
        <div className="w-[90%] flex items-center justify-center">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>24h Changes</TableCell>
                  <TableCell>24h Volume</TableCell>
                  <TableCell>Market Cap</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {coins
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item) => (
                    <StyledTableRow key={item.price}>
                      <TableCell>
                        <div className="flex items-center">
                          <div className="h-[30px] w-[30px] relative">
                            <Image
                              src={item?.iconUrl}
                              alt=""
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                          <div className="p-2">{item.name}</div>({item.symbol})
                        </div>
                      </TableCell>
                      <TableCell>{parseFloat(item.price).toFixed(2)}</TableCell>
                      <TableCell>{item.change}</TableCell>
                      <TableCell>{item.change}</TableCell>
                      <TableCell>{item.marketCap}</TableCell>
                      <TableCell>
                        <div
                          onClick={() => setOpen(true)}
                          className="text-yellow-600  cursor-pointer "
                        >
                          Detail
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-yellow-600">Trade</div>
                      </TableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[10, 20, 30]}
              component="div"
              count={coins.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default MarketTable;
