// @mui material components
 import Card from "@mui/material/Card";
 
 
 // @mui material components
import Divider from "@mui/material/Divider";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
 
 function Invoices() {
   return (
     <Card id="delete-account" sx={{ height: "100%" }}>
 <SoftBox
        display="flex"
        justifyContent="center"
        alignItems="baseline"
        pt={3}
        pb={0.8}
        px={3}
      >
        <SoftBox textAlign="center">
          <SoftTypography variant="body2" color="text">YOU ARE SENDING</SoftTypography>
          <SoftTypography variant="h4" >
            1.002850 BTC
          </SoftTypography>
          <SoftTypography variant="h6" color="text">
            $ 701.26 per BTC
          </SoftTypography>
        </SoftBox>

      </SoftBox>

      <Divider />

      <SoftBox pt={1.25} pb={3} px={3}>

        <SoftBox mt={3} lineHeight={1}>

       
        </SoftBox>
      

        <Divider />

        <SoftBox mt={3} mb={2}>
          <SoftBox mb={2}>
          
          </SoftBox>
    
        </SoftBox>

        <Divider />

        <SoftBox mt={3} mb={2}>
          <SoftBox mb={2}>
          
          </SoftBox>

        </SoftBox>

        <Divider />

        <SoftBox mt={3} mb={2}>
          <SoftBox mb={2}>
          
          </SoftBox>

        </SoftBox>
   
        <SoftBox mt={3} textAlign="center">
      

          <SoftBox display="flex" justifyContent="center">
            <SoftBox mr={1.5}>
     
            </SoftBox>
        
          </SoftBox>
        </SoftBox>
      </SoftBox>
     </Card>
   );
 }
 
 export default Invoices;