// Soft UI Dashboard React layouts
import Assets from "layouts/assets";
import Accounts from "layouts/accounts";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import BuySell from "layouts/buy-sell";
import SendRequest from "layouts/send-request";
import Settings from "layouts/settings";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
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
    name: "Tables",
    key: "tables",
    route: "/tables",
    icon: <Office size="12px" />,
    component: <Tables />,
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
  {
    type: "collapse",
    name: "Settings",
    key: "settings",
    route: "/settings",
    icon: <CustomerSupport size="12px" />,
    component: <Settings />,
    noCollapse: true,
  },
];

export default routes;
