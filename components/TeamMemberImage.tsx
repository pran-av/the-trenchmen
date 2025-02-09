import Image from 'next/image'

interface TeamMemberImageProps {
  src: string
  alt: string
  className?: string
}

export function TeamMemberImage({ src, alt, className }: TeamMemberImageProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={96}
        height={96}
        priority
        className="rounded-full object-cover"
      />
    </div>
  )
} 