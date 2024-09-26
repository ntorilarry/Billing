import React from "react";
import { BillingImg } from "../../assets";
import BillingModal from "./components/BillingModal";

const Billing = () => {
  return (
    <div>
      <img src={BillingImg} className="w-full h-full" alt="" />
      <div className="relative">
       <BillingModal/>
      </div>
    </div>
  );
};

export default Billing;
