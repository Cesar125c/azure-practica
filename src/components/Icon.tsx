import type { IconName } from '../types'

interface IconProps {
  name: IconName
  className?: string
}

const paths: Record<IconName, JSX.Element> = {
  architecture: <path d="M12 3v4m0 0H6a2 2 0 0 0-2 2v2m8-4h6a2 2 0 0 1 2 2v2M4 15v6m16-6v6M9 21H3m18 0h-6m0-6H9m3-4v4" />,
  check: <path d="m5 12 4 4L19 6" />,
  cloud: <path d="M17.5 19H7a5 5 0 1 1 1.1-9.88A7 7 0 0 1 21 13a4 4 0 0 1-3.5 6Z" />,
  code: <path d="m8 9-3 3 3 3m8-6 3 3-3 3m-2-9-4 12" />,
  cost: <path d="M12 2v20m5-16.5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />,
  github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 1.9a13.4 13.4 0 0 0-6 0C5.8.1 4.7.5 4.7.5A5 5 0 0 0 4.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 9 18v4m-4 0v-1.5a3.5 3.5 0 0 1-3-1.5" />,
  home: <path d="m3 11 9-8 9 8v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6 11V12h6v10" />,
  lock: <path d="M6 11V7a6 6 0 0 1 12 0v4m-12 0h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Zm6 4v3" />,
  rocket: <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09ZM12 15l-3-3a22 22 0 0 1 2-3.95A12.87 12.87 0 0 1 22 2c0 2.72-.78 7.5-6.05 11a22.35 22.35 0 0 1-3.95 2Zm-3-3H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />,
  server: <path d="M4 4h16v6H4Zm0 10h16v6H4Zm3-7h.01M7 17h.01" />,
  workflow: <path d="M6 3v12m0 3v3m12-18v3m0 3v12M3 15h6v3H3Zm12-9h6v3h-6ZM12 7v10m-3-5h6" />,
}

export function Icon({ name, className = 'h-5 w-5' }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  )
}
