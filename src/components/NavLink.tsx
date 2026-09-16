import Link, { LinkProps } from 'next/link'

type NavLinkProps = LinkProps & React.ComponentPropsWithoutRef<'a'>

// An in-page anchor resolves to the route you are already on, so prefetching it
// fetches the current page again. Defaulted here rather than at each call site.
export const isSamePageHref = (href: LinkProps['href']) =>
  typeof href === 'string' && href.startsWith('#')

export function NavLink(props: NavLinkProps) {
  return (
    <Link
      className="inline-block rounded-lg px-3 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
      prefetch={isSamePageHref(props.href) ? false : undefined}
      {...props}
    />
  )
}
