import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { Header } from './Header'
import { PlanetStats } from './PlanetStats'
import { PlanetTabs } from './PlanetTabs'
// import IconBackgroundStars from '~icons/background-stars.svg'
import { PlanetData } from '~types/index'
import { queries } from '~lib/mediaQueries'

export type HomePageProps = ComponentPropsWithoutRef<'div'> & {
  planet: PlanetData
}

export const HomePage = ({ planet, ...props }: HomePageProps) => {
  return (
    <Wrapper id="root" {...props}>
      {/* <Background /> */}

      <Header id={planet.id} />

      <Main>
        <PlanetTabs
          id={planet.id}
          name={planet.name}
          overview={planet.overview}
          structure={planet.structure}
          geology={planet.geology}
          images={planet.images}
          sizes={planet.sizes}
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

// const Background = styled(IconBackgroundStars)`
//   position: absolute;
//   inset: 0;
//   width: 100%;
//   z-index: -1;
// `

const Main = styled.main`
  width: 100%;
  flex-grow: 1;
  padding: 0 40px 40px;
  max-width: 1190px;
  align-self: center;
  display: flex;
  flex-direction: column;

  @media ${queries.tablet} {
    gap: 25px;
  }

  @media ${queries.mobile} {
    padding: 0 0 40px;
  }
`
