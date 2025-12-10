import {CircleCheckBig,Accessibility,Headset,ShieldAlert} from "lucide-react";


export default function OurPhilosophy() {
  const features = [
    {
      icon: (
        <CircleCheckBig size={40} />
      ),
      title: "Quality Equipment",
      description: "All mobility aids are well-maintained, clean, and regularly inspected for safety."
    },
    {
    icon: (
      <Accessibility size={40} />
    ),
    title: "Flexible Rental Options",
    description: "Choose from a wide range of mobility aids available for affordable, short-term or long-term rental."
    },
    {
      icon: (
        <Headset  size={40} />
      ),
      title: "Fast Support",
      description: "Get reliable assistance whenever you need help with bookings or equipment."
    },
    {
      icon: (
        <ShieldAlert size={40} />
      ),
      title: "Hygienic & Safe",
      description: "Every rental item is sanitized thoroughly and delivered in ready-to-use condition."
    }
  ];

  return (
    <div className="pb-30 bg-[#F5F1E8]">
      

      {/* Nutrition Philosophy Section */}
      <div className="py-10 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4  fredoka-big">
              The MobilityHub Advantage
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We make mobility easy, safe, and affordable with reliable equipment and trusted service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F59E0B] text-white rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3  fredoka-big">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}