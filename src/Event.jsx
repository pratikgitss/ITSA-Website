import { Calendar, MapPin, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { ImageWithOverlay } from './components/ImageWithOverlay';

const events = [
  {
    id: 1,
    title: 'Web Development Workshop',
    date: '2024-04-15',
    time: '14:00',
    location: 'Tech Lab 101',
    description: 'Learn modern web development practices with React and TypeScript.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    category: 'workshop',
    isUpcoming: true,
  },
  {
    id: 2,
    title: 'Annual Hackathon 2024',
    date: '2024-05-20',
    time: '09:00',
    location: 'Innovation Center',
    description: '24-hour coding challenge to build innovative solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0',
    category: 'hackathon',
    isUpcoming: false,
  },
  {
    id: 3,
    title: 'AI Conference 2024',
    date: '2024-03-10',
    time: '10:00',
    location: 'Main Auditorium',
    description: 'Explore the latest trends in AI and machine learning.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    category: 'conference',
    isUpcoming: false,
  },
];

export default function Events() {
  const upcomingEvent = events.find((event) => event.isUpcoming);
  const recentEvents = events.filter((event) => !event.isUpcoming);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Upcoming Event Section */}
      {upcomingEvent && (
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Upcoming Event</h2>
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={upcomingEvent.imageUrl}
              alt={upcomingEvent.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6">
              <h3 className="text-3xl font-bold mb-4">{upcomingEvent.title}</h3>
              <p className="text-lg mb-4">{upcomingEvent.description}</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{format(new Date(upcomingEvent.date), 'MMMM d, yyyy')}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{upcomingEvent.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{upcomingEvent.location}</span>
                </div>
              </div>
              <button className="mt-6 btn btn-primary">Register Now</button>
            </div>
          </div>
        </div>
      )}

      {/* Recent Events Section */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Recent Events</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <ImageWithOverlay
                src={event.imageUrl}
                alt={event.title}
                className="aspect-video"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full">
                    {event.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{format(new Date(event.date), 'MMMM d, yyyy')}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
