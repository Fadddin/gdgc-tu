import Link from "next/link"
import {  Instagram, Linkedin  } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-google-sans font-bold text-xl mb-4">
              <span className="text-google-blue">G</span>
              <span className="text-google-red">D</span>
              <span className="text-google-yellow">G</span>
              <span className="text-google-green"> Tezpur University</span>
            </h3>
            <p className="text-gray-600 mb-4 max-w-md">
              Google Developer Groups (GDG) Tezpur University is a community of developers who are interested in
              Google's developer technology.
            </p>
            <div className="flex space-x-4">
              
              <Link href="#" className="text-gray-500 hover:text-google-blue transition-colors">
              <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="https://www.instagram.com/gdgc_tezu?igsh=MTJkdWJ3enI1dDU0aw=="
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                
                            </svg>
                            <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-google-blue transition-colors">
              <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="https://www.linkedin.com/company/gdsc-tezpur-university/"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                              
                            </svg>
                <Linkedin size={20} />
              </Link>
              
            </div>
          </div>

          <div>
            <h4 className="font-google-sans font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-google-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-google-blue transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-600 hover:text-google-blue transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-google-blue transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-google-sans font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">Tezpur University, Napaam</li>
              <li className="text-gray-600">Tezpur, Assam - 784028</li>
             
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Google Developer Groups Tezpur University. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  )
}
