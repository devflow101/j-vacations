'use client'

import Image from 'next/image'
import { useState } from 'react'

/**
 * ImageWithFallback Component
 * 
 * A wrapper around Next.js Image component that provides fallback functionality
 * when the primary image fails to load.
 * 
 * @component
 * @example
 * ```tsx
 * <ImageWithFallback
 *   src="/path/to/image.jpg"
 *   alt="Description"
 *   width={300}
 *   height={200}
 * />
 * ```
 */
interface ImageWithFallbackProps {
  /** Source URL of the image */
  src: string
  /** Alt text for accessibility */
  alt: string
  /** Optional width in pixels */
  width?: number
  /** Optional height in pixels */
  height?: number
  /** Whether to fill container */
  fill?: boolean
  /** Additional CSS classes */
  className?: string
  /** Whether to prioritize this image */
  priority?: boolean
}

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  fill,
  className,
  priority = false
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false)

  const defaultImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23f0f0f0"/%3E%3Ctext x="50" y="50" font-family="Arial" font-size="14" fill="%23666" text-anchor="middle" dy=".3em"%3EImage Loading...%3C/text%3E%3C/svg%3E'

  return (
    <Image
      src={error ? defaultImage : src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      className={className}
      onError={() => setError(true)}
      priority={priority}
      unoptimized={error}
    />
  )
} 