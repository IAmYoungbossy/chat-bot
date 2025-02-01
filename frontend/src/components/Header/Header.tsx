import React from "react";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
  return (
    <header className="bg-white pt-[9px] pb-[13px] shadow-header">
      <div className="max-w-page-max w-full mx-auto px-[21px]">
        <HeaderLogo />
      </div>
    </header>
  );
};

export default Header;
