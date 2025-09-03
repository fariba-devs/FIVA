import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    { to: "/about", label: "Facebook", icon: Facebook },
    { to: "/shop", label: "Instagram", icon: Instagram },
    { to: "/pages", label: "Twitter", icon: Twitter },
    { to: "/account", label: "Linkedin", icon: Linkedin },
    { to: "/account", label: "Youtube", icon: Youtube },
  ];

  return (
    <div>
      <ul className="flex space-x-2 md:space-x-3">
        {socialLinks.map((link, idx) => {
          const Icon = link.icon;
          return (
            <li key={idx}>
              <a
                href={link.to}
                aria-label={link.label}
                className="flex w-10 h-10 hover:text-light-dark text-accent transition"
              >
                <Icon size={20} /> {/* آیکن رو بصورت کامپوننت نوشتم*/}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
