const LocationCard = ({ title, address, phones, email }) => {
  return (
    <div className="w-full lg:w-1/2 pr-4 mb-6 space-y-4">
      <h5 className="text-2xl font-family-italiana underline uppercase">
        {title}
      </h5>
      <address className="not-italic pt-3 font-light space-y-6">
        <p>{address}</p>

        {phones.map((phone, idx) => (
          <p key={idx}>
            <a href={`tel:${phone}`} className="hover:underline">
              {phone}
            </a>
          </p>
        ))}

        <p>
          <a href={`mailto:${email}`} className="hover:underline">
            {email}
          </a>
        </p>
      </address>
    </div>
  );
};

export default LocationCard;
