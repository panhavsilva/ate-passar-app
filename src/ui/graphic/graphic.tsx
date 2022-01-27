import * as G from './graphic-style'

type Data = {
  label: string,
  value: number,
}

export type GraphicProps = {
  size: 'large' | 'small',
  title: string,
  data: Data[],
}

const maxValue = (data: Data[]) => {
  const seconds = data.map((item) => item.value)
  const result = seconds.reduce(function (accumulated, current) {
    if (accumulated > current) {
      return accumulated
    }
    return current
  }, 0)

  return result
}

const convertSecondsToHhMmSs = (totalSeconds: number) => {
  const hours = Math.floor(totalSeconds / 3600)
  const min = Math.floor(totalSeconds % 3600 / 60)
  const seconds = Math.floor(totalSeconds % 60)
  const includesZero = (number: number) => {
    if (number < 10) { return `0${number}` }
    return number
  }
  return `${includesZero(hours)}:${includesZero(min)}:${includesZero(seconds)}`
}

const ranges = (data: Data[]) => {
  const max = maxValue(data)
  const middle = Math.round(max / 2)
  const betweenMaxMiddle = Math.round((max - middle) / 2 + middle)
  const min = 0
  const betweenMiddleMin = Math.round(middle / 2)

  return [
    convertSecondsToHhMmSs(max),
    convertSecondsToHhMmSs(betweenMaxMiddle),
    convertSecondsToHhMmSs(middle),
    convertSecondsToHhMmSs(betweenMiddleMin),
    convertSecondsToHhMmSs(min),
  ]
}

export const Graphic = ({ size, title, data }: GraphicProps) => {
  const oneSecondSize = (276 / maxValue(data))
  const yAxis = ranges(data)

  return (
    <G.Container size={size}>
      <G.Title>{title}</G.Title>
      <G.YAxis>
        {yAxis.map((item) => (
          <G.Hours key={item} title={item}>
            {item.match(/\d\d:\d\d/g)}
          </G.Hours>
        ))}
      </G.YAxis>
      <G.Shape>
        <G.Grid />
        <G.Grid />
        <G.Grid />
        <G.Grid />
        <G.Bars size={size}>
          {data.map((item) => (
            <G.BarOfDay
              size={(item.value * oneSecondSize) + 'px'}
              key={item.value}
            />
          ))}
        </G.Bars>
      </G.Shape>
      <G.XAxis>
        {data.map((item) => (
          <G.Day key={item.label}>{item.label}</G.Day>
        ))}
      </G.XAxis>
    </G.Container>
  )
}
