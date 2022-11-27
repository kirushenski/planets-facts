/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { StaticImageData } from 'next/image'
import { Planet } from './constants'
import IconPlanetMercury from '~icons/content/planet-mercury.svg'
import IconPlanetMercuryInternal from '~icons/content/planet-mercury-internal.svg'
import picGeologyMercury from '~images/geology-mercury.png'
import IconPlanetVenus from '~icons/content/planet-venus.svg'
import IconPlanetVenusInternal from '~icons/content/planet-venus-internal.svg'
import picGeologyVenus from '~images/geology-venus.png'
import IconPlanetEarth from '~icons/content/planet-earth.svg'
import IconPlanetEarthInternal from '~icons/content/planet-earth-internal.svg'
import picGeologyEarth from '~images/geology-earth.png'
import IconPlanetMars from '~icons/content/planet-mars.svg'
import IconPlanetMarsInternal from '~icons/content/planet-mars-internal.svg'
import picGeologyMars from '~images/geology-mars.png'
import IconPlanetJupiter from '~icons/content/planet-jupiter.svg'
import IconPlanetJupiterInternal from '~icons/content/planet-jupiter-internal.svg'
import picGeologyJupiter from '~images/geology-jupiter.png'
import IconPlanetSaturn from '~icons/content/planet-saturn.svg'
import IconPlanetSaturnInternal from '~icons/content/planet-saturn-internal.svg'
import picGeologySaturn from '~images/geology-saturn.png'
import IconPlanetUranus from '~icons/content/planet-uranus.svg'
import IconPlanetUranusInternal from '~icons/content/planet-uranus-internal.svg'
import picGeologyUranus from '~images/geology-uranus.png'
import IconPlanetNeptune from '~icons/content/planet-neptune.svg'
import IconPlanetNeptuneInternal from '~icons/content/planet-neptune-internal.svg'
import picGeologyNeptune from '~images/geology-neptune.png'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const planetImagesMap: Record<Planet, { IconOverview: any; IconStructure: any; picGeology: StaticImageData }> = {
  mercury: {
    IconOverview: IconPlanetMercury,
    IconStructure: IconPlanetMercuryInternal,
    picGeology: picGeologyMercury,
  },
  venus: {
    IconOverview: IconPlanetVenus,
    IconStructure: IconPlanetVenusInternal,
    picGeology: picGeologyVenus,
  },
  earth: {
    IconOverview: IconPlanetEarth,
    IconStructure: IconPlanetEarthInternal,
    picGeology: picGeologyEarth,
  },
  mars: {
    IconOverview: IconPlanetMars,
    IconStructure: IconPlanetMarsInternal,
    picGeology: picGeologyMars,
  },
  jupiter: {
    IconOverview: IconPlanetJupiter,
    IconStructure: IconPlanetJupiterInternal,
    picGeology: picGeologyJupiter,
  },
  saturn: {
    IconOverview: IconPlanetSaturn,
    IconStructure: IconPlanetSaturnInternal,
    picGeology: picGeologySaturn,
  },
  uranus: {
    IconOverview: IconPlanetUranus,
    IconStructure: IconPlanetUranusInternal,
    picGeology: picGeologyUranus,
  },
  neptune: {
    IconOverview: IconPlanetNeptune,
    IconStructure: IconPlanetNeptuneInternal,
    picGeology: picGeologyNeptune,
  },
}
