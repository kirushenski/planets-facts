import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { Stats } from './Stats'
import IconPlanetMercury from '~icons/content/planet-mercury.svg'
// import IconPlanetMercuryInternal from '~icons/content/planet-mercury-internal.svg'
// import picGeologyMercury from '~images/geology-mercury.png'
import IconSource from '~icons/icon-source.svg'

export type HomePageProps = ComponentPropsWithoutRef<'div'>

const data = {
  name: 'Mercury',
  overview: {
    content:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    source: 'https://en.wikipedia.org/wiki/Mercury_(planet)',
  },
  structure: {
    content:
      "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    source: 'https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure',
  },
  geology: {
    content:
      "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    source: 'https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology',
  },
  rotation: 58.6,
  revolution: 87.97,
  radius: 2439.7,
  temperature: 430,
}

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptun']

// TODO Align main content vertically in center

export const HomePage = (props: HomePageProps) => {
  return (
    <Wrapper {...props}>
      <Header>
        <Logo>The planets</Logo>
        <nav>
          <PlanetsList>
            {planets.map((planet) => (
              <li key={planet}>{planet}</li>
            ))}
          </PlanetsList>
        </nav>
      </Header>

      <Main>
        <MainSection>
          <PlanetView>
            <IconPlanetMercury />
          </PlanetView>

          <Info>
            <PlanetName>{data.name}</PlanetName>

            <Text>
              <blockquote cite={data.overview.source}>
                <p>{data.overview.content}</p>
              </blockquote>
              <Source>
                Source:{' '}
                <cite>
                  <WikiLink href={data.overview.source} target="_blank" rel="nofollow noopener noreferrer">
                    Wikipedia <IconSource />
                  </WikiLink>
                </cite>
              </Source>
            </Text>

            <Tabs>
              <Tab>
                <TabNumber>01</TabNumber> Overview
              </Tab>
              <Tab>
                <TabNumber>02</TabNumber> Internal Structure
              </Tab>
              <Tab>
                <TabNumber>03</TabNumber> Surface Geology
              </Tab>
            </Tabs>
          </Info>
        </MainSection>

        <Stats
          rotation={data.rotation}
          revolution={data.revolution}
          radius={data.radius}
          temperature={data.temperature}
        />
      </Main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Logo = styled.div`
  font: 400 28px/36px var(--font-family-antonio);
  letter-spacing: -0.0105em;
  text-transform: uppercase;
`

const PlanetsList = styled.ol`
  display: flex;
  align-items: center;
  gap: 33px;
  font: var(--font-h4);
  letter-spacing: 0.01em;
  text-transform: uppercase;
`

const Header = styled.header`
  padding: 22px 40px 27px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`

const Main = styled.main`
  flex-grow: 1;
  padding: 90px 20px 20px;
  max-width: 1150px;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 87px;
`

const PlanetName = styled.h1`
  font: var(--font-h1);
  text-transform: uppercase;
  margin-bottom: 23px;
`

const Text = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 39px;
`

const Source = styled.figcaption`
  color: hsl(var(--hsl-white) / 0.5);
`

const WikiLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
`

const MainSection = styled.section`
  display: flex;
  gap: 20px;
`

const PlanetView = styled.div`
  flex-grow: 1;
`

const Info = styled.div`
  width: 350px;
`

const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Tab = styled.div`
  position: relative;
  padding: 12px 28px 11px 74px;
  border: 1px solid hsl(var(--hsl-white) / 0.2);
  font: var(--font-h3);
  letter-spacing: 0.026em;
  text-transform: uppercase;
`

const TabNumber = styled.div`
  position: absolute;
  left: 28px;
  top: 12px;
  color: hsl(var(--hsl-white) / 0.5);
`
