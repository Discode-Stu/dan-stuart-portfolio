import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"

export const data = [
  {
    h4: "Email",
    h5: "stuHeadz@gmail.com",
    href: "mailto:stuheadz@gmail.com",
    icon: <MdOutlineEmail className="contact__option-icon" />,
  },
  {
    h4: "Messenger",
    h5: "Daniel Stuart",
    href: "https://m.me/DanMindBodyFitnessClub",
    icon: <RiMessengerLine className="contact__option-icon" />,
  },
  {
    h4: "WhatsApp",
    h5: "1-860-555-4242",
    href: "https://api.whatsapp.com/send?phone=18609772982",
    icon: <BsWhatsapp className="contact__option-icon" />,
  },
]
