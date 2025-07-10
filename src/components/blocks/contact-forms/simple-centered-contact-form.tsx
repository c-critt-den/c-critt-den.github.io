"use client";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function SimpleCenteredContactForm() {
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    console.log(target);
  };

  const contactInfo = [
    {
      label: "Email",
      value: "crittenden.ce@gmail.com",
      icon: <Mail className="h-5 w-5 text-[--color-sage-green]" />,
      href: "mailto:contact@gmail.com"
    },
    {
      label: "Phone",
      value: "+1 (517) 881-7779",
      icon: <Phone className="h-5 w-5 text-[--color-sage-green]" />,
      href: "tel:+15551234567"
    },
    {
      label: "Location",
      value: "Ann Arbor, MI",
      icon: <MapPin className="h-5 w-5 text-[--color-sage-green]" />,
      href: "#"
    },
  ];

  return (
    <div className="bg-gray-50 w-full flex items-center justify-center">
      <div className="flex relative px-4 z-20 items-center w-full justify-center py-10">
        <div className="mx-auto w-full max-w-lg bg-white px-4 md:px-10 py-8 shadow-input rounded-3xl">
          <div>
            <h1 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-[--color-deep-teal] font-[var(--font-display)]">
              Get In Touch
            </h1>
            <p className="mt-4 text-[--color-charcoal-gray] text-sm max-w-sm font-[var(--font-body)]">
              Ready to discuss how data-driven solutions can transform your healthcare organization? Let's connect.
            </p>
          </div>

          <div className="py-10">
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-[--color-charcoal-gray] font-[var(--font-body)]"
                >
                  Name
                </label>

                <div className="mt-2">
                  <input
                    id="name"
                    type="name"
                    placeholder="Dr. Sarah Johnson"
                    className="block w-full bg-white px-4 rounded-md border-0 py-1.5 shadow-input text-[--color-charcoal-gray] placeholder:text-gray-400 focus:ring-2 focus:ring-[--color-deep-teal] focus:outline-none sm:text-sm sm:leading-6 font-[var(--font-body)]"
                  />
                </div>

                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-[--color-charcoal-gray] font-[var(--font-body)]"
                >
                  Email
                </label>

                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    placeholder="sarah.johnson@hospital.com"
                    className="block w-full bg-white px-4 rounded-md border-0 py-1.5 shadow-input text-[--color-charcoal-gray] placeholder:text-gray-400 focus:ring-2 focus:ring-[--color-deep-teal] focus:outline-none sm:text-sm sm:leading-6 font-[var(--font-body)]"
                  />
                </div>

                <label
                  htmlFor="organization"
                  className="block text-sm font-medium leading-6 text-[--color-charcoal-gray] font-[var(--font-body)]"
                >
                  Organization
                </label>

                <div className="mt-2">
                  <input
                    id="organization"
                    type="text"
                    placeholder="Regional Medical Center"
                    className="block w-full bg-white px-4 rounded-md border-0 py-1.5 shadow-input text-[--color-charcoal-gray] placeholder:text-gray-400 focus:ring-2 focus:ring-[--color-deep-teal] focus:outline-none sm:text-sm sm:leading-6 font-[var(--font-body)]"
                  />
                </div>

                <label
                  htmlFor="project-type"
                  className="block text-sm font-medium leading-6 text-[--color-charcoal-gray] font-[var(--font-body)]"
                >
                  Project Type
                </label>

                <div className="mt-2">
                  <select
                    id="project-type"
                    className="block w-full bg-white px-4 rounded-md border-0 py-1.5 shadow-input text-[--color-charcoal-gray] focus:ring-2 focus:ring-[--color-deep-teal] focus:outline-none sm:text-sm sm:leading-6 font-[var(--font-body)]"
                  >
                    <option value="">Select a project type</option>
                    <option value="clinical-analytics">Clinical Analytics</option>
                    <option value="ehr-implementation">EHR Implementation</option>
                    <option value="population-health">Population Health</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 text-[--color-charcoal-gray] font-[var(--font-body)]"
                >
                  Message
                </label>

                <div className="mt-2">
                  <textarea
                    rows={5}
                    id="message"
                    placeholder="Tell me about your healthcare informatics needs and goals..."
                    className="block w-full bg-white px-4 rounded-md border-0 py-1.5 shadow-input text-[--color-charcoal-gray] placeholder:text-gray-400 focus:ring-2 focus:ring-[--color-deep-teal] focus:outline-none sm:text-sm sm:leading-6 font-[var(--font-body)]"
                  />
                </div>

                <div>
                  <button className="bg-[--color-deep-teal] relative z-10 hover:bg-[--color-sage-green] text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center w-full font-[var(--font-body)]">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3 py-4 border-t border-gray-200">
            {contactInfo.map((contact) => (
              <Link 
                href={contact.href} 
                key={contact.label}
                className="flex items-center space-x-2 text-[--color-charcoal-gray] hover:text-[--color-deep-teal] transition-colors duration-200 font-[var(--font-body)]"
              >
                {contact.icon}
                <span className="text-sm">{contact.value}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
