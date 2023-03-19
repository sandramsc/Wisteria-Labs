/**
 =========================================================
 * Soft UI Dashboard React - v4.0.0
 =========================================================
 
 * Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
 * Copyright 2022 Creative Tim (https://www.creative-tim.com)
 
 Coded by www.creative-tim.com
 
  =========================================================
 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

 // @mui material components
 import Card from "@mui/material/Card";
 
 
 // @mui material components
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
 
 function Invoices() {
   return (
     <Card id="delete-account" sx={{ height: "100%" }}>
       <SoftBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
       <SoftBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={3}
        pb={0.8}
        px={3}
      >
        
      </SoftBox>

      <Divider />

      <SoftBox pt={1.25} pb={3} px={3}>
        <SoftBox>


        <SoftBox mt={3} lineHeight={1}>
          <SoftTypography variant="h6">Sidenav Type</SoftTypography>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Choose between 2 different sidenav types.
          </SoftTypography>

          <SoftBox
            sx={{
              display: "flex",
              mt: 2,
            }}
          >
         
          </SoftBox>
        </SoftBox>

        <Divider />

        <SoftBox mt={3} mb={2}>
        
          <SoftButton
            component={Link}
            href="https://www.creative-tim.com/learning-lab/react/quick-start/soft-ui-dashboard/"
            target="_blank"
            rel="noreferrer"
            color="dark"
            variant="outlined"
            fullWidth
          >
            view documentation
          </SoftButton>
        </SoftBox>

        <SoftBox mt={3} textAlign="center">
          <SoftBox mb={0.5}>
            <SoftTypography variant="h6">Thank you for sharing!</SoftTypography>
          </SoftBox>

          <SoftBox display="flex" justifyContent="center">
            <SoftBox mr={1.5}>
              <SoftButton
                component={Link}
                href="//twitter.com/intent/tweet?text=Check%20Soft%20UI%20Dashboard%20React%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23react%23mui&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard-react"
                target="_blank"
                rel="noreferrer"
                color="dark"
              >
                <TwitterIcon />
                &nbsp; Tweet
              </SoftButton>
            </SoftBox>
            <SoftButton
              component={Link}
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/soft-ui-dashboard-react"
              target="_blank"
              rel="noreferrer"
              color="dark"
            >
              <FacebookIcon />
              &nbsp; Share
            </SoftButton>
          </SoftBox>
        </SoftBox>
      </SoftBox>
       </SoftBox>
       </SoftBox>
     </Card>
   );
 }
 
 export default Invoices;