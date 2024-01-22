import FC from "../../assets/FC.png"
import COMP from "../../assets/amzn.png"
import PIZZA from "../../assets/pizza.png"
import COMP1 from "../../assets/cttv.png"
import MI from "../../assets/multitude-insights-square.png"

export const PRIV = "private"

export const portfolioItems = [
  {
    id: 1,
    img: MI,
    title: "Multitude Insights",
    github: "",
    demo: "https://multitudeinsights.com",
    demoBtnText: "Visit Company Website",
  },
  {
    id: 2,
    img: FC,
    title: "Fighting Covid",
    github: "https://github.com/Discode-Stu/fighting-covid",
    demo: "https://62deff25dbe350153e804c77--singular-raindrop-5b6813.netlify.app/",
  },
  {
    id: 3,
    img: COMP1,
    title: "Couchtour.tv",
    github: "",
    demo: "",
    option: "This project is still in development. Coming to the public soon!",
    priv: true,
  },
  {
    id: 4,
    img: COMP,
    title: "Amazona",
    github: "https://github.com/Discode-Stu/amazona",
    // demo: "https://amazona-ds.herokuapp.com/",
    demo: "",
  },
  {
    id: 5,
    img: PIZZA,
    title: "Pizza Restaurant Website",
    github: "https://github.com/Discode-Stu/devcamp-pizza",
    demo: "https://nostalgic-hoover-094249.netlify.app/index.html",
  },
]
