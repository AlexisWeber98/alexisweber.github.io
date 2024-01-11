import Image from "next/image";
import styles from "./contact.module.css";

const Contact = () => {
  const mail = {
    image:
      "https://imgs.search.brave.com/Zm4VkCbJEQDwN_Oou4EsZi-UDBhHCu1RfF4Su7TmJUY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pY29u/LWxpYnJhcnkuY29t/L2ltYWdlcy9lbWFp/bC1pY29uLWljby9l/bWFpbC1pY29uLWlj/by0xMi5qcGc",
    url: "mailto:Alexis.Weber@mailfence.com",
    name: "Mail",
  };

  const telegram = {
    image:
      "https://imgs.search.brave.com/mqK9rf7SuF0bn81kHzGoChWRywqXQ6OllVMZEkHW6jQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/LzgyL1RlbGVncmFt/X2xvZ28uc3Zn.svg",
    url: "https://t.me/Ale_Weber",
    name: "Telegram",
  };

  const whatsapp = {
    image:
      "https://imgs.search.brave.com/YWi5ge6JY2fuyz8ylsxHoaV_R6C_pQWX7TxgjXGeP4A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1NDMu/cG5n",
    url: "https://wa.me/+5491135655412",
    name: "WhatsApp",
  };
  const cv = {
    image:
      "https://imgs.search.brave.com/RvwsbyBYMBWRqYs1qD5dU5vsOCq6owMkIp_YYcSaPNQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMTA0ODUvMTA0/ODUwMjIucG5n",
    url: "https://drive.google.com/file/d/1TC0nBkkoKrPF4e-BdAz7XQh9R1ke0NzI/view?usp=drive_link",
    name: "CV",
  };

  const contactType = [mail, telegram, whatsapp];

  return (
    <main>
      <h1 className={styles.title}>No dudes en Contactarme</h1>
      <div className={styles.contain}>
        {contactType.map((contact) => {
          return (
            <div key={contact.name} className={styles.contact}>
              <a href={contact.url}>
                <Image
                  alt={contact.name}
                  src={contact.image}
                  width={150}
                  height={150}
                  className={styles.image}
                />
              </a>
              <h2>Contacto vía {contact.name}</h2>
            </div>
          );
        })}
      </div>

      <div>
        <h3 className={styles.h3}>Tambien puede consultar mi CV</h3>
        <div className={styles.contact}>
          <a href={cv.url}>
            <Image src={cv.image} alt="CV" width={180} height={180} />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;
