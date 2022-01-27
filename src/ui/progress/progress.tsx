import * as P from './progress-style'
import check from 'ui/icons/gray-check.svg'
import calendar from 'ui/icons/gray-calendar.svg'

export type ProgressProps = {
  size: 'large' | 'small',
  title: string,
}

export const Progress = ({ size, title }: ProgressProps) => {
  return (
    <P.Container size={size}>
      <P.Title size={size}>{title}</P.Title>
      <P.ContainerProgressBar size={size}>
        <P.ProgressBar size={size}>
          <P.PercentBar />
        </P.ProgressBar>
        <P.Percent size={size}> 100% </P.Percent>
      </P.ContainerProgressBar>
      <P.Information size={size}>
        <div>
          <P.Image size={size} src={check} alt='Circulo com check' />
        </div>
        <div>a</div>
        <div>
          <P.Image size={size} src={calendar} alt='Calendário' />
        </div>
        <div>a</div>
      </P.Information>
    </P.Container>
  )
}
