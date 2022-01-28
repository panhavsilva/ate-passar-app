import styled from 'styled-components/macro'
import { Check, Calendar, CheckSmall, CalendarSmall } from 'ui/icons'

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
  small: '50px',
  large: '70px',
}
export const Container = styled.div<StyleProps>`
  align-items: center;
  background-color: ${(props) => props.theme.colors.lightPurple};
  border-radius: 4px;
  display: grid;
  grid-template-rows: 24px ${(props) => lineProgress[props.size]} 1fr;
  height: ${(props) => height[props.size]};
  padding: 30px 20px;
  width: ${(props) => width[props.size]};
`
const title = {
  small: '16px',
  large: '18px',
}
export const Title = styled.p<StyleProps>`
  color: ${(props) => props.theme.colors.purple};
  font-size: ${(props) => title[props.size]};
  font-weight: bold;
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

type PercentBarProps = {
  width: string
}
export const PercentBar = styled.div<PercentBarProps>`
  background-image: ${(props) => props.theme.colors.gradient};
  border-radius: 50px;
  height: 100%;
  position: absolute;
  width: ${(props) => props.width};
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
  small: '1fr',
  large: 'repeat(2, 1fr)',
}
const columns = {
  small: 'repeat(2, 1fr)',
  large: '1fr',
}
export const ContainerInformation = styled.div<StyleProps>`
  color: ${(props) => props.theme.colors.gray};
  display: grid;
  grid-template-columns: ${(props) => columns[props.size]};
  grid-template-rows: ${(props) => rows[props.size]};
  grid-gap: 20px;
  height: 100%;
  justify-items: center;
  width: 100%;
`
const InfotmationCardColumns = {
  small: '19px',
  large: '65px',
}
const InformationCardAlignItems = {
  small: '',
  large: 'center',
}
export const InformationCard = styled.div<StyleProps>`
  display: grid;
  grid-template-columns: ${(props) => InfotmationCardColumns[props.size]} 1fr;
  align-items: ${(props) => InformationCardAlignItems[props.size]};
`
type InformationTextProps = {
  type: 'subtitle' | 'text',
  size: 'large' | 'small',
}
const textAlign = {
  subtitle: 'initial',
  text: 'center',
}
const informationTextSize = {
  small: '12px',
  large: '16px',
}
export const InformationText = styled.p<InformationTextProps>`
  color: ${(props) => props.theme.colors.gray};
  font-size: ${(props) => informationTextSize[props.size]};
  margin: 0;
  padding: 0;
  text-align: ${(props) => textAlign[props.type]};
`
export const CheckIconLarge = styled(Check)`
  height: 40px;
  width: 49px;
`
export const CheckIconSmall = styled(CheckSmall)`
  height: 16px;
  width: 16px;
`
export const CalendarIconLarge = styled(Calendar)`
  height: 40px;
  width: 49px;
`
export const CalendarIconSmall = styled(CalendarSmall)`
  height: 16px;
  width: 16px;
`
