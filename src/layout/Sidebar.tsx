import React from "react";

/* Component */
import { AutoImage } from "utils";

const Sidebar = () => {
  return (
    <div className="relative w-72 h-screen">
      <div className="fixed inset-0 w-72 h-screen bg-dark border-r-[1px] border-dark-400 overflow-y-auto z-30">
        <div className="p-8">
          <div className="relative w-6 h-6">
            <AutoImage src="/favicon.ico" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
