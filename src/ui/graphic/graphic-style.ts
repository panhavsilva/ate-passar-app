import styled from 'styled-components/macro'

export const Container = styled.div`
  border: 2px solid ${(props) => props.theme.colors.lightGray};
  border-radius: 10px;
  display: grid;
  grid-template-rows: 40px 1fr 24px;
  grid-template-areas: "title title" "yaxis shape" "yaxis xaxis";
  grid-template-columns: 53px 1fr;
  height: 400px;
  padding: 24px;
  width: 643px;
`
export const Title = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-size: 16px;
  font-weight: bold;
  grid-area: title;
  margin: 0px;
  padding: 0px;
  width: 100%;
`
export const XAxis = styled.div`
  color: ${(props) => props.theme.colors.gray};
  display: grid;
  font-size: 12px;
  grid-area: xaxis;
  grid-template-columns: repeat(7, 1fr);
  height: 100%;
  padding-left: 15px;
  width: 100%;
`
export const Day = styled.p`
  margin: 0px;
  padding: 0px;
`
export const YAxis = styled.div`
  color: ${(props) => props.theme.colors.gray};
  border-right: 2px solid ${(props) => props.theme.colors.lightGray};
  display: grid;
  font-size: 12px;
  grid-template-rows: repeat(4, 1fr);
  grid-area: yaxis;
  height: 90%;
  padding: 0px;
  width: 53px;
`
export const Shape = styled.div`
  display: grid;
  grid-area: shape;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 100%;
`
export const Grid = styled.div`
  border-top: 1px dashed ${(props) => props.theme.colors.lightGray};
  height: 100%;
  width: 100%;
`
export const Bars = styled.div`
  align-items: baseline;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: 276px;
  position: absolute;
  width: 535px;
`
type BarOfDayProps = {
  size: string,
}
export const BarOfDay = styled.div<BarOfDayProps>`
  background-image: ${(props) => props.theme.colors.gradient};
  border-radius: 55px 55px 0px 0px;
  height: ${(props) => props.size};
  margin-left: 15px;
  width: 15px;
`
