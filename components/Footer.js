import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem;
  background-color: #e5f7eb;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 96%;
  z-index: 999;
  border-top: 1px solid #ccc;
  gap: 2rem;
`;

const TabBarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.3s, filter 0.3s;

  &:hover {
    opacity: 0.8;
  }

  &.selected {
    color: darkgreen;
  }
`;

const Footer = () => {
  const [selectedTab, setSelectedTab] = useState("");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <FooterContainer>
      <Link href="/">
        <TabBarItem
          className={selectedTab === "home" ? "selected" : ""}
          onClick={() => handleTabClick("home")}
        >
          <Image src="/home1.png" alt="Home Icon" width={35} height={35} />
        </TabBarItem>
      </Link>
      <Link href="/plants">
        <TabBarItem
          className={selectedTab === "search" ? "selected" : ""}
          onClick={() => handleTabClick("search")}
        >
          <Image src="/pin1.png" alt="Location Icon" width={35} height={35} />
        </TabBarItem>
      </Link>
      <Link href="/favorites">
        <TabBarItem
          className={selectedTab === "favorites" ? "selected" : ""}
          onClick={() => handleTabClick("favorites")}
        >
          <Image
            src="/favorite.png"
            alt="Favorite Icon"
            width={35}
            height={35}
          />
        </TabBarItem>
      </Link>
    </FooterContainer>
  );
};

export default Footer;
