import FC from "../../assets/FC.png"
import COMP from "../../assets/amzn.png"
import BG from "../../assets/bg.jpg"
import COMP1 from "../../assets/cttv.png"

export const PRIV = "private"

export const portfolioItems = [
  {
    id: 1,
    img: FC,
    title: "Fighting Covid",
    github: "https://github.com/Discode-Stu/fighting-covid",
    demo: "https://62deff25dbe350153e804c77--singular-raindrop-5b6813.netlify.app/",
  },
  {
    id: 2,
    img: COMP1,
    title: "Couchtour.tv",
    github: "",
    demo: "",
    option: "This project is still in development. Coming to the public soon!",
    priv: true,
  },
  {
    id: 3,
    img: COMP,
    title: "Amazona",
    github: "https://github.com/Discode-Stu/amazona",
    demo: "https://amazona-ds.herokuapp.com/",
  },
]
