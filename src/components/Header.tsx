import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

export type HeaderProps = ComponentPropsWithoutRef<'header'>

const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptun']

// TODO Improvise hover / active states for links (single underline animation?)

export const Header = (props: HeaderProps) => {
  return (
    <Wrapper {...props}>
      <Logo>The planets</Logo>
      <nav>
        <PlanetsList>
          {planets.map((planet) => (
            <li key={planet}>
              <PlanetName href={planet}>{planet}</PlanetName>
            </li>
          ))}
        </PlanetsList>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  isolation: isolate;
  padding: 0 24px 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid hsl(var(--hsl-white) / 0.2);
`

const Logo = styled.div`
  font: 400 28px/36px var(--font-family-antonio);
  letter-spacing: -0.0105em;
  text-transform: uppercase;
`

const PlanetsList = styled.ol`
  display: flex;
  align-items: center;
  font: var(--font-h4);
  letter-spacing: 0.01em;
  text-transform: uppercase;
`

const PlanetName = styled(Link)`
  display: block;
  padding: 33px 16px 27px;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline-offset: -2px;
  }
`
