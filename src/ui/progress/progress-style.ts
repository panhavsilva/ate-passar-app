import styled from 'styled-components/macro'

type StyleProps = {
  size: 'large' | 'small',
}

const width = {
  small: '386px',
  large: '453px',
}
const height = {
  small: '161px',
  large: '287px',
}
const lineProgress = {
  small: '24px',
  large: '35px',
}

export const Container = styled.div<StyleProps>`
  align-items: center;
  background-color: ${(props) => props.theme.colors.lightPurple};
  border-radius: 4px;
  display: grid;
  grid-template-rows: 24px ${(props) => lineProgress[props.size]} 1fr;
  height: ${(props) => height[props.size]};
  padding: 15px;
  width: ${(props) => width[props.size]};
`
const title = {
  small: '16px',
  large: '18px',
}
export const Title = styled.p<StyleProps>`
  color: ${(props) => props.theme.colors.purple};
  font-size: ${(props) => title[props.size]};
  margin: 0px;
`
const percent = {
  small: '40px',
  large: '55px',
}
export const ContainerProgressBar = styled.div<StyleProps>`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr ${(props) => percent[props.size]};
  height: 100%;
  text-align: center;
  width: 100%;
`
const progressBarWidth = {
  small: '310px',
  large: '360px',
}
const progressBarHeigth = {
  small: '10px',
  large: '15px',
}
export const ProgressBar = styled.div<StyleProps>`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50px;
  height: ${(props) => progressBarHeigth[props.size]};
  position: relative;
  width: ${(props) => progressBarWidth[props.size]};
`
export const PercentBar = styled.div`
  background-image: ${(props) => props.theme.colors.gradient};
  border-radius: 50px;
  height: 100%;
  position: absolute;
  width: 50px;
`
const fontSizePercent = {
  small: '12px',
  large: '18px',
}
export const Percent = styled.p<StyleProps>`
  color: ${(props) => props.theme.colors.purple};
  font-size: ${(props) => fontSizePercent[props.size]};
  font-weight: bold;
  margin: 0px;
`
const rows = {
  small: 'repeat(2, 1fr)',
  large: '1fr 28px 1fr 28px',
}
const columns = {
  small: 'repeat(2, 1fr)',
  large: '1fr',
}
export const Information = styled.div<StyleProps>`
  color: ${(props) => props.theme.colors.gray};
  display: grid;
  grid-template-columns: ${(props) => columns[props.size]};
  grid-template-rows: ${(props) => rows[props.size]};
  height: 100%;
  width: 100%;
`
const heightImage = {
  small: '16px',
  large: '40px',
}
const widthImage = {
  small: '16px',
  large: '49px',
}
export const Image = styled.img<StyleProps>`
  height: ${(props) => heightImage[props.size]};
  width: ${(props) => widthImage[props.size]};
`
