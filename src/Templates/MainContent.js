// Filename - Header.js

import React from "react";
import "bootstrap"

import CardList from "./cards"

import image from "../assets/Group 77.png"


export default function MainContent() {
	return (
		<div id="main-banner">
			<div id="bannerImage">
				<img src={image} alt="" />
			</div>
			<div id="bannertext">
				<h1>Online Experiences</h1>
				<p id="banner-paragraph"> Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
			</div>
			<div id="bannerCards">
				<CardList />
			</div>
		</div>

	);
}

