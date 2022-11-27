import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import * as Tabs from '@radix-ui/react-tabs'
import Image from 'next/image'
import IconPlanetMercury from '~icons/content/planet-mercury.svg'
import IconPlanetMercuryInternal from '~icons/content/planet-mercury-internal.svg'
import picGeologyMercury from '~images/geology-mercury.png'
import IconSource from '~icons/icon-source.svg'

interface TabContent {
  content: string
  source: string
}

export type PlanetTabsProps = ComponentPropsWithoutRef<'section'> & {
  name: string
  overview: TabContent
  structure: TabContent
  geology: TabContent
}

// TODO Pass primary colors (or planet id)
// TODO Extract tabs content and maybe tabs list into components
// TODO Fix hover color

export const PlanetTabs = ({ name, overview, structure, geology, ...props }: PlanetTabsProps) => {
  return (
    <section {...props}>
      <TabsRoot defaultValue="overview" orientation="vertical">
        <TabsList aria-label="Select info section">
          <TabsTrigger value="overview">
            <TabNumber>01</TabNumber> Overview
          </TabsTrigger>
          <TabsTrigger value="structure">
            <TabNumber>02</TabNumber> Internal Structure
          </TabsTrigger>
          <TabsTrigger value="geology">
            <TabNumber>03</TabNumber> Surface Geology
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <PlanetView>
            <IconPlanetMercury />
          </PlanetView>

          <Info>
            <PlanetName>{name}</PlanetName>

            <Text>
              <blockquote cite={overview.source}>
                <p>{overview.content}</p>
              </blockquote>
              <Source>
                Source:{' '}
                <cite>
                  <WikiLink href={overview.source} target="_blank" rel="nofollow noopener noreferrer">
                    Wikipedia <IconSource />
                  </WikiLink>
                </cite>
              </Source>
            </Text>
          </Info>
        </TabsContent>
        <TabsContent value="structure">
          <PlanetView>
            <IconPlanetMercuryInternal />
          </PlanetView>

          <Info>
            <PlanetName>{name}</PlanetName>

            <Text>
              <blockquote cite={structure.source}>
                <p>{structure.content}</p>
              </blockquote>
              <Source>
                Source:{' '}
                <cite>
                  <WikiLink href={structure.source} target="_blank" rel="nofollow noopener noreferrer">
                    Wikipedia <IconSource />
                  </WikiLink>
                </cite>
              </Source>
            </Text>
          </Info>
        </TabsContent>
        <TabsContent value="geology">
          <PlanetView>
            <Image src={picGeologyMercury.src} width={326} height={398} alt="" />
          </PlanetView>

          <Info>
            <PlanetName>{name}</PlanetName>

            <Text>
              <blockquote cite={geology.source}>
                <p>{geology.content}</p>
              </blockquote>
              <Source>
                Source:{' '}
                <cite>
                  <WikiLink href={geology.source} target="_blank" rel="nofollow noopener noreferrer">
                    Wikipedia <IconSource />
                  </WikiLink>
                </cite>
              </Source>
            </Text>
          </Info>
        </TabsContent>
      </TabsRoot>
    </section>
  )
}

const TabsRoot = styled(Tabs.Root)`
  display: grid;
  grid-template-areas:
    'picture info'
    'picture controls';
  grid-template-columns: 1fr 350px;
  gap: 39px;
`

const TabsList = styled(Tabs.List)`
  grid-area: controls;
  order: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const TabsTrigger = styled(Tabs.Trigger)`
  position: relative;
  padding: 12px 28px 11px 74px;
  border: 1px solid hsl(var(--hsl-white) / 0.2);
  font: var(--font-h3);
  letter-spacing: 0.026em;
  text-transform: uppercase;
  transition: background-color var(--duration), border-color var(--duration);

  &[data-state='active'] {
    background-color: var(--color-mercury);
    border-color: transparent;
  }

  &:hover {
    background-color: hsl(0 0% 85% / 0.2);
    border-color: transparent;
  }
`

const TabNumber = styled.div`
  position: absolute;
  left: 28px;
  top: 12px;
  color: hsl(var(--hsl-white) / 0.5);
`

const TabsContent = styled(Tabs.Content)`
  display: contents;
`

const PlanetView = styled.div`
  grid-area: picture;
`

const Info = styled.div`
  grid-area: info;
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
`

const Source = styled.figcaption`
  color: hsl(var(--hsl-white) / 0.5);
`

const WikiLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  text-decoration: underline;
`
