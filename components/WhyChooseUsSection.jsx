import React from "react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      number: "01",
      title: "Licensed & Insured Technicians",
      description:
        "Our team consists of fully licensed, bonded, and insured appliance repair technicians with extensive training and certifications. We provide guaranteed workmanship and comprehensive insurance coverage.",
    },
    {
      number: "02",
      title: "High Quality Parts",
      description:
        "We use top-notch OEM and premium aftermarket parts to repair home appliances in the most efficient way for our customers. All parts come with manufacturer warranties and meet strict quality standards.",
    },
    {
      number: "03",
      title: "Dedicated 24/7 Support",
      description:
        "You can rely on our 24/7 technical support team that will gladly solve any appliance emergency. Our certified technicians are available round-the-clock for urgent repairs and consultations.",
    },
    {
      number: "05",
      title: "Same-Day Emergency Service",
      description:
        "We offer rapid response same-day emergency repair services for critical appliance failures. Our mobile repair units are equipped to handle urgent repairs on-site with minimal disruption to your daily routine.",
    },
    {
      number: "06",
      title: "All Major Brand Expertise",
      description:
        "Expert repair services for all major appliance brands including Samsung, LG, Bosch, Whirlpool, KitchenAid, GE, Maytag, and more. Our technicians are factory-trained and certified for multiple brands.",
    },
    {
      number: "07",
      title: "Competitive Pricing & Guarantees",
      description:
        "We offer transparent, competitive pricing with no hidden fees. All repairs come with comprehensive warranties and satisfaction guarantees. Our upfront pricing ensures you know exactly what you're paying for.",
    },
  ];

  return (
    <section className="py-20 px-5 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-700 mb-2">
            Some Reasons
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose Us
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {reasons.map((reason, index) => (
            <article key={index} className="flex items-start space-x-2">
              <div className="flex items-center gap-1 mt-0.5">
                <span className="font-bold text-red-700">{reason.number}</span>
                <div className="w-8 h-[1px] bg-gray-900"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
