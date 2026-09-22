import { NavLink } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import {
  FaBullhorn,
  FaPalette,
  FaEarthAfrica,
  FaChartLine,
  FaBuilding,
  FaPeopleArrows,
  FaPrint,
  FaCalendarCheck,
  FaHashtag,
  FaVideo,
  FaChartBar,
} from "react-icons/fa6";

const services = [
  {
    icon: <FaBullhorn />,
    title: "Brand Activations",
    desc: "We create immersive brand es that transform audiences into loyal customers. From retail activations, experiential roadshows, campus tours, and in-store promotions to nationwide consumer engagement campaigns, we strategically design every touchpoint to strengthen brand awareness, encourage meaningful interactions, and deliver measurable business results.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Event Management, End-to-End",
    desc: "From the first brief to the final debrief, we manage every dimension of your event. Our end-to-end service covers concept development, venue sourcing, logistics coordination, supplier management, on-site production, crowd management, and post-event reporting — ensuring a seamless, stress-free e for clients and an unforgettable one for audiences.",
  },
  {
    icon: <FaPalette />,
    title: "Creative Production",
    desc: "Our creative production team delivers exceptional concepts from ideation to execution. We specialize in custom fabrication, event staging, scenic design, exhibition booths, branded installations, digital content creation, visual merchandising, and premium event branding that reflects your organization's identity while leaving a lasting impression.",
  },
  {
    icon: <FaPrint />,
    title: "Printing, Branding & POSM",
    desc: "We design, produce, and deploy the full range of point-of-sale and marketing materials your brand needs to stand out at retail and on the ground. From illuminated floor-standing units (FSUs), shelf displays, and gondola ends to large-format prints, outdoor signage, branded merchandise, and outlet branding — every material is crafted for maximum visibility and brand consistency.",
  },
  {
    icon: <FaEarthAfrica />,
    title: "Pan-Nigerian Activations",
    desc: "With operational capability across multiple states and key commercial hubs in Nigeria, we seamlessly execute large-scale marketing campaigns nationwide. Our expertise in logistics, local partnerships, regulatory compliance, cultural adaptation, and project coordination ensures consistent brand es regardless of location.",
  },
  {
    icon: <FaHashtag />,
    title: "PR, Social Media & Social Engagement",
    desc: "We amplify your brand's voice before, during, and after every activation. Our PR and social media team handles press coordination, influencer engagement, live event social coverage, real-time content creation, community management, and post-event digital campaigns — turning on-ground moments into online conversations that extend your reach far beyond the venue.",
  },
  {
    icon: <FaVideo />,
    title: "TV & Content Productions",
    desc: "We produce broadcast-quality video content that captures the energy of your brand activations and events. Our in-house content team handles concept, scripting, filming, and post-production — delivering highlight reels, documentary-style event films, TV commercials, social content packages, and live-streaming setups that bring your brand story to screen.",
  },
  {
    icon: <FaChartBar />,
    title: "Trade Audit & Channel Development",
    desc: "We provide structured trade audit services that give brands an accurate, on-the-ground picture of their retail and channel health. From outlet census and share-of-shelf audits to compliance tracking, competitive benchmarking, and route-to-market reviews, our field teams gather the data your sales and marketing teams need to sharpen distribution, improve visibility, and grow revenue across channels.",
  },
  {
    icon: <FaChartLine />,
    title: "Event Analytics & Reporting",
    desc: "Every activation is backed by actionable insights. We provide detailed post-event reporting including audience reach, engagement metrics, footfall analysis, campaign performance, consumer sentiment, photographic documentation, and ROI evaluation — enabling clients to make informed marketing decisions with confidence.",
  },
  {
    icon: <FaBuilding />,
    title: "Corporate Celebrations",
    desc: "We curate sophisticated corporate events that celebrate achievements and strengthen organizational culture. Whether it's product launches, conferences, annual general meetings, executive retreats, award ceremonies, anniversaries, or year-end celebrations, we combine creativity, precision, and flawless execution to deliver memorable es.",
  },
  {
    icon: <FaPeopleArrows />,
    title: "Experiential Marketing",
    desc: "We connect brands with consumers through memorable, interactive es that inspire genuine engagement and long-term loyalty. By combining strategic storytelling, innovative concepts, consumer insights, and seamless execution, we create experiential marketing campaigns that encourage participation, generate conversations, amplify brand visibility, and produce measurable impact across physical and digital touchpoints.",
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Core Capabilities"
        title="Crafting Excellence"
        titleEm={
          <>
            <br />
            One Project at a Time
          </>
        }
        description="We provide a comprehensive portfolio of experiential marketing, brand engagement, printing & POSM, event management, PR, content production, and trade development services — designed to help organisations build meaningful consumer connections and deliver measurable business outcomes."
      />
      <section className="py-24 px-6 md:px-12 bg-surface dark:bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-px">
            {services.map((s) => (
              <div
                key={s.title}
                className="service-card bg-surface dark:bg-dark-card group m-2 border-2"
              >
                <div className="text-4xl text-[#4a74b3] mb-5 dark:text-white group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-navy-900 dark:text-white mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-navy-500 dark:text-[#f0f2f5] leading-7">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-6 md:px-12 bg-navy-900 dark:bg-navy-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.07),transparent_70%)] pointer-events-none" />
        <div className="max-w-2xl mx-auto relative">
          <div className="eyebrow justify-center">Ready to Begin?</div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Let's Build Something Extraordinary Together
          </h2>
          <p className="text-navy-400 leading-relaxed mb-10">
            Tell us about your vision and we'll show you how Event Perspective Agency can bring it to life.
          </p>
          <NavLink to="/contact" className="btn-primary">Start the Conversation</NavLink>
        </div>
      </section>
    </>
  );
}
