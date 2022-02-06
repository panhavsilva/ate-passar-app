import styled from 'styled-components/macro'

type StyleProps = {
  size: 'large' | 'small',
}

const height = {
  large: '400px',
  small: '397px',
}
const width = {
  large: '643px',
  small: '453px',
}
const bars = {
  large: '535px',
  small: '345px',
}

export const Container = styled.div<StyleProps>`
  border: 2px solid ${(props) => props.theme.colors.lightGray};
  border-radius: 10px;
  display: grid;
  grid-template-rows: 40px 1fr 24px;
  grid-template-areas: "title title" "yaxis shape" "yaxis xaxis";
  grid-template-columns: 53px 1fr;
  height: ${(props) => height[props.size]};
  padding: 24px;
  width: ${(props) => width[props.size]};
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
  grid-template-rows: repeat(4, 1fr) 40px;
  grid-area: yaxis;
  height: 100%;
  padding: 0px;
  width: 100%;
`
export const Hours = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-size: 12px;
  height: 15px;
  margin: 0;
  padding: 0px;
  width: 100%;
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
export const Bars = styled.div<StyleProps>`
  align-items: flex-end;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: 276px;
  position: absolute;
  width: ${(props) => bars[props.size]};

  & .bar-day{
    background-image: ${(props) => props.theme.colors.gradient};
    border-radius: 55px 55px 0px 0px;
    margin-left: 15px;
    width: 15px;
  }
`
