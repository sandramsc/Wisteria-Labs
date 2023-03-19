// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Assets React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import AssetsLayout from "examples/LayoutContainers/AssetsLayout";
import Footer from "examples/Footer";
import PaymentMethod from "layouts/buy-sell/components/PaymentMethod";
import CurrencyList from "examples/Lists/CurrencyList";
import PaymentMethodList from "examples/Lists/PaymentMethodList";
import AssetsNavbar from "examples/Navbars/AssetsNavbar";

// Data
import currencyListData from "layouts/buy-sell/data/currencyListData";
import paymentmethodListData from "layouts/buy-sell/data/paymentmethodListData";


function Overview() {
  return (
    <AssetsLayout>
    <AssetsNavbar />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={6}>
          <CurrencyList title="currency" currency={currencyListData} />
          </Grid>
          <Grid item xs={12} xl={6}>
            <PaymentMethodList title="payment method" paymentmethod={paymentmethodListData} />
          </Grid>
        </Grid>
      </SoftBox>
      <SoftBox mb={3}>
        <Card>
          <SoftBox p={2}>
            <Grid container spacing={3}>
     
                <Grid item xs={12}>
                  <PaymentMethod />
                </Grid>
            </Grid>
          </SoftBox>
        </Card>
      </SoftBox>

      <Footer />
    </AssetsLayout>
  );
}

export default Overview;