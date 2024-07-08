import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const MainContent: React.FC<Props> = ({ children }) => {
  return (
    <main className=" bg-slate-100 w-full overflow-hidden	">{children}</main>
  );
};
