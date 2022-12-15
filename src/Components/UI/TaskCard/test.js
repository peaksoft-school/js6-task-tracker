import React from "react"
import styled from "styled-components"
import MuiTable from "@mui/material/Table"

export function InvoiceProductsTable({ data, onChange, editable }) {
    
   const handleChangePrice = ({ target: { name, value } }) => {
      const products = [...data.products]
      products[name].product_price = value
      return onChange({ ...data, products })
   }


   return (
      <Table>
         <TableHead>
            <TableRow>
               <TableCell>
                  {t("sales.invoice.createInvoicePage.productOrService")}
               </TableCell>
               <TableCell>
                  {t("sales.invoice.createInvoicePage.description")}
               </TableCell>
               <TableCell>
                  {t("sales.invoice.createInvoicePage.amount")}
               </TableCell>
               <TableCell>
                  {t("sales.invoice.createInvoicePage.price")}
               </TableCell>
               <TableCell>{t("sales.invoice.createInvoicePage.sum")}</TableCell>
               {editable && <TableCell last="true" />}
            </TableRow>
         </TableHead>
         <TableBody>
            {data.products.map((product, i) => (
               <TableRow key={product.product_id}>
                  <TableCell>{product.product_title}</TableCell>
                  <TableCell>{product.product_description}</TableCell>
                  <TableCell>
                     {editable ? (
                        <Input
                           required
                           type="number"
                           name={`${i}`}
                           onChange={onInputChange}
                           value={product.count_of_product}
                           min="0"
                        />
                     ) : (
                        product.count_of_product
                     )}
                  </TableCell>
                  <TableCell>
                     {editable ? (
                        <Input
                           required
                           type="number"
                           name={`${i}`}
                           onChange={handleChangePrice}
                           value={product.product_price}
                           min="0"
                        />
                     ) : (
                        product.product_price
                     )}
                  </TableCell>
                  <TableCell>{product.totalSum}</TableCell>
                  {editable ? (
                     <TableCell last="true">
                        <DeleteIcon
                           cursor="pointer"
                           onClick={() => onDeleteProduct(product.product_id)}
                        />
                     </TableCell>
                  ) : (
                     ""
                  )}
               </TableRow>
            ))}
         </TableBody>
      </Table>
   )
}
InvoiceProductsTable.propTypes = {
   data: PropTypes.shape({
      products: PropTypes.arrayOf(PropTypes.shape({})),
   }).isRequired,
   onChange: PropTypes.func,
   editable: PropTypes.bool,
}
InvoiceProductsTable.defaultProps = {
   editable: true,
   onChange: () => {},
}
const TableCell = styled(MuiTableCell)`
   width: ${({ width }) => width};
   padding-right: 0px !important;
   padding-right: ${({ last }) => last && "15px !important"};
   & .MuiOutlinedInput-root {
      background-color: #ffffff;
   }
   font-family: "Gilroy";
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 20px;
`
const Table = styled(MuiTable)`
   &.MuiTable-root {
      padding-right: 90px;
   }
   @media (max-width: 428px) {
   }
`
const TableHead = styled(MuiTableHead)`
   background-color: #e1eaf1;
   white-space: nowrap;
   .MuiTableCell-head {
      font-family: "Gilroy";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #222222;
   }
`
const TableBody = styled(MuiTableBody)`
   background-color: #f3f8fc;
`
