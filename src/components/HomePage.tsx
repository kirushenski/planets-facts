import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { Header } from './Header'
import { PlanetStats } from './PlanetStats'
import { PlanetTabs } from './PlanetTabs'
import IconBackgroundStars from '~icons/content/background-stars.svg'
import { PlanetData } from '~types/index'

export type HomePageProps = ComponentPropsWithoutRef<'div'> & {
  planet: PlanetData
}

export const HomePage = ({ planet, ...props }: HomePageProps) => {
  return (
    <Wrapper {...props}>
      <Background />

      <Header />

      <Main>
        <PlanetTabs
          id={planet.id}
          name={planet.name}
          overview={planet.overview}
          structure={planet.structure}
          geology={planet.geology}
        />

        <PlanetStats
          rotation={planet.rotation}
          revolution={planet.revolution}
          radius={planet.radius}
          temperature={planet.temperature}
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
  z-index: -1;
`

const Main = styled.main`
  width: 100%;
  flex-grow: 1;
  padding: 90px 20px 20px;
  max-width: 1150px;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 87px;
`
