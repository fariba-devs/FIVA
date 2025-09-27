import { useNewsletter } from "./useNewsletter.jsx";
import { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const { newsletter, isLoading } = useNewsletter();

  const handleSubmit = (e) => {
    e.preventDefault();
    newsletter(email);
    setEmail("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex lg:justify-end">
      <div className="flex w-full md:w-3/4 border-b border-black py-2">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 bg-transparent focus:outline-none text-gray-800 placeholder-gray-500"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="ml-2 text-accent font-semibold"
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
    </form>
  );
};

export default NewsletterForm;
