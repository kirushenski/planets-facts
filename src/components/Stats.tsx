import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

export type StatsProps = ComponentPropsWithoutRef<'section'> & {
  rotation: number
  revolution: number
  radius: number
  temperature: number
}

// rotation: '58.6 Days',
// revolution: '87.97 Days',
// radius: '2,439.7 KM',
// temperature: '430°c',

// TODO Format numbers

export const Stats = ({ rotation, revolution, radius, temperature, ...props }: StatsProps) => {
  return (
    <Wrapper {...props}>
      <List>
        <Block>
          <Name>Rotation Time</Name>
          <Value>{rotation} Days</Value>
        </Block>

        <Block>
          <Name>Revolution Time</Name>
          <Value>{revolution} Days</Value>
        </Block>

        <Block>
          <Name>Radius</Name>
          <Value>{radius} KM</Value>
        </Block>

        <Block>
          <Name>Temperature</Name>
          <Value>{temperature}°C</Value>
        </Block>
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.section``

const List = styled.dl`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`

const Block = styled.div`
  padding: 20px 23px 27px;
  border: 1px solid hsl(var(--hsl-white) / 0.2);
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Name = styled.dt`
  font: var(--font-h4);
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: hsl(var(--hsl-white) / 0.5);
`

const Value = styled.dd`
  font: var(--font-h2);
  letter-spacing: -0.015em;
  text-transform: uppercase;
`
