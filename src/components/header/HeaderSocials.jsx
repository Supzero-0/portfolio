import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/mathieulecanu/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Supzero-0" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
}
