"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

export default function MeetTeam() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    gsap.from(headingRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });

    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2 * index,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "top 60%",
          scrub: 1,
        },
      });
    });
  }, []);

  const leads = [
    {
      id: "1",
      name: "Abhradeep Dey",
      imageUrl: "/GDGC2025/Abhradeep_Dey.jpeg",
      title: "GDG Lead",
      quote: "Dream big. Start small. Act now.",
      social: {
        linkedin: "www.linkedin.com/in/abhradeep-dey-503723265",
        twitter: "https://x.com/DeyAbhradeep04",
        github: "https://github.com/abde1245",
        instagram: "https://www.instagram.com/abhradeep1245",
      },
    },
    {
      id: "2",
      name: "Fardin Khan Rahman",
      imageUrl: "GDGC2025/Fardin_Khan_Rahman.jpeg",
      title: "Technical Lead",
      quote: "Sometimes you just have to create your own sunshine.",
      social: {
        linkedin: "https://www.linkedin.com/in/fardin-khan-a62a06266/",
        twitter: "https://x.com/Fardink2016",
        github: "https://github.com/Fadddin",
        instagram: "https://www.instagram.com/fadddin/",
      },
    },
    {
      id: "3",
      name: "Afrid Ahmed",
      imageUrl: "/GDGC2025/Afrid_Ahmed.jpeg",
      title: "Management Lead",
      quote: "Life is better when you’re laughing.",
      social: {
        linkedin: "https://in.linkedin.com/in/afrid-ahmed-39a02a1b5",
        twitter: "https://x.com/MccreaAfrid",
        github: "https://github.com/AfridMcCrea",
        instagram:
          "https://www.instagram.com/afrid_mccrea?igsh=MTF6Z2pmdHlybGgxag%3D%3D&utm_source=qr",
      },
    },
    {
      id: "4",
      name: "Himadree Changmai",
      imageUrl: "/GDGC2025/Himadree_Changmai.jpeg",
      title: "Content Lead",
      quote: "The best way to predict the future is to create it.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      id: "5",
      name: "Sanyukta Phukan",
      imageUrl: "/GDGC2025/Sanyukta_Phukan.jpeg",
      title: "Design Lead",
      quote: "Collect moments, not things.",
      social: {
        linkedin: "https://www.linkedin.com/in/sanyukta-phukan-a872212a4",
        twitter: "#",
        github: "#",
        instagram: "https://www.instagram.com/sarahatesalads",
      },
    },
    {
      id: "6",
      name: "Umananda Siddha",
      imageUrl: "GDGC2025/Umananda_Siddha.jpeg",
      title: "Development Co-Lead",
      quote: "Adventure awaits those who dare.",
      social: {
        linkedin: " https://www.linkedin.com/in/umananda-siddha-399b95217/",
        twitter: "https://x.com/TheFallen2428",
        github: "https://github.com/UmanandaSiddha",
        instagram: "https://www.instagram.com/shivaji9407/",
      },
    },
    {
      id: "7",
      name: "Debashish Bordoloi",
      imageUrl: "/GDGC2025/Debashish_Bordoloi.jpeg",
      title: "Programming Co-Lead",
      quote: "In a world where you can be anything, be kind.",
      social: {
        linkedin: "https://linkedin.com/in/debasishbordoloi555",
        twitter: "#",
        github: "https://github.com/debord555",
        instagram: "https://www.instagram.com/d347h570n3",
      },
    },
    {
      id: "8",
      name: "Shreyansh Dubey",
      imageUrl: "/GDGC2025/Shreyansh_Dubey.jpeg",
      title: "PR & Sponsorships Lead",
      quote: "Be a voice, not an echo.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      id: "9",
      name: "Debasish Bhuyan",
      imageUrl: "/GDGC2025/Debashish_Bhuyan.jpeg",
      title: "Management Co-Lead",
      quote: "I do diplomacy.",
      social: {
        linkedin: "https://www.linkedin.com/in/debasish-bhuyan-8a8854253",
        twitter: "https://x.com/oye_debasish?s=09",
        github: "https://github.com/debab007",
        instagram:
          "https://www.instagram.com/debasish.db_?igsh=MWhmZHU2Y2xwYnplcA==",
      },
    },
    {
      id: "10",
      name: "Harsh Kumar",
      imageUrl: "GDGC2025/Harsh_Kumar.jpeg",
      title: "Programming Co-Lead",
      quote: "Happiness is not by chance, but by choice.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      id: "11",
      name: "Ritap Dey",
      imageUrl: "/GDGC2025/Ritap_Dey.jpeg",
      title: "Development Co-Lead",
      quote: "We don't remember days, we remember moments.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        instagram: "#",
      },
    },
  ];

  const colors = ["red-500", "blue-500", "yellow-400", "green-500"];

  return (
    <section className="py-16 px-6 bg-gray-50 bg-gradient-to-r from-gray-50 to-gray-150">
      <h2
        ref={headingRef}
        className="text-4xl font-bold text-center mb-12 font-google-sans"
      >
        Meet the Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {leads.map((lead, index) => {
          const ringColor = colors[index % colors.length];

          return (
            <div
              key={lead.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="team-card bg-white rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="p-8 text-center">
                <div className="relative h-32 w-32 mx-auto mb-6">
                  <div
                    className={clsx(
                      "absolute -top-2 left-1/2 -translate-x-1/2 h-36 w-36 rounded-full border-t-[6px] border-b-0 border-l-transparent border-r-transparent",
                      {
                        "border-red-500": ringColor === "red-500",
                        "border-blue-500": ringColor === "blue-500",
                        "border-yellow-400": ringColor === "yellow-400",
                        "border-green-500": ringColor === "green-500",
                      }
                    )}
                    style={{ transform: "translateX(-50%) rotate(-45deg)" }}
                  />
                  <Image
                    src={lead.imageUrl || "/placeholder.svg"}
                    alt={lead.name}
                    fill
                    className="object-cover rounded-full border-4 border-white z-10 relative"
                  />
                </div>

                <h3 className="text-xl font-bold mb-1 font-google-sans">
                  {lead.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 uppercase tracking-wider">
                  {lead.title}
                </p>

                <p className="text-gray-600 italic mb-6">"{lead.quote}"</p>

                <div className="flex justify-center space-x-4">
                  {[
                    { href: lead.social.instagram, Icon: Instagram },
                    { href: lead.social.twitter, Icon: Twitter },
                    { href: lead.social.linkedin, Icon: Linkedin },
                    { href: lead.social.github, Icon: Github },
                  ].map(({ href, Icon }, i) => (
                    <Link
                      key={i}
                      href={href}
                      className="relative inline-flex items-center justify-center w-8 h-8 rounded-full text-gray-400 hover:bg-blue-100"
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
