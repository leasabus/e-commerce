import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const MainContent: React.FC<Props> = ({ children }) => {
  return <main>{children}</main>;
};
