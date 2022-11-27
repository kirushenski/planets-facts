import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { HomePage as HomePageComponent } from '~components/HomePage'

// TODO User rem / multiplier for fonts. And think how to add letter-spacing / text-transform to text definitions
// TODO Regular Antonio for logo?
// TODO WTF with gray colors? Why opacity is used everywhere?

const HomePage: NextPage = () => {
  const { query } = useRouter()
  console.log(query.name)

  return <HomePageComponent />
}

export default HomePage
