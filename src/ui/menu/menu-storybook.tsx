import { MenuItem, MenuItemProps } from './menu'
import calendar from 'ui/icons/calendar.svg'
import calendarActive from 'ui/icons/white-calendar.svg'

export const MenuItemStorybook = ({
  alt = 'Ilustração de um calendário',
  children = 'Calendário',
  href,
  active,
}: MenuItemProps) => {
  if (active === false) {
    return (
      <MenuItem src={calendar} alt={alt} href={href} active={active}>
        {children}
      </MenuItem>
    )
  }
  return (
    <MenuItem src={calendarActive} alt={alt} href={href} active={active}>
      {children}
    </MenuItem>
  )
}
