import React from "react";
import { Footer as FooterComponent } from "flowbite-react";

export default function Footer() {
  return (
    <FooterComponent container>
      <FooterComponent.Copyright href="#" by="Flowbite™" year={2022} />
      <FooterComponent.LinkGroup>
        <FooterComponent.Link href="#">About</FooterComponent.Link>
        <FooterComponent.Link href="#">Privacy Policy</FooterComponent.Link>
        <FooterComponent.Link href="#">Licensing</FooterComponent.Link>
        <FooterComponent.Link href="#">Contact</FooterComponent.Link>
      </FooterComponent.LinkGroup>
    </FooterComponent>
  );
}
