// Soft UI Dashboard React layouts
import Assets from "layouts/assets";
import Accounts from "layouts/accounts";
import Billing from "layouts/billing";
import BuySell from "layouts/buy-sell";
import SendRequest from "layouts/send-request";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";

const routes = [
  {
    type: "collapse",
    name: "Assets",
    key: "assets",
    route: "/assets",
    icon: <Shop size="12px" />,
    component: <Assets />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "BuySell",
    key: "buy-sell",
    route: "/buy-sell",
    icon: <CustomerSupport size="12px" />,
    component: <BuySell />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "SendRequest",
    key: "send-request",
    route: "/send-request",
    icon: <CustomerSupport size="12px" />,
    component: <SendRequest />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Accounts",
    key: "accounts",
    route: "/accounts",
    icon: <CustomerSupport size="12px" />,
    component: <Accounts />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    route: "/billing",
    icon: <CreditCard size="12px" />,
    component: <Billing />,
    noCollapse: true,
  },
];

export default routes;
