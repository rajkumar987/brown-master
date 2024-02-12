import GeneralDetails from "../componets/general-details/GeneralDetails";
import Address from "../componets/Address";
import PayConfig from "../componets/PayConfig";

export const stepperList = [
  {
    id: 1,
    name: "General Configuration",
    key: "generalConfiguration",
    component: GeneralDetails,
  },
  {
    id: 2,
    name: "Address",
    key: "address",
    component: Address,
  },
  {
    id: 3,
    name: "Pay Configuration",
    key: "paymentConfiguration",
    component: PayConfig,
  },
];
