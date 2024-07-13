import InstaIcon from "../assets/icons/insta.svg"
import XSocial from "../assets/icons/x-social.svg"
import TiktokIcons from "../assets/icons/tiktok.svg"
import YoutubeIcon from "../assets/icons/youtube.svg"

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60">
      <div className="container border-t border-white/10 py-5">
        <div className="flex flex-col gap-2">
          <div className="text-center ">© 2024 Your Company, Inc. All rights deserved</div>
          <ul className="flex justify-center gap-2.5">
            <li><InstaIcon /></li>
            <li><XSocial /></li>
            <li><TiktokIcons /></li>
            <li><YoutubeIcon /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
