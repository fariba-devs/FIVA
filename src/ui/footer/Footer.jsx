import FooterLinkList from "./FooterLinkList.jsx";
import FooterText from "./FooterText.jsx";
import Logo from "../Logo.jsx";
import SocialLinks from "./SocialLinks.jsx";

const menuItems = [
  { to: "/about", label: "About" },
  { to: "/shop", label: "Shop" },
  { to: "/pages", label: "Pages" },
  { to: "/account", label: "Account" },
];

const contactInfo = [
  { to: "Tea Berry, Marinette, USA", label: "Tea Berry, Marinette, USA" },
  { to: "tel:+5511122233344", label: "+55 111 222 333 44" },
  { to: "mailto:yourinfo@gmail.com", label: "yourinfo@gmail.com" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-50 px-6 sm:px-8 lg:px-16 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Grid for all sections */}
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
        <div className="text-center text-gray-500 text-sm mt-4 sm:mt-6">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
