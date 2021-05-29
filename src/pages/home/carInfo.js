import modelX from "../../images/model-x.jpg";
import modelS from "../../images/model-s.jpg";
import modelY from "../../images/model-y.jpg";
import model3 from "../../images/model-3.jpg";
import solarRoof from "../../images/solar-roof.jpg";
import solarPanel from "../../images/solar-panel.jpg";
import accessories from "../../images/accessories.jpg";

const cars = [
  {
    id: 0,
    title: "Model S",
    description: "Order Online for Touchless Delivery",
    image: modelS,
    buttons: [
      { id: 1, text: "custom order", link: "#" },
      { id: 2, text: "existing inventory", link: "#" },
    ],
    range: "390",
    time: "1.99",
    topSpeed: "200",
    peakPower: "1,020",
  },
  {
    id: 1,
    title: "Model 3",
    description: "Order Online for Touchless Delivery",
    image: model3,
    buttons: [
      { id: 1, text: "custom order", link: "#" },
      { id: 2, text: "existing inventory", link: "#" },
    ],
    range: "400",
    time: "2.99",
    topSpeed: "180",
    peakPower: "900",
  },
  {
    id: 2,
    title: "Model X",
    description: "Order Online for Touchless Delivery",
    image: modelX,
    buttons: [
      { id: 1, text: "custom order", link: "#" },
      { id: 2, text: "existing inventory", link: "#" },
    ],
    range: "350",
    time: "1.55",
    topSpeed: "150",
    peakPower: "1,130",
  },
  {
    id: 3,
    title: "Model Y",
    description: "Order Online for Touchless Delivery",
    image: modelY,
    buttons: [
      { id: 1, text: "custom order", link: "#" },
      { id: 2, text: "existing inventory", link: "#" },
    ],
    range: "410",
    time: "2.05",
    topSpeed: "190",
    peakPower: "1,040",
  },
  {
    id: 4,
    title: "Lowest Cost Solar Panels in America",
    description: "Money-back guarantee",
    buttons: [
      { id: 1, text: "order now", link: "#" },
      { id: 2, text: "learn more", link: "#" },
    ],
    image: solarPanel,
  },
  {
    id: 5,
    title: "Solar for New Roofs",
    description: "Solar Roof Costs Less Than a New Roof Plus Solar Panels",
    buttons: [
      { id: 1, text: "order now", link: "#" },
      { id: 2, text: "learn more", link: "#" },
    ],
    image: solarRoof,
  },
  {
    id: 6,
    title: "Accessories",
    image: accessories,
    buttons: [{ id: 1, text: "order now", link: "#" }],
  },
];

export default cars;
