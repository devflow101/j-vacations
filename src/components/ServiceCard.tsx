/**
 * ServiceCard Component
 * 
 * Displays a service offered by J Vacations in a card format.
 * Includes an icon, title, and description with hover effects.
 * 
 * @component
 * @example
 * ```tsx
 * <ServiceCard
 *   title="Flight Bookings"
 *   description="International and domestic flight reservations"
 *   icon="✈️"
 * />
 * ```
 */
interface ServiceCardProps {
  /** Title of the service */
  title: string
  /** Description of the service */
  description: string
  /** Emoji or icon to represent the service */
  icon: React.ReactNode
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
      <div className="text-[#2196F3] mb-4 flex justify-center text-4xl" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-[#1a365d]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
} 