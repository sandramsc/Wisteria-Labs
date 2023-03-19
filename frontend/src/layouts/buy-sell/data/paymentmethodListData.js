// Images
import kal from "assets/images/logos/mastercard.png";
import marie from "assets/images/logos/visa.png";
import ivana from "assets/images/add_icon.png";

const paymentmethodListData = [
  {
    image: kal,
    name: "Master Card",
    description: "***595",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: marie,
    name: "VISA",
    description: "***4949",
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

export default paymentmethodListData;
