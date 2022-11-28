import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import * as Tabs from '@radix-ui/react-tabs'
import Image from 'next/image'
import IconSource from '~icons/icon-source.svg'
import { planetImagesMap } from '~lib/planetImagesMap'
import { PlanetData } from '~types/index'
import { Planet } from '~lib/constants'
import { queries } from '~lib/mediaQueries'

export type PlanetTabsProps = ComponentPropsWithoutRef<'section'> &
  Pick<PlanetData, 'id' | 'name' | 'overview' | 'structure' | 'geology'>

export const PlanetTabs = ({ id, name, overview, structure, geology, ...props }: PlanetTabsProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { IconOverview, IconStructure, picGeology } = planetImagesMap[id]

  return (
    <section {...props}>
      <TabsRoot defaultValue="overview" orientation="vertical">
        <TabsList aria-label="Select info section">
          <TabsTrigger value="overview" planetId={id}>
            <TabNumber>01</TabNumber> Overview
          </TabsTrigger>
          <TabsTrigger value="structure" planetId={id}>
            <TabNumber>02</TabNumber> Internal Structure
          </TabsTrigger>
          <TabsTrigger value="geology" planetId={id}>
            <TabNumber>03</TabNumber> Surface Geology
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <PlanetView>
            <IconOverview />
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
            <IconStructure />
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
            <Image src={picGeology.src} width={326} height={398} alt="" />
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
  align-items: center;
  grid-template-areas:
    'picture info'
    'picture controls';
  grid-template-columns: 1fr 350px;
  gap: 39px;

  @media (${queries.tablet}) {
    grid-template-areas:
      'picture picture'
      'info controls';
    grid-template-columns: 1fr 281px;
    gap: 69px;
  }
`

const TabsList = styled(Tabs.List)`
  grid-area: controls;
  order: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const TabsTrigger = styled(Tabs.Trigger)<{ planetId: Planet }>`
  position: relative;
  padding: 12px 28px 11px 74px;
  border: 1px solid hsl(var(--hsl-white) / 0.2);
  font: var(--font-h3);
  letter-spacing: 2.6px;
  text-transform: uppercase;
  transition: background-color var(--duration), border-color var(--duration);

  @media (${queries.tablet}) {
    padding: 8px 28px 7px 50px;
    font: 700 9px/25px var(--font-family-spartan);
    letter-spacing: 1.93px;
  }

  &:hover {
    background-color: hsl(0 0% 85% / 0.2);
    border-color: transparent;
  }

  &[data-state='active'] {
    background-color: ${({ planetId }) => `var(--color-${planetId})`};
    border-color: transparent;
  }
`

const TabNumber = styled.div`
  position: absolute;
  left: 28px;
  top: 12px;
  color: hsl(var(--hsl-white) / 0.5);

  @media (${queries.tablet}) {
    left: 20px;
    top: 8px;
  }
`

const TabsContent = styled(Tabs.Content)`
  display: contents;
`

const PlanetView = styled.div`
  grid-area: picture;

  @media (${queries.tablet}) {
    justify-self: center;
  }
`

const Info = styled.div`
  grid-area: info;
`

const PlanetName = styled.h1`
  font: var(--font-h1);
  text-transform: uppercase;
  margin-bottom: 23px;

  @media (${queries.tablet}) {
    font: 500 48px/62px var(--font-family-antonio);
    margin-bottom: 24px;
  }
`

const Text = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (${queries.tablet}) {
    gap: 32px;
  }
`

const Source = styled.figcaption`
  color: hsl(var(--hsl-white) / 0.5);

  @media (${queries.tablet}) {
    font: 400 12px/25px var(--font-family-spartan);
  }
`

const WikiLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  text-decoration: underline;
  transition: color var(--duration);

  @media (${queries.tablet}) {
    gap: 4px;
  }

  &:hover {
    color: var(--color-white);
  }
`
