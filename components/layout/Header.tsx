import React from "react";
import Image from "next/image";
import Logo from "@/public/assets/alx_logo.svg";
import Search from "@/public/assets/Magnifer.svg";
import { MenuItemsProps, MenuProps } from "@/interfaces";
import { MENUITEMS } from "@/constants";

const MenuItems: React.FC<MenuItemsProps> = ({ menuItems }) => {
  return (
    <div>
      {menuItems?.map(({ main, sub }: MenuProps) => (
        <div key={main}>
          <div>{main}</div>
          <div>{sub}</div>
        </div>
      ))}
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <div>
        <Image src={Logo} alt="ALX airbnb Logo" width={59} height={30} />
      </div>

      <nav>
        <MenuItems menuItems={MENUITEMS} />
        <form>
          <input type="text" />
        </form>
        <div>
          <Image alt="search_button" src={Search} width={20} height={20} />
        </div>
      </nav>

      <div>
        <div>
          <p>Sign in</p>
        </div>
        <div>
          <p>Sign up</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
