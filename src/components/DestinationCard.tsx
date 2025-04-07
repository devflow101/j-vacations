import ImageWithFallback from './ImageWithFallback'

/**
 * DestinationCard Component
 * 
 * Displays information about a travel destination in a card format.
 * Includes an image, title, description, duration, and price.
 * Features hover animations and responsive design.
 * 
 * @component
 * @example
 * ```tsx
 * <DestinationCard
 *   title="South American Delights"
 *   image="/images/destinations/south-america.jpg"
 *   description="Experience the wonders of South America"
 *   duration="12 Nights / 13 Days"
 *   price="Contact for Price"
 * />
 * ```
 */
interface DestinationCardProps {
  /** Title of the destination */
  title: string
  /** Path to the destination image */
  image: string
  /** Brief description of the destination */
  description: string
  /** Duration of the trip */
  duration: string
  /** Price information */
  price: string
}

export default function DestinationCard({ 
  title, 
  image, 
  description, 
  duration, 
  price 
}: DestinationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="relative h-48">
        <ImageWithFallback
          src={image}
          alt={`${title} - Travel Destination`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-[#1a365d] group-hover:text-[#2196F3] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{duration}</span>
          <span className="text-lg font-semibold text-[#2196F3]">{price}</span>
        </div>
      </div>
    </div>
  )
} 