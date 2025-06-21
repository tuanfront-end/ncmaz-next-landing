import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2.5 sm:px-6 px-4 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2.5 sm:px-6 px-4 text-base font-medium',
}

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-800 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    blue: 'bg-indigo-600 text-white hover:text-slate-100 hover:bg-indigo-500 active:bg-indigo-800 active:text-indigo-100 focus-visible:outline-indigo-600',
    white:
      'bg-white text-slate-900 hover:bg-indigo-50 active:bg-indigo-200 active:text-slate-600 focus-visible:outline-white',
  },
  outline: {
    slate:
      'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-indigo-600 focus-visible:ring-slate-300 bg-white',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
  },
}

type ButtonProps = (
  | {
      variant?: 'solid'
      color?: keyof typeof variantStyles.solid
    }
  | {
      variant: 'outline'
      color?: keyof typeof variantStyles.outline
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined
      })
  )

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= 'solid'
  props.color ??= 'slate'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
