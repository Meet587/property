"use client";
import React, { useState } from "react";
import { Property } from "../data/schema";
import useDialogState from "@/hooks/use-dialog-state";

type PropertyDialogType = "invite" | "add" | "edit" | "delete";

interface PropertyContextType {
  open: PropertyDialogType | null;
  setOpen: (str: PropertyDialogType | null) => void;
  currentRow: Property | null;
  setCurrentRow: React.Dispatch<React.SetStateAction<Property | null>>;
}

const PropertyContext = React.createContext<PropertyContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function PropertyProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<PropertyDialogType>(null);
  const [currentRow, setCurrentRow] = useState<Property | null>(null);

  return (
    <PropertyContext value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </PropertyContext>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useProperty = () => {
  const propertyContext = React.useContext(PropertyContext);

  if (!propertyContext) {
    throw new Error("useUsers has to be used within <PropertyContext>");
  }

  return propertyContext;
};
