import NavItem from "../header/NavItem.jsx";

const FooterLinkList = ({ title, menuItems }) => {
  return (
    <div className="pb-6">
      <h4 className="text-2xl font-medium font-italiana text-light-dark pb-4">
        {title}
      </h4>
      <ul className=" space-y-3 text-lg">
        {menuItems.map((item) => (
          <NavItem key={item.to} to={item.to} label={item.label} />
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkList;
