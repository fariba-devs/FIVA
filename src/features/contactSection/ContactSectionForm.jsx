import { useContactSection } from "./useContactSection.jsx";
import Loading from "../../components/ui/Loading.jsx";
import { useState } from "react";

const ContactSectionForm = () => {
  const { Contact, isLoading } = useContactSection();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Contact({
      name: formData.name,
      email: formData.email,
      message: formData.message,
      Phone: formData.number,
      Subject: formData.subject,
    });

    setFormData({
      name: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    });
  };

  if (isLoading) return <Loading />;
  return (
    <form onSubmit={handleSubmit} id="form" className="space-y-6">
      <div>
        <label className="block font-medium">Your Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Write your name here"
          className="w-full border-b p-2 focus:outline-none"
          required
        />
      </div>

      <div>
        <label className="block font-medium">Your Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Write your email here"
          className="w-full border-b p-2 focus:outline-none"
          required
        />
      </div>

      <div>
        <label className="block font-medium">Phone Number</label>
        <input
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Write your phone number"
          className="w-full border-b p-2 focus:outline-none"
        />
      </div>

      <div>
        <label className="block font-medium">Subject *</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Write your subject here"
          className="w-full border-b p-2  focus:outline-none"
          required
        />
      </div>

      <div>
        <label className="block font-medium">Your Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write Your Message Here"
          className="w-full border-b p-2 focus:outline-none"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-black text-white py-3 mt-5 hover:bg-gray-800 transition"
      >
        {isLoading ? "sending..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactSectionForm;
