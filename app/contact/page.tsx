"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MessageSquareIcon } from "@/components/ui/SolarIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// TODO(client-confirm): Phone numbers per blueprint: primary +91-9899806844, secondary +91-9873875477.
// Footer previously had +91-9310660216. Confirm exact numbers with client.
const PHONE_PRIMARY = "+91-9899806844";
const PHONE_SECONDARY = "+91-9873875477";
const EMAIL = "dyusolar@gmail.com";

// TODO(client-confirm): Office address location is unconfirmed. Showing Delhi / NCR with Google Maps view.
const OFFICE_ADDRESS = "Delhi / NCR, India";

export default function ContactPage() {
  const ref = useRef<HTMLDivElement>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    enquiryType: "Site Feasibility Audit",
    propertyType: "Industrial",
    areaOrBill: "",
    message: "",
    consent: false,
    website: "", // honeypot — leave empty
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-fade]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatusMsg(null);

    // Client-side validation
    if (!formData.name.trim()) {
      setStatusMsg({ type: "error", text: "Please enter your Full Name." });
      return;
    }
    if (!formData.phone.trim()) {
      setStatusMsg({ type: "error", text: "Please enter your Phone Number." });
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatusMsg({ type: "error", text: "Please enter a valid Email Address." });
      return;
    }
    if (!formData.consent) {
      setStatusMsg({ type: "error", text: "Please check the consent box to proceed." });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatusMsg({
          type: "success",
          text: "Thank you! Your enquiry has been received. Our team will contact you shortly.",
        });
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          enquiryType: "Site Feasibility Audit",
          propertyType: "Industrial",
          areaOrBill: "",
          message: "",
          consent: false,
          website: "",
        });
      } else {
        const errText =
          typeof data?.error === "string" && data.error.length < 200
            ? data.error
            : "Failed to submit enquiry.";
        setStatusMsg({ type: "error", text: errText });
      }
    } catch (err) {
      console.error(err);
      setStatusMsg({ type: "error", text: "Something went wrong. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={ref} className="page-wrap">
      <Header />
      <main className="main-wrap">
        {/* Banner Area */}
        <section className="banner-area">
          <div className="w-container">
            <div className="banner-wrap">
              <h1 data-fade className="heading-two text-white">Contact Us</h1>
              <div data-fade className="contact-banner-tagline">
                <p className="section-content text-white">
                  Tell us about your rooftop or utility-scale solar requirement — we&apos;ll get
                  back to you with an engineered plan and custom ROI assessment.
                </p>
              </div>
            </div>
          </div>
          <div className="banner-img-wrap">
            <Image
              src="/images/floating-solar.jpg"
              alt="DYU Solar engineering and EPC delivery"
              width={1400}
              height={500}
              className="banner-img object-cover w-full h-full"
              priority
            />
          </div>
        </section>

        {/* Contact Area */}
        <section className="contact-area">
          <div className="w-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-12">
              
              {/* Contact Information & Channels */}
              <div className="lg:col-span-5 space-y-8">
                <div data-fade>
                  <h2 className="heading-four mb-4">Let&apos;s Build Energy Together</h2>
                  <p className="section-content text-gray-700">
                    Get in touch with DYU Solar for technical feasibility audits, solar EPC consultations, or project quotes.
                  </p>
                </div>

                <div className="space-y-6 pt-4">
                  {/* Phone */}
                  <div data-fade className="contact-info-item p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <p className="text-xs uppercase tracking-wider text-solar-gold font-bold mb-1">Phone Enquiries</p>
                    <div className="flex flex-col space-y-1">
                      <a href={`tel:${PHONE_PRIMARY.replace(/[^+\d]/g, "")}`} className="text-navy font-semibold hover:underline text-lg">
                        {PHONE_PRIMARY}
                      </a>
                      <a href={`tel:${PHONE_SECONDARY.replace(/[^+\d]/g, "")}`} className="text-navy font-semibold hover:underline text-base">
                        {PHONE_SECONDARY} (Direct Line)
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div data-fade className="contact-info-item p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <p className="text-xs uppercase tracking-wider text-solar-gold font-bold mb-1">Email</p>
                    <a href={`mailto:${EMAIL}`} className="text-navy font-semibold hover:underline text-lg">
                      {EMAIL}
                    </a>
                  </div>

                  {/* WhatsApp Click-to-Chat */}
                  <div data-fade className="contact-info-item p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                    <p className="text-xs uppercase tracking-wider text-emerald-700 font-bold mb-1">Direct WhatsApp</p>
                    <a
                      href="https://wa.me/919899806844?text=Hello%20DYU%20Solar%2C%20I%20would%20like%20to%20enquire%20about%20a%20solar%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-emerald-800 font-semibold hover:underline text-base"
                    >
                      <MessageSquareIcon className="w-5 h-5 text-emerald-700" />
                      <span>Chat with an Engineer on WhatsApp</span>
                    </a>
                  </div>

                  {/* Location */}
                  <div data-fade className="contact-info-item p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <p className="text-xs uppercase tracking-wider text-solar-gold font-bold mb-1">Office Location</p>
                    {/* TODO(client-confirm): exact address pin to be updated upon client verification */}
                    <p className="text-navy font-medium">{OFFICE_ADDRESS}</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div data-fade className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-navy mb-2">Request Solar Feasibility Audit</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Fill out the form below to receive a custom engineering proposal and ROI estimate.
                </p>

                {statusMsg && (
                  <div
                    className={`p-4 rounded-lg mb-6 text-sm font-medium ${
                      statusMsg.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {statusMsg.text}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="relative space-y-4">
                  {/* Honeypot — hidden from users; filled by simple bots */}
                  <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy text-gray-900"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                        Company / Organisation
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Manufacturing"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy text-gray-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91-9876543210"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy text-gray-900"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy text-gray-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Enquiry Type */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                        Enquiry Type
                      </label>
                      <select
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy text-gray-900 bg-white"
                      >
                        <option value="Site Feasibility Audit">Site Feasibility Audit</option>
                        <option value="Rooftop Solar">Rooftop Solar</option>
                        <option value="Utility-Scale">Utility-Scale Ground-Mounted</option>
                        <option value="Tender Enquiry">Tender Enquiry</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>

                    {/* Property Type */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                        Property Type
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy text-gray-900 bg-white"
                      >
                        <option value="Industrial">Industrial Facility</option>
                        <option value="Commercial">Commercial Building</option>
                        <option value="Institutional">Institutional / Educational</option>
                        <option value="Government">Government / Public Sector</option>
                        <option value="Residential">Residential Property</option>
                      </select>
                    </div>
                  </div>

                  {/* Approx Roof / Land Area or Monthly Bill */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                      Approx. Roof/Land Area (sq. ft / acres) or Monthly Bill (₹)
                    </label>
                    <input
                      type="text"
                      value={formData.areaOrBill}
                      onChange={(e) => setFormData({ ...formData, areaOrBill: e.target.value })}
                      placeholder="e.g. 25,000 sq ft roof or ₹1.5 Lakhs/month"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy text-gray-900"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                      Message / Project Details
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about your load requirements, timeline, or site location..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy text-gray-900"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-navy focus:ring-navy"
                    />
                    <label htmlFor="consent" className="text-xs text-gray-600 leading-tight">
                      I consent to DYU Solar contacting me via Phone, WhatsApp, or Email regarding this solar feasibility request. <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-4 py-4 px-6 bg-navy hover:bg-navy-light text-white font-bold rounded-xl shadow-lg transition-all transform active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {loading ? "Submitting Request..." : "Submit Solar Audit Enquiry →"}
                  </button>
                </form>
              </div>
            </div>

            {/* Embedded Google Maps Area */}
            {/* TODO(client-confirm): Google Maps embed centered on Delhi/NCR region. Replace pin src with exact street address once verified */}
            <div data-fade className="mt-16 rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-96 relative">
              <iframe
                title="DYU Solar Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192777!2d77.06889754125712!3d28.64455848529323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
