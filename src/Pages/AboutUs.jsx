import React from "react";
import { Heart, Shield, Eye, Award } from "lucide-react";

export default function AboutUs() {
  const values = [
    {
      icon: Heart,
      title: "Dignity First",
      description:
        "Every person deserves mobility solutions that respect their autonomy and lifestyle.",
    },
    {
      icon: Eye,
      title: "Accessibility Matters",
      description:
        "We design for ease of use—on every device, for every ability level.",
    },
    {
      icon: Shield,
      title: "Transparency Always",
      description:
        "Clear pricing, honest product details, and straightforward processes. No surprises.",
    },
    {
      icon: Award,
      title: "Quality Without Compromise",
      description:
        "We only list products that meet rigorous safety and usability standards.",
    },
  ];

  const audiences = [
    {
      title: "Patients and individuals",
      description: "seeking independence and comfort in their daily lives.",
    },
    {
      title: "Caregivers and families",
      description:
        "looking for reliable solutions to support their loved ones.",
    },
    {
      title: "Healthcare providers",
      description: "who need trusted resources to recommend to their patients.",
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F1E8" }}>
      {/* Hero Section */}
      <section className="bg-white py-20 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Moving forward, <span className="text-orange-500">together</span>.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Mobility Hub is a trusted marketplace for mobility aids—connecting
            people who need support with products that restore independence and
            dignity.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We make mobility aids accessible, affordable, and easy to find.
            Whether you're recovering from surgery, managing a long-term
            condition, or caring for a loved one, we help you get the right
            equipment without the hassle.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            We bring together verified sellers, rental providers, and
            healthcare-quality mobility products in one place. From wheelchairs
            and walkers to mobility beds and walking aids, our platform
            simplifies the search, comparison, and purchase process.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            You can buy or rent. You can browse by need, budget, or
            recommendation. And you can trust that every product meets safety
            and quality standards.
          </p>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Mobility Hub Exists
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Finding the right mobility aid shouldn't be overwhelming. Too often,
            people face unclear pricing, limited options, or products that don't
            meet their actual needs.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We built Mobility Hub to solve that—by creating a transparent
            marketplace where{" "}
            <span className="font-semibold text-gray-900">
              accessibility isn't an afterthought, it's the foundation
            </span>
            .
          </p>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Who We Serve
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {audience.title}
                </h3>
                <p className="text-gray-600">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 bg-white rounded-lg p-6 border border-gray-200"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center bg-white rounded-lg p-10 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Vision for the Future
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            We're building a world where mobility challenges don't limit
            possibility. Where finding the right aid is simple, fast, and
            empowering. Where technology serves people—not the other way around.
          </p>
          <p className="text-lg font-semibold text-gray-900">
            Mobility Hub is just the beginning.
          </p>
        </div>
      </section>
    </div>
  );
}
