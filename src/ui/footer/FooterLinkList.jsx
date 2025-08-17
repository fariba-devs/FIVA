import NavItem from "../NavItem.jsx";

const FooterLinkList = ({ title, menuItems }) => {
  return (
    <div className="pb-6">
      <h4 className="text-lg font-semibold text-gray-800 pb-4">{title}</h4>
      <ul className=" space-y-4">
        {menuItems.map((item) => (
          <NavItem key={item.to} to={item.to} label={item.label} />
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkList;
