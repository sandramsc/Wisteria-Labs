// Soft UI Dashboard React layouts
import Assets from "layouts/assets";
import Accounts from "layouts/accounts";
import BuySell from "layouts/buy-sell";
import SendRequest from "layouts/send-request";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import CustomerSupport from "examples/Icons/CustomerSupport";

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
    name: "Buy/Sell",
    key: "buy-sell",
    route: "/buy-sell",
    icon: <CustomerSupport size="12px" />,
    component: <BuySell />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Send/Request",
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
];

export default routes;
