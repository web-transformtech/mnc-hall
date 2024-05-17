/* eslint-disable no-unused-vars */
import React from "react";
import { RiFacebookFill } from "react-icons/ri";

export default function Footer() {
  return (
    <>
 <footer class="flex flex-col space-y-10 justify-center m-10 pt-6">

<nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
    <a class="hover:text-gray-900" href="#home">Home</a>
    <a class="hover:text-gray-900" href="#about">About</a>
    <a class="hover:text-gray-900" href="#services">Services</a>
    <a class="hover:text-gray-900" href="#contact">Contact</a>
</nav>

<div class="flex justify-center space-x-5">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
    </a>
    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
    </a>
</div>
<p class="text-center text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reservered.</p>
</footer>
    </>
  );
}
