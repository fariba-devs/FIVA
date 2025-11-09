import FooterLinkList from "./FooterLinkList.jsx";
import FooterText from "./FooterText.jsx";
import Logo from "../ui/Logo.jsx";
import SocialLinks from "./SocialLinks.jsx";

const menuItems = [
  { to: "/about", label: "About" },
  { to: "/shop", label: "Shop" },
  { to: "/pages/contact", label: "contact" },
  { to: "/account", label: "Account" },
];

const contactInfo = [
  { to: "#", label: "Tea Berry, Marinette, USA" },
  { to: "#", label: "+55 111 222 333 44" },
  { to: "#", label: "vasoinfo@gmail.com" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-300 px-6 sm:px-8 lg:px-16 pt-16 pb-5 sm:pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterText
            title={<Logo />}
            text="Nunc tristique facilisis consectetur vivamus ut porta porta
              aliquam vitae vehicula leo nullam urna lectus."
          />

          <FooterLinkList title="Quick Links" menuItems={menuItems} />

          <FooterLinkList title="Contact Info" menuItems={contactInfo} />
          <div>
            <FooterText
              title="Social info"
              text="You can follow us on our social platforms to get updates."
            />
            <SocialLinks />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-500 mt-8" />

        {/* Footer Bottom */}
        <div className="text-light-dark font-light text-lg mt-4 sm:mt-6">
          &copy; {new Date().getFullYear()} VASO.
          <a
            href="https://github.com/Fariba-shamseh"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold ml-2"
          >
            Designed by Fariba.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
