import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaX,
} from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-black w-full py-5">
      <footer className="footer sm:footer-horizontal bg-black text-white p-10">
        <nav>
          <h6 className="text-2xl font-bold">Event Explorer</h6>
          <p className="text-sm text-gray-300">
            Discover and Explore amazing events. <br /> Reserve your seat for
            your favorite events. <br /> Stay connected with us and get
            unbelievable discounts.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to={"/"} className="link link-hover">
            Home
          </Link>
          <Link to={"/my-reviews"} className="link link-hover">
            My reviews
          </Link>
          <Link to={"/profile"} className="link link-hover">
            My Profile
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link to={"/tos"} className="link link-hover">
            Terms of use
          </Link>
          <Link to={"/privacy-policy"} className="link link-hover">
            Privacy policy
          </Link>
        </nav>
        <div>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="w-80">
              <label>Enter your email address</label>
              <div className="join">
                <input
                  type="text"
                  placeholder="Your email"
                  className="input join-item text-black"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>
        <nav>
          <h6 className="footer-title">Social Media</h6>
          <div className="flex items-center gap-6">
            <a href="https://www.facebook.com/TahmidAlamJG" target="_blank">
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/tahmidalam122/"
              target="_blank"
            >
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/tahmid122" target="_blank">
              <FaGithub size={24} />
            </a>
          </div>
        </nav>
      </footer>
      <p className="text-white text-center w-full text-sm">
        Event Explorer, All rights reserved &copy; 2025
      </p>
    </div>
  );
};

export default Footer;
