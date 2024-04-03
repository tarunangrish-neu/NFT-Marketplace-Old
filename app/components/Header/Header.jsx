import React from "react";
import Link from "next/link";
import Image from "next/image";
import { headerStyle } from "./Styles.js";
import HuskyLogo from "../../assets/HuskyLogo.png";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import {CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className={headerStyle.wrapper}>
      <Link href="/">
        <div className={headerStyle.logoContainer}>
          <Image src = {HuskyLogo} width = {60} height = {60}/>
          <div className={headerStyle.logoText}>Husky NFT Store</div>
        </div>
      </Link>
      <div className = {headerStyle.searchBar}>
        <div className = {headerStyle.searchIcon}>🔍</div>
        <input className = {headerStyle.searchInput} placeholder = "Search for NFTs and Collections"/>
      </div>
      <div className={headerStyle.headerItems}>
        <Link href="/collections/0x66a576A977b7Bccf510630E0aA5e450EC11361Fa">
          <div className={headerStyle.headerItem}> Collections </div>
        </Link>
        <div className={headerStyle.headerItem}> Stats </div>
        <div className={headerStyle.headerItem}> Resources </div>
        <div className={headerStyle.headerItem}> Create </div>
        <div className={headerStyle.headerIcon}> <CgProfile/> </div>
        <div className={headerStyle.headerIcon}> <MdOutlineAccountBalanceWallet /> </div>
        </div>
    </div>
  );
}

export default Header;