import { createContext, useContext, useState } from "react";

const BreadcrumbContext = createContext();

export function BreadcrumbProvider({ children }) {
  const [kurzusNev, setKurzusNev] = useState(null);
  const [feladatNev, setFeladatNev] = useState(null);

  return (
    <BreadcrumbContext.Provider value={{ kurzusNev, setKurzusNev, feladatNev, setFeladatNev }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}

export function useBreadcrumb() {
  return useContext(BreadcrumbContext);
}