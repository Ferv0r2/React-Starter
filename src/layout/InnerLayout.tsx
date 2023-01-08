import React, { FC, ReactNode } from "react";

interface Props {
  node: ReactNode;
}

const InnerLayout: FC<Props> = ({ node }) => {
  return (
    <div className="bg-dark-600 w-screen">
      <div className="p-8">{node}</div>
    </div>
  );
};

export { InnerLayout };
