const menuItems = [
  {
    id: 1,
    text: "existing inventory",
  },
  {
    id: 2,
    text: "used inventory",
  },
  {
    id: 3,
    text: "trade-in",
  },
  {
    id: 4,
    text: "cybertruck",
  },
  {
    id: 5,
    text: "roadster",
  },
  {
    id: 6,
    text: "semi",
  },
  {
    id: 7,
    text: "charging",
  },
  {
    id: 8,
    text: "powerwall",
  },
  {
    id: 9,
    text: "commercial energy",
  },
  {
    id: 10,
    text: "utilities",
  },
  {
    id: 11,
    text: "test drive",
  },
  {
    id: 12,
    text: "find us",
  },
  {
    id: 13,
    text: "support",
  },
  {
    id: 14,
    text: "united states",
  },
];

const navItems = [
  {
    id: 1,
    text: "model S",
  },
  {
    id: 2,
    text: "model 3",
  },
  {
    id: 3,
    text: "model X",
  },
  {
    id: 4,
    text: "model Y",
  },
  {
    id: 5,
    text: "solar roof",
  },

  {
    id: 6,
    text: "solar panel",
  },
];

const conditionalReturn = () => {
  const app = document.getElementById("root");
  if (app.clientWidth >= 1100) {
    return menuItems;
  } else {
    return {
      menuItems,
      navItems,
    };
  }
};

export default conditionalReturn;
