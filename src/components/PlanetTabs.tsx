import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import * as Tabs from '@radix-ui/react-tabs'
import Image from 'next/image'
import IconSource from '~icons/icon-source.svg'
import { PlanetData } from '~types/index'
import { Planet } from '~lib/constants'
import { queries } from '~lib/mediaQueries'

export type PlanetTabsProps = ComponentPropsWithoutRef<'section'> &
  Pick<PlanetData, 'id' | 'name' | 'overview' | 'structure' | 'geology' | 'images'>

export const PlanetTabs = ({ id, name, overview, structure, geology, images, ...props }: PlanetTabsProps) => {
  return (
    <section {...props}>
      <TabsRoot defaultValue="overview" orientation="vertical">
        <TabsList aria-label="Select info section">
          <TabsTrigger value="overview" $planetId={id}>
            <MobileTabName $planetId={id}>Overview</MobileTabName>
            <DesktopTabName>
              <TabNumber>01</TabNumber> Overview
            </DesktopTabName>
          </TabsTrigger>
          <TabsTrigger value="structure" $planetId={id}>
            <MobileTabName $planetId={id}>Structure</MobileTabName>
            <DesktopTabName>
              <TabNumber>02</TabNumber> Internal Structure
            </DesktopTabName>
          </TabsTrigger>
          <TabsTrigger value="geology" $planetId={id}>
            <MobileTabName $planetId={id}>Geology</MobileTabName>
            <DesktopTabName>
              {' '}
              <TabNumber>03</TabNumber> Surface Geology
            </DesktopTabName>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <PlanetView>
            <Image src={images.overview} width={450} height={450} alt="" />
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
            <Image src={images.structure} width={450} height={450} alt="" />
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
            <Image src={images.geology} width={326} height={398} alt="" />
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

  @media (${queries.mobile}) {
    grid-template-areas:
      'controls'
      'picture'
      'info';
    grid-template-columns: 1fr;
    gap: 69px;
  }
`

const TabsList = styled(Tabs.List)`
  grid-area: controls;
  order: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (${queries.mobile}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    border-bottom: 1px solid hsl(var(--hsl-white) / 0.2);
  }
`

const TabsTrigger = styled(Tabs.Trigger)<{ $planetId: Planet }>`
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

  @media (${queries.mobile}) {
    padding: 0 20px;
    border: none;
    transform: translateY(1px);
  }

  &:hover {
    @media (${queries.mobileMin}) {
      background-color: hsl(0 0% 85% / 0.2);
      border-color: transparent;
    }
  }

  &:focus {
    outline-offset: -2px;
  }

  &[data-state='active'] {
    @media (${queries.mobileMin}) {
      background-color: ${({ $planetId }) => `var(--color-${$planetId})`};
      border-color: transparent;
    }
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

const MobileTabName = styled.div<{ $planetId: Planet }>`
  display: inline-block;
  border-bottom: 4px solid transparent;
  padding-block: 20px;
  transition: border-color var(--duration);

  @media (${queries.mobileMin}) {
    display: none;
  }

  ${TabsTrigger}:hover & {
    @media (${queries.mobile}) {
      border-color: ${({ $planetId }) => `var(--color-${$planetId})`};
    }
  }

  ${TabsTrigger}[data-state='active'] & {
    @media (${queries.mobile}) {
      border-color: ${({ $planetId }) => `var(--color-${$planetId})`};
    }
  }
`

const DesktopTabName = styled.div`
  @media (${queries.mobile}) {
    display: none;
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

  @media (${queries.mobile}) {
    padding-inline: 24px;
  }
`

const Info = styled.div`
  grid-area: info;

  @media (${queries.mobile}) {
    padding-inline: 24px;
    text-align: center;
  }
`

const PlanetName = styled.h1`
  font: var(--font-h1);
  text-transform: uppercase;
  margin-bottom: 23px;

  @media (${queries.tablet}) {
    font: 500 48px/62px var(--font-family-antonio);
    margin-bottom: 24px;
  }

  @media (${queries.mobile}) {
    font: 500 40px/52px var(--font-family-antonio);
    margin-bottom: 16px;
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
