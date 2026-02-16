import React, { useState } from "react";
import toast from "react-hot-toast";
import first from "../assets/first.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "17067777-eb0c-4d4b-8039-e3b51331296e",
          subject: "New Newsletter Subscription 📩",
          email: email,
          message: `New subscriber: ${email}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("✅ Thank you for subscribing!");
        setEmail(""); // clear input
      } else {
        toast.error("❌ Failed to subscribe. Try again.");
      }
    } catch (error) {
      toast.error("⚠️ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
    <hr />
      <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-600 ">
        <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-600/30 pb-6">
          <div className="md:max-w-96">
            <img src={first} alt="" />
            <p className="mt-6 text-sm">
              “Empowering the future with AI that learns, adapts, and transforms
              possibilities into reality.” <br /> <br />
              “Where human creativity meets artificial intelligence to redefine
              innovation.” 
            </p>
          </div>
          <div className="flex-1 flex items-start md:justify-end gap-20">
            <div>
              <h2 className="font-semibold mb-5 text-gray-600">Company</h2>
              <ul className="text-sm space-y-2">
                <li><a href="/">Home</a></li>
                <li><a href="#">Powerful Ai Tools</a></li>
                <li><a href="#">Choose Plan</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-gray-800 mb-5">
                Subscribe to our newsletter
              </h2>
              <div className="text-sm space-y-2">
                <p>
                  The latest news, articles, and resources, sent to your inbox
                  weekly.
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="flex items-center gap-2 pt-4"
                >
                  <input
                    className="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 h-9 rounded px-2"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-primary w-24 h-9 text-white rounded disabled:opacity-50"
                  >
                    {loading ? "Subscribing..." : "Subscribe"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <p className="pt-4 text-center text-xs md:text-sm pb-1">
          Copyright 2025 ©{" "}
          <a href="https://prebuiltui.com">Intellicore.Ai</a> - All Right
          Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
