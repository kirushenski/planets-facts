import fs from 'fs/promises'
import path from 'path'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { HomePage as HomePageComponent } from '~components/HomePage'
import { Planet, PLANETS } from '~lib/constants'
import { PlanetData } from '~types/index'

// TODO User rem / multiplier for fonts. And think how to add letter-spacing (ems?!) / text-transform to text definitions
// TODO How to properly manage query types?
// TODO How to store types? d.ts without imports? constants?
// TODO How to manage svgr any?
// TODO Enable background illustration
// TODO Extract tabs content and tabs list into components
// TODO WTF with gray colors? Why opacity is used everywhere?
// TODO WTF with tabs trigger hover color?
// TODO WTF with Regular Antonio for logo?
// TODO AAAAAAAA fonts

// Bonus improvements:
// TODO Use Next 13 beta features
// TODO Set up animation with Framer Motion
// TODO Set up multipage navigation shortcuts (arrows / swipe)
// TODO Set up custom 404 page (black hole)

const HomePage: NextPage<{ planet: PlanetData }> = ({ planet }) => {
  return <HomePageComponent planet={planet} />
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = PLANETS.map((name) => ({ params: { name } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const planetName = context.params?.name as Planet

  const filePath = path.join(process.cwd(), 'data.json')
  const jsonData = await fs.readFile(filePath, 'utf8')
  const planets = JSON.parse(jsonData) as unknown as Record<Planet, PlanetData>

  return { props: { planet: planets[planetName] } }
}

export default HomePage
