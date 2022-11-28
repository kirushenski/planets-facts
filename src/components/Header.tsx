import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { Planet, PLANETS } from '~lib/constants'
import { queries } from '~lib/mediaQueries'

export type HeaderProps = ComponentPropsWithoutRef<'header'> & {
  id: Planet
}

export const Header = ({ id, ...props }: HeaderProps) => {
  return (
    <Wrapper {...props}>
      <Logo>The planets</Logo>
      <nav>
        <PlanetsList>
          {PLANETS.map((planet) => (
            <li key={planet}>
              <PlanetName href={planet} planetId={planet} isSelected={planet === id}>
                {planet}
              </PlanetName>
            </li>
          ))}
        </PlanetsList>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  padding: 0 24px 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid hsl(var(--hsl-white) / 0.2);

  @media (${queries.tablet}) {
    flex-direction: column;
    padding: 32px 24px 0 24px;
    gap: 6px;
  }
`

const Logo = styled.div`
  font: 400 28px/36px var(--font-family-antonio);
  letter-spacing: -1.05px;
  text-transform: uppercase;
`

const PlanetsList = styled.ol`
  display: flex;
  align-items: center;
  font: var(--font-h4);
  letter-spacing: 1px;
  text-transform: uppercase;
`

const PlanetName = styled(Link)<{ planetId: Planet; isSelected: boolean }>`
  display: block;
  padding: 33px 16px 28px;
  border-bottom: 4px solid ${({ isSelected, planetId }) => (isSelected ? `var(--color-${planetId})` : 'transparent')};
  transform: translateY(1px);
  transition: border-color var(--duration);

  &:hover {
    border-color: ${({ planetId }) => `var(--color-${planetId})`};
  }

  &:focus {
    outline-offset: -2px;
  }
`
