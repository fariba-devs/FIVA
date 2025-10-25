// components/BillingDetailsForm.jsx
import { useForm } from "react-hook-form";
import { useState } from "react";
import Input from "../../components/ui/Input.jsx";
import Select from "../../components/ui/Select.jsx";
import Textarea from "../../components/ui/Textarea.jsx";

const BillingDetailsForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      country: "United States",
      streetAddress: "",
      apartment: "",
      city: "",
      state: "Florida",
      zipCode: "",
      phone: "",
      email: "",
      orderNotes: "",
      paymentMethod: "paypal",
    },
  });

  const paymentMethod = watch("paymentMethod");

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Australia",
    "Japan",
    "Other",
  ];

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const paymentMethods = [
    {
      id: "bank",
      label: "Direct Bank Transfer",
      desc: "Make your payment directly into our bank account. Please use your Order ID. Your order will shipped after funds have cleared in our account.",
    },
    {
      id: "check",
      label: "Check Payments",
      desc: "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.",
    },
    {
      id: "cod",
      label: "Cash on Delivery",
      desc: "Pay with cash upon delivery.",
    },
    {
      id: "paypal",
      label: "PayPal",
      desc: "Pay via PayPal; you can pay with your credit card if you don't have a PayPal account.",
    },
  ];

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      console.log("Form Data:", data);
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      aria-label="BillingDetailsForm"
      className="min-h-screen py-12 px-4 mt-10 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side */}
          <div className="shadow-md lg:col-span-2 px-8 py-10 space-y-8">
            <h2 className="text-4xl lg:text-5xl text-primary font-italiana">
              Billing Details
            </h2>

            <Input
              label="First Name"
              required
              {...register("firstName", {
                required: "First name is required",
                minLength: {
                  value: 2,
                  message: "First name must be at least 2 characters",
                },
              })}
              error={errors.firstName}
            />

            <Input
              label="Last Name"
              required
              {...register("lastName", {
                required: "Last name is required",
                minLength: {
                  value: 2,
                  message: "Last name must be at least 2 characters",
                },
              })}
              error={errors.lastName}
            />

            <Input
              label="Company Name (Optional)"
              {...register("companyName")}
              error={errors.companyName}
            />

            <Select
              label="Country / Region"
              options={countries}
              required
              {...register("country", { required: "Please select a country" })}
            />

            <Input
              label="Street Address"
              placeholder="House number and street name"
              required
              {...register("streetAddress", {
                required: "Street address is required",
                minLength: {
                  value: 5,
                  message: "Street address must be at least 5 characters",
                },
              })}
              error={errors.streetAddress}
            />

            <Input
              label="Apartment / Suite (Optional)"
              {...register("apartment")}
              error={errors.apartment}
            />

            <Input
              label="Town / City"
              required
              {...register("city", {
                required: "City is required",
                minLength: {
                  value: 2,
                  message: "City must be at least 2 characters",
                },
              })}
              error={errors.city}
            />

            <Select
              label="State"
              options={states}
              required
              {...register("state", { required: "Please select a state" })}
            />

            <Input
              label="ZIP Code"
              required
              {...register("zipCode", {
                required: "ZIP Code is required",
                pattern: {
                  value: /^\d{5}(-\d{4})?$/,
                  message: "Invalid ZIP code",
                },
              })}
              error={errors.zipCode}
            />

            <Input
              label="Phone"
              type="tel"
              placeholder="+1 123-456-7890"
              required
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[\d\s\-\+\(\)]+$/,
                  message: "Invalid phone number",
                },
              })}
              error={errors.phone}
            />

            <Input
              label="Email Address"
              type="email"
              required
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              error={errors.email}
            />

            <Textarea
              label="Order Notes (Optional)"
              rows={4}
              placeholder="Notes about your order."
              {...register("orderNotes")}
              error={errors.orderNotes}
            />
          </div>

          {/* Right side */}
          <div className="lg:col-span-1 shadow-md">
            <div className="p-6 sticky top-8 space-y-4">
              <h2 className="text-primary text-3xl lg:text-4xl font-italiana text-gray-800">
                Cart Totals
              </h2>

              <div className="border-t border-gray-300 py-3 flex justify-between font-semibold text-sm">
                <span className="text-gray-700">SUBTOTAL</span>
                <span className="text-gray-700">$2,370.00</span>
              </div>

              <div className="border-t border-b border-gray-300 py-3 flex justify-between font-semibold text-base">
                <span className="text-gray-900">TOTAL</span>
                <span className="text-gray-900">$2,370.00</span>
              </div>

              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-start gap-3 cursor-pointer transition ${paymentMethod === method.id ? "text-black" : "text-gray-600"}`}
                  >
                    <input
                      type="radio"
                      value={method.id}
                      {...register("paymentMethod")}
                      className="mt-1 accent-black w-4 h-4"
                    />
                    <div>
                      <span className="uppercase font-semibold text-sm block mb-1">
                        {method.label}
                      </span>
                      <p className="text-sm text-gray-500 leading-snug">
                        {method.desc}
                      </p>
                    </div>
                  </label>
                ))}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 mt-4 text-white py-3 text-lg font-medium hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Processing..." : "Place An Order"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default BillingDetailsForm;
