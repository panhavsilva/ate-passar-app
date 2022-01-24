import * as G from './graphic-style'

export type GraphicProps = {
  size: 'large' | 'small',
  title: string,
  xAxis: [string, string, string, string, string, string, string],
  data: {
    mon: number,
    tues: number,
    wed: number,
    thur: number,
    fri: number,
    sat: number,
    sun: number,
  },
}

const maxValue = (minutes: number[]) => {
  const result = minutes.reduce(function (accumulated, current) {
    if (accumulated > current) {
      return accumulated
    }
    return current
  }, 0)

  return result
}

const convertMinutesHours = (minute: number) => {
  const hours = Math.floor(minute / 60)
  const min = minute % 60
  const textHours = (`00${hours}`).slice(-2)
  const textMinutos = (`00${min}`).slice(-2)

  return `${textHours}:${textMinutos}`
}

const ranges = (minutes: number[]) => {
  const max = maxValue(minutes)
  const middle = Math.round(max / 2)
  const betweenMaxMiddle = Math.round((max - middle) / 2 + middle)
  const min = 0
  const betweenMiddleMin = Math.round(middle / 2)

  return [
    convertMinutesHours(max),
    convertMinutesHours(betweenMaxMiddle),
    convertMinutesHours(middle),
    convertMinutesHours(betweenMiddleMin),
    convertMinutesHours(min),
  ]
}

export const Graphic = ({ size, title, xAxis, data }: GraphicProps) => {
  const minutes = [
    data.mon,
    data.tues,
    data.wed,
    data.thur,
    data.fri,
    data.sat,
    data.sun,
  ]
  const oneMinuteSize = (276 / maxValue(minutes))
  const yAxis = ranges(minutes)

  return (
    <G.Container size={size}>
      <G.Title>{title}</G.Title>
      <G.YAxis>
        {yAxis.map((item) => (
          <G.Hours key={item}>{item}</G.Hours>
        ))}
      </G.YAxis>
      <G.Shape>
        <G.Grid />
        <G.Grid />
        <G.Grid />
        <G.Grid />
        <G.Bars size={size}>
          {minutes.map((item) => (
            <G.BarOfDay size={(item * oneMinuteSize) + 'px'} key={item} />
          ))}
        </G.Bars>
      </G.Shape>
      <G.XAxis>
        {xAxis.map((item) => (
          <G.Day key={item}>{item}</G.Day>
        ))}
      </G.XAxis>
    </G.Container>
  )
}
