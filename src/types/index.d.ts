import { Planet } from '~lib/constants'

interface TabContent {
  content: string
  source: string
}

interface PlanetData {
  id: Planet
  name: string
  overview: TabContent
  structure: TabContent
  geology: TabContent
  rotation: string
  revolution: string
  radius: string
  temperature: string
}
