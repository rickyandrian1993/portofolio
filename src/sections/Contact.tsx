import {
  RiDiscordLine,
  RiFacebookBoxLine,
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
} from "@remixicon/react";
import ButtonIcon from "../components/Buttons/Icon";

function Contact() {
  return (
    <div className="flex justify-center gap-4">
      <ButtonIcon
        url="https://www.instagram.com/_rickyandrian_/"
        tooltip="Instagram"
      >
        <RiInstagramLine />
      </ButtonIcon>
      <ButtonIcon
        url="https://www.facebook.com/rickyandrian1993"
        tooltip="Facebook"
      >
        <RiFacebookBoxLine />
      </ButtonIcon>
      <ButtonIcon
        url="https://www.linkedin.com/in/andrian-ricky/"
        tooltip="LinkedIn"
      >
        <RiLinkedinLine />
      </ButtonIcon>
      <ButtonIcon url="https://github.com/rickyandrian1993" tooltip="Github">
        <RiGithubLine />
      </ButtonIcon>
      <ButtonIcon
        url="https://discord.com/users/ricky_andrian"
        tooltip="Discord"
      >
        <RiDiscordLine />
      </ButtonIcon>
    </div>
  );
}

export default Contact;
