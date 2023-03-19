// Images
import kal from "assets/images/logo-bitcoin.svg";
import marie from "assets/images/eth-logo.svg";
import ivana from "assets/images/add_icon.png";

const currencyListData = [
  {
    image: kal,
    name: "Bitcoin",
    description: "$ 5789.26",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: marie,
    name: "Ethereum",
    description: "$ 1425.89",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: ivana,
    name: "Add New...",
    description: "",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
];

export default currencyListData;
