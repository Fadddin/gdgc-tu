import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Clock } from "lucide-react"

interface EventProps {
  event: {
    id: number
    title: string
    date: string
    time: string
    location: string
    image: string
    description: string
    registrationLink: string | null
  }
  isUpcoming: boolean
}

export default function EventCard({ event, isUpcoming }: EventProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform sm:hover:scale-105 duration-300">
      {!isUpcoming && <div className="relative h-96">
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill />
      </div>
      }

      {isUpcoming && <div className="relative sm:h-80 h-64">
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill />
      </div>
      }

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 font-google-sans">{event.title}</h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{event.date}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span>{event.time}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{event.location}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{event.description}</p>

        {isUpcoming && event.registrationLink ? (
          <Link
            href={event.registrationLink}
            className="inline-block bg-google-blue text-white px-4 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors"
          >
            Register Now
          </Link>
        ) : isUpcoming ? (
          <span className="inline-block bg-gray-200 text-gray-600 px-4 py-2 rounded-full font-medium">
            Registration Coming Soon
          </span>
        ) : (
          <span className="inline-block bg-gray-200 text-gray-600 px-4 py-2 rounded-full font-medium">
            Event Completed
          </span>
        )}
      </div>
    </div>
  )
}
