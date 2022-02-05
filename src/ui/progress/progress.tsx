import * as P from './progress-style'
import { motion } from 'framer-motion'

type Data = {
  all: number,
  completed: number,
  date: Date,
}
export type ProgressProps = {
  size: 'large' | 'small',
  data: Data,
}

const calculatePercentage = (data: Data) => {
  const result = (data.completed * 100) / data.all
  return Math.round(result)
}
const formatDate = (date: Date) => {
  const formattedDate = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear()
  return formattedDate
}

export const Progress = ({ size, data }: ProgressProps) => {
  const sizeOnePercent = () => {
    if (size === 'small') {
      return Math.round((310 / 100) * calculatePercentage(data)) + 'px'
    }
    return Math.round((360 / 100) * calculatePercentage(data)) + 'px'
  }

  return (
    <P.Container size={size}>
      <P.Title size={size}>
        {size === 'small' && 'Seu progresso geral'}
        {size === 'large' && 'Seu progresso nesta disciplina'}
      </P.Title>
      <P.ContainerProgressBar size={size}>
        <P.ProgressBar size={size}>
          <motion.div
            className='percent-bar'
            initial={{ width: 0 }}
            animate={{ width: sizeOnePercent() }}
            transition={{
              ease: 'easeOut',
              duration: 2,
              stiffness: 260,
              damping: 20,
            }}
          />
        </P.ProgressBar>
        <P.Percent size={size}>
          {calculatePercentage(data) + '%'}
        </P.Percent>
      </P.ContainerProgressBar>
      <P.ContainerInformation size={size}>
        <P.InformationCard size={size}>
          {size === 'small' && <P.CheckIconSmall />}
          {size === 'large' && <P.CheckIconLarge />}
          <div>
            <P.InformationText type='subtitle' size={size}>
              {size === 'small' && 'Conclusões'}
              {size === 'large' && 'Conteúdos concluidos'}
            </P.InformationText>
            <P.InformationText type='text' size={size}>
              {data.completed}/{data.all}
            </P.InformationText>
          </div>
        </P.InformationCard>
        <P.InformationCard size={size}>
          {size === 'small' && <P.CalendarIconSmall />}
          {size === 'large' && <P.CalendarIconLarge />}
          <div>
            <P.InformationText type='subtitle' size={size}>
              {size === 'small' && 'Última atividade'}
              {size === 'large' && 'Último estudo desta matéria'}
            </P.InformationText>
            <P.InformationText type='text' size={size}>
              {formatDate(data.date)}
            </P.InformationText>
          </div>
        </P.InformationCard>
      </P.ContainerInformation>
    </P.Container>
  )
}
