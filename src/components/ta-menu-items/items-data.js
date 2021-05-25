import solarPanel from "../../images/solar-panel-small.jpg";
import t_shirt from "../../images/t-shirt.png";
import model_3_sm from "../../images/model-3-sm.png";
const data = [
  {
    id: 1,
    title: "Tesla Solar",
    subTitle:
      "Produce your own clean energy to power your home and charge your car",
    buttons: [
      { id: 1, text: "order solar roof" },
      { id: 2, text: "order solar panels" },
    ],
    image: solarPanel,
  },

  {
    id: 2,
    title: "Tesla Shop",
    subTitle: "Order History",
    buttons: [{ id: 1, text: "View" }],
    image: t_shirt,
  },

  {
    id: 3,
    subTitle: "Purchase a car from a third party?",
    buttons: [{ id: 1, text: "Add" }],
    image: model_3_sm,
  },
];

export default data;
