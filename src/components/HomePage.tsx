import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { Header } from './Header'
import { PlanetStats } from './PlanetStats'
import { PlanetTabs } from './PlanetTabs'
import IconBackgroundStars from '~icons/content/background-stars.svg'

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

// TODO Align main content vertically in center
// TODO Fix global height issue: from html to wrapper (relates to bg size)

export const HomePage = (props: HomePageProps) => {
  return (
    <Wrapper {...props}>
      <Background />

      <Header />

      <Main>
        <PlanetTabs name={data.name} overview={data.overview} structure={data.structure} geology={data.geology} />

        <PlanetStats
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
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Background = styled(IconBackgroundStars)`
  position: absolute;
  inset: 0;
  width: 100%;
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
