
import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
const Table1 = ({coins}) => {
  return (
    <div className='w-full h-[500px] flex justify-center p-5'>
        <div className="w-[90%] bg-white mb-2 h-[380px] rounded-lg  p-4 flex flex-col">
        <div className="text-[40px] font-serif flex justify-between items-center mb-2">
          <div className="">Popular cryptocurrencies</div>
          <div className="text-[18px] cursor-pointer hover:text-orange-500 text-orange-400 duration-200">
            Learn More
          </div>
        </div>
        <div className="w-full h-auto">
          <Table classname="py-10">
            <TableHead>
              <TableRow>
                
                <TableCell className='text-[20px] font-[500] font-serif'>Name</TableCell>
                <TableCell  className='text-[20px] font-[500] font-serif'>last Price</TableCell>
                <TableCell className='text-[20px] font-[500] font-serif'>Changes</TableCell>
                <TableCell className='text-[20px] font-[500] font-serif'>Market Cap</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {coins && coins?.splice(0,5).map((row) => (
                <TableRow key={row.name}>
                  <TableCell className='text-[18px] font-normal' component="th" scope="row">
                     
                    {row.name}
                    {row.symbol}
                  </TableCell>
                  <TableCell className='text-[18px] font-normal'>{row.price}</TableCell>
                  <TableCell className='text-[18px] font-normal'>{Math.floor(row.change)}</TableCell>
                  <TableCell className='text-[18px] font-normal' >{Math.floor(row.marketCap/1000000)} M </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Table1