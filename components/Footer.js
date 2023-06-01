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
  position: sticky;
  bottom: 0;
  left: 0;
  width: 98%;
  z-index: 1;
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
      <TabBarItem
        className={selectedTab === "home" ? "selected" : ""}
        onClick={() => handleTabClick("home")}
      >
        <Image src="/home1.png" alt="Home Icon" width={35} height={35} />
      </TabBarItem>
      <TabBarItem
        className={selectedTab === "search" ? "selected" : ""}
        onClick={() => handleTabClick("search")}
      >
        <Image src="/search.png" alt="Search Icon" width={35} height={35} />
      </TabBarItem>
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
