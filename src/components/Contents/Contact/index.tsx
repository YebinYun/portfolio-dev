import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import "./index.css";
import { toast, ToastContainer } from "react-toastify";
import Send from "../../../assets/icons/SendIcon.svg";

const ContactComponent = () => {
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = { publicKey: process.env.REACT_APP_PUBLIC_KEY };

  const form = useRef(null);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = inputs;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      email: "",
      message: "",
    });
  };

  const onSendForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) return toast("Please enter your name");
    if (!email) return toast("Please enter your email");
    if (!message) return toast("Please enter your message");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => toast("Thank you! Your information has been submitted."))
      .catch((err) => console.error("error :", err))
      .finally(() => onReset());
  };

  return (
    <form ref={form} className="contact" onSubmit={onSendForm}>
      <p className="contactInfo">
        👩‍💻 If you have any questions, please feel free to leave a message!
      </p>
      <div className="contactInput">
        <input
          type="text"
          value={name}
          onChange={onChange}
          name="name"
          placeholder="Your name"
        />
        <input
          type="email"
          value={email}
          onChange={onChange}
          name="email"
          placeholder="Your email adress"
        />
      </div>

      <div className="contactMessage">
        <textarea
          value={message}
          onChange={onChange}
          name="message"
          placeholder="Please enter the message"
        />
      </div>

      <div className="sendButton">
        <img className="linkIcon" src={Send} alt="SendIcon" />
        <button type="submit">Send Message</button>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
        pauseOnFocusLoss // 화면을 벗어나면 알람 정지
      />
    </form>
  );
};

export default ContactComponent;
