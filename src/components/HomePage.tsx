import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

export type HomePageProps = ComponentPropsWithoutRef<'div'>

export const HomePage = (props: HomePageProps) => {
  return (
    <Wrapper {...props}>
      <main>
        <h1>Next Starter</h1>
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
`
