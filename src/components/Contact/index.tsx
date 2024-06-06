import {
  RiDiscordLine,
  RiFacebookBoxLine,
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
} from "@remixicon/react";
import ButtonIcon from "../Buttons/Icon";

function Contact() {
  return (
    <div className="flex justify-center gap-4">
      <ButtonIcon url="https://www.instagram.com/_rickyandrian_/">
        <RiInstagramLine />
      </ButtonIcon>
      <ButtonIcon url="https://www.facebook.com/rickyandrian1993">
        <RiFacebookBoxLine />
      </ButtonIcon>
      <ButtonIcon url="https://www.linkedin.com/in/andrian-ricky/">
        <RiLinkedinLine />
      </ButtonIcon>
      <ButtonIcon url="https://github.com/rickyandrian1993">
        <RiGithubLine />
      </ButtonIcon>
      <ButtonIcon url="https://discord.com/users/ricky_andrian">
        <RiDiscordLine />
      </ButtonIcon>
    </div>
  );
}

export default Contact;
