import * as M from './menu-style'

export type MenuItemProps = {
  children: string,
  src: string,
  alt: string,
  href: string,
  active: true | false,
}

export const MenuItem = ({ children, src, alt, href, active }: MenuItemProps) => {
  if (active === false) {
    return (
      <M.Container>
        <M.Link href={href}>
          <M.Img src={src} alt={alt} />
          <M.Title>{children}</M.Title>
        </M.Link>
      </M.Container>
    )
  }
  return (
    <M.Container>
      <M.LinkActive href={href}>
        <M.Img src={src} alt={alt} />
        <M.TitleActive>{children}</M.TitleActive>
      </M.LinkActive>
    </M.Container>
  )
}
