import Image from 'next/image'

interface LogoPixelProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'white'
}

export function LogoPixel({ className = "", size = 'md', variant = 'default' }: LogoPixelProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  const logoSrc = variant === 'white' ? '/logo-white.png' : '/logo.png'

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <Image
        src={logoSrc}
        alt="The Modern Buddha"
        width={64}
        height={64}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  )
}
