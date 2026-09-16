import clsx from 'clsx'

// Two of these render on the home page. Each needs its own `id`: duplicate ids
// in one document make every `url(#id)` resolve to whichever the parser saw
// first, so editing one pattern would silently repaint the other.
export function GridPattern({
  id,
  className,
}: {
  id: string
  className?: string
}) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        'absolute inset-0 right-0 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200',
        className,
      )}
    >
      <defs>
        <pattern
          x="50%"
          y={-1}
          id={id}
          width={200}
          height={200}
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <rect fill={`url(#${id})`} width="100%" height="100%" strokeWidth={0} />
    </svg>
  )
}
