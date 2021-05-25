import React from "react";

import { MenuItems } from "./ta-menu-items.styles";
import TeslaMenuItem from "../ta-menu-item/ta-menu-item.component";

import menuItems from "./items-data";

const TeslaAccountMenuItems = () => {
  return (
    <MenuItems>
      {menuItems.map(({ id, title, subTitle, image, buttons }) => (
        <TeslaMenuItem
          key={id}
          id={id}
          title={title}
          subTitle={subTitle}
          image={image}
          buttons={buttons}
        />
      ))}
    </MenuItems>
  );
};

export default TeslaAccountMenuItems;
