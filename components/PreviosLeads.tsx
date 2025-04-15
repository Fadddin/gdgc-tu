"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Instagram,
  ChevronDown,
  ChevronUp,
  Linkedin,
  Github,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function PreviousLeads() {
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const sectionAnim = gsap.from(section, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      paused: true,
    });

    const sectionTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      onEnter: () => sectionAnim.play(),
    });

    return () => {
      sectionTrigger.kill();
    };
  }, []);

  useEffect(() => {
    const content = contentRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!content || cards.length === 0) return;

    if (isOpen) {
      gsap.set(content, { autoAlpha: 0, height: "auto" });
      const height = content.offsetHeight;
      gsap.set(content, { height: 0, autoAlpha: 1 });

      const tl = gsap.timeline();
      tl.to(content, {
        height,
        duration: 0.4,
        ease: "power2.out",
      }).fromTo(
        cards,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out",
        },
        "-=0.2"
      );
    } else if (content.offsetHeight > 0) {
      const tl = gsap.timeline();
      tl.to(cards, {
        y: -10,
        opacity: 0,
        duration: 0.2,
        stagger: 0.02,
        ease: "power2.in",
      }).to(content, {
        height: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  const previousLeads = [
    {
      id: 1,
      name: "Abhinav Upadhyay",
      title: "Lead Organizer (2023-2024)",
      imageUrl: "/GDGC2024/Abhinav_Upadhyay.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/abhinav-upadhyay-67973821b/",
        github: "http://github.com/Abhinav-Upadhyay03",
        instagram: "https://www.instagram.com/0_0abhinav/",
      },
    },
    {
      id: 2,
      name: "Himangshu Lahkar",
      title: "Technical Lead (2023-2024)",
      imageUrl: "/GDGC2024/Himangshu_Lahkar.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/himangshulahkar/",
        github: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      name: "Sneh Meend",
      title: "Management Lead (2023-2024)",
      imageUrl: "/GDGC2024/Sneh_Meend.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/sneh-meend-36821118a/",
        github: "https://github.com/SNEHMEEND",
        instagram:
          "https://www.instagram.com/snehmeend?igsh=MTh3bmtzZnF0MXRiNw==",
      },
    },
    {
      id: 4,
      name: "Hrishita Bhuyan",
      title: "Design Lead (2023-2024)",
      imageUrl: "/GDGC2024/Hrishita_Bhuyan.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/hrishita-bhuyan-b61b40226/",
        github: "#",
        instagram:
          "https://www.instagram.com/yeethri?igsh=MTFmNzR3MnUzbzllZQ%3D%3D&utm_source=qr",
      },
    },
    {
      id: 5,
      name: "Jyotishmoy Deka",
      title: "Programming Lead (2023-2024)",
      imageUrl: "/GDGC2024/Jyotishmoy_Deka.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/jyotishmoy-deka-6871b9229/",
        github: "https://github.com/Jyotishmoy12",
        instagram: "https://www.instagram.com/__jyo__2001/",
      },
    },
    {
      id: 6,
      name: "Mugdha Saikia",
      title: "Content Lead (2023-2024)",
      imageUrl: "/GDGC2024/Mugdha_Saikia.jpeg",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      id: 7,
      name: "Debarshi Sonowal",
      title: "Development Lead (2023-2024)",
      imageUrl: "/GDGC2024/Debarshi_Sonowal.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/debarshisonowal/",
        github: "https://github.com/DebarshiSonowal",
        instagram:
          "https://www.instagram.com/debarshi_sonowal?igsh=MXJ2Zmp6Zm4waGx1dg==",
      },
    },
    // {
    //     id: 8,
    //     name: "Karthik Menon",
    //     title: "Technical Lead (2020-2021)",
    //     imageUrl: "/placeholder.svg?height=100&width=100",
    //     social: {
    //         linkedin: "#",
    //         github: "#",
    //     },
    // },
    // {
    //     id: 9,
    //     name: "Divya Sharma",
    //     title: "Event Coordinator (2020-2021)",
    //     imageUrl: "/placeholder.svg?height=100&width=100",
    //     social: {
    //         linkedin: "#",
    //         github: "#",
    //     },
    // },
  ];

  return (
    <div ref={sectionRef} className="container mx-auto px-4 pb-16 max-w-6xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-white rounded-xl shadow-md p-4 mb-4 transition-colors hover:bg-gray-50"
      >
        <h3 className="text-xl font-bold font-google-sans">Previous Leads</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>

      <div
        ref={contentRef}
        className="bg-white rounded-xl shadow-md p-6 overflow-hidden"
        style={{
          height: 0,
          opacity: 0,
          visibility: "hidden",
          display: isOpen ? "block" : "none",
        }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {previousLeads.map((lead, index) => (
            <div
              key={lead.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="team-card bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm rounded-xl p-5 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-20 w-20 mx-auto mb-3 shadow-md rounded-full ring-2 ring-gray-200 overflow-hidden">
                <Image
                  src={lead.imageUrl || "/placeholder.svg"}
                  alt={lead.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-sm font-semibold text-gray-800 font-google-sans">
                {lead.name}
              </h4>
              <p className="text-xs text-gray-500 mb-3">{lead.title}</p>
              <div className="flex justify-center space-x-2">
                <Link
                  href={lead.social.linkedin}
                  className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-gray-600 hover:text-google-blue" />
                </Link>
                <Link
                  href={lead.social.github}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Github className="h-4 w-4 text-gray-600 hover:text-black" />
                </Link>
                <Link
                  href={lead.social.instagram}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Instagram className="h-4 w-4 text-gray-600 hover:text-black" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
