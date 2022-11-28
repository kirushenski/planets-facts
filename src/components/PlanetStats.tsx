import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { queries } from '~lib/mediaQueries'
import { PlanetData } from '~types/index'

export type PlanetStatsProps = ComponentPropsWithoutRef<'section'> &
  Pick<PlanetData, 'rotation' | 'revolution' | 'radius' | 'temperature'>

export const PlanetStats = ({ rotation, revolution, radius, temperature, ...props }: PlanetStatsProps) => {
  return (
    <section {...props}>
      <List>
        <Block>
          <Name>Rotation Time</Name>
          <Value>{rotation}</Value>
        </Block>

        <Block>
          <Name>Revolution Time</Name>
          <Value>{revolution}</Value>
        </Block>

        <Block>
          <Name>Radius</Name>
          <Value>{radius}</Value>
        </Block>

        <Block>
          <Name>Temperature</Name>
          <Value>{temperature}</Value>
        </Block>
      </List>
    </section>
  )
}

const List = styled.dl`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (${queries.tablet}) {
    gap: 11px;
  }
`

const Block = styled.div`
  padding: 20px 23px 27px;
  border: 1px solid hsl(var(--hsl-white) / 0.2);
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (${queries.tablet}) {
    padding: 16px 15px 19px;
    gap: 6px;
  }
`

const Name = styled.dt`
  font: var(--font-h4);
  letter-spacing: 1px;
  text-transform: uppercase;
  color: hsl(var(--hsl-white) / 0.5);

  @media (${queries.tablet}) {
    font: 700 8px/16px var(--font-family-spartan);
    letter-spacing: 0.73px;
  }
`

const Value = styled.dd`
  font: var(--font-h2);
  letter-spacing: -1.5px;
  text-transform: uppercase;

  @media (${queries.tablet}) {
    font: 500 24px/31px var(--font-family-antonio);
    letter-spacing: -0.9px;
  }
`
