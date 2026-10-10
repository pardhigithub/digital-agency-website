
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStatus("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!event.currentTarget.reportValidity()) {
      return;
    }

    setStatus(
      "Thank you! Your form passed validation. Email delivery is not connected yet."
    );

    setFormData({
      name: "",
      email: "",
      projectType: "",
      message: "",
    });
  }

  return (
    <section id="contact" className="bg-slate-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
            Get In Touch
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Have a project in mind?
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Tell us about your idea. Let's discuss how we can turn it
            into a digital experience.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Contact information */}
          <div className="rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
            <h3 className="text-2xl font-bold">
              Let's build something great.
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Have questions or need a website for your business?
              We'd love to hear from you.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="mt-1 font-medium">hello@pixelcraft.example</p>
              </div>

              <div>
                <p className="text-sm text-slate-400">Services</p>
                <p className="mt-1 font-medium">
                  Web Development · UI/UX · Digital Solutions
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">Availability</p>
                <p className="mt-1 font-medium">Open to new projects</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="projectType"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                What do you need?
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
              >
                <option value="">Select a service</option>
                <option value="website">Business website</option>
                <option value="frontend">React frontend</option>
                <option value="dashboard">Admin dashboard</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={5}
                required
                minLength={10}
                className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-violet-600 px-6 py-3.5 font-semibold text-white transition hover:bg-violet-700"
            >
              Send Message →
            </button>

            {status && (
              <p
                role="status"
                className="mt-4 rounded-xl bg-violet-50 p-4 text-sm text-violet-800"
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
