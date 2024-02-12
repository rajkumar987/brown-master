import Sidebar from "./componets/Sidebar";
import TopNav from "./componets/TopNav";
import GeneralDetails from "./componets/general-details/GeneralDetails";
import Address from "./componets/Address";
import PayConfig from "./componets/PayConfig";
import useStepper from "./context/stepper/useStepper";
import { useEffect, useMemo, useState } from "react";
import { stepperList } from "./constants/stepperList";

export default function App() {
  const { currentStep } = useStepper();
  const TabComponent = stepperList.find(
    (step) => step.key === currentStep
  )?.component;
  return (
    <main>
      <Sidebar />
      <TopNav />
      <TabComponent />
    </main>
  );
}
