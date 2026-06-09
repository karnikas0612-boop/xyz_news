import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { useState } from "react";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    specialization: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      city: "",
      phone: "",
      specialization: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-2xl mx-auto border border-border p-8 mt-16">
        <h2 className="text-3xl font-display font-bold mb-8">
          Join Network Form
        </h2>

        {/* SUCCESS MESSAGE */}
        {submitted && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 border border-green-400">
            Application submitted successfully 
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 border border-border"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border border-border"
          />

          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full p-3 border border-border"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-3 border border-border"
          />

          <select
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            className="w-full p-3 border border-border"
          >
            <option value="">Select Specialization</option>
            <option value="field">Field Reporting</option>
            <option value="political">Political Coverage</option>
            <option value="sports">Sports Coverage</option>
            <option value="video">Video Journalism</option>
            <option value="drone">Drone Coverage</option>
          </select>

          <button
            type="submit"
            className="w-full bg-accent text-white py-3 font-bold hover:bg-accent/90"
          >
            Submit Application
          </button>

        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;