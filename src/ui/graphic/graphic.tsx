import * as G from './graphic-style'

export type GraphicProps = {
  title: string,
  xAxis: [string, string, string, string, string, string, string],
  yAxis: [string, string, string, string],
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

export const Graphic = ({ title, xAxis, yAxis, data }: GraphicProps) => {
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

  return (
    <G.Container>
      <G.Title>{title}</G.Title>
      <G.YAxis>
        {yAxis.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </G.YAxis>
      <G.Shape>
        <G.Grid />
        <G.Grid />
        <G.Grid />
        <G.Grid />
        <G.Bars>
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
