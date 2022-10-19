import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import "../styles/components/informationcontainer.sass";

const infos = [
  { name: "Telefone", data: "(99)99999-9999", icon: <AiFillPhone id="phone-icon" /> },
  { name: "E-mail", data: "wallace@hotmail.com", icon: <AiOutlineMail id="email-icon" /> },
  { name: "Localização", data: "Betim / Minas Gerais", icon: <AiFillEnvironment id="pin-icon" /> }
]

const InformationContainer = () => {
  return (
    <section id="information">

      {infos.map((info) => (
        <div className="info-card" key={info.name}>
          {info.icon}
          <div>
            <h3>{info.name}</h3>
            <p>{info.data}</p>
          </div>
        </div>
      ))}
      
    </section>
  )
};

export default InformationContainer;
