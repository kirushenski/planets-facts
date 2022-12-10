import Link from 'next/link'
import { ComponentPropsWithoutRef, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { useRouter } from 'next/router'
import { Planet as PlanetType, PLANETS } from '~lib/constants'
import IconHamburger from '~icons/icon-hamburger.svg'
import IconChevron from '~icons/icon-chevron.svg'

export type MobileMenuProps = ComponentPropsWithoutRef<'button'>

export const MobileMenu = (props: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()
  const currentPlanet = router.query.name

  const handlePlanetClick = useCallback(
    (planet: PlanetType) => () => {
      if (planet !== currentPlanet) return
      setIsOpen(false)
    },
    [currentPlanet]
  )

  useEffect(() => {
    setIsOpen(false)
  }, [router.asPath])

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger aria-label="Open menu" {...props}>
        <IconHamburger />
      </DialogTrigger>
      <Dialog.Portal>
        <Dialog.Overlay>
          <DialogContent aria-describedby={undefined}>
            <Topbar>
              <VisuallyHidden>
                <Dialog.Title>Menu</Dialog.Title>
              </VisuallyHidden>
              <DialogClose aria-label="Close menu">
                <IconHamburger />
              </DialogClose>
            </Topbar>
            <Nav>
              <PlanetsList>
                {PLANETS.map((planet) => (
                  <li key={planet}>
                    <Planet href={planet} $planetId={planet} onClick={handlePlanetClick(planet)}>
                      <PlanetName planetId={planet}>{planet}</PlanetName>
                      <IconChevron />
                    </Planet>
                  </li>
                ))}
              </PlanetsList>
            </Nav>
          </DialogContent>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

const DialogTrigger = styled(Dialog.Trigger)`
  padding: 26px 24px 25px;

  &:focus {
    outline-offset: -2px;
  }
`

const DialogContent = styled(Dialog.Content)`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`

const Topbar = styled.div`
  display: flex;
  justify-content: flex-end;
`

const DialogClose = styled(Dialog.Close)`
  padding: 26px 24px 25px;
  color: var(--color-grey-light);

  &:focus {
    outline-offset: -2px;
  }
`

const Nav = styled.nav`
  flex-grow: 1;
  overflow-y: auto;
  padding: 24px;
  background-color: var(--color-black);
`

const PlanetsList = styled.ol`
  font: 700 15px/25px var(--font-family-spartan);
  letter-spacing: 1.36px;
  text-transform: uppercase;
`

const Planet = styled(Link)<{ $planetId: PlanetType }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  padding: 20px 8px 20px 0;
  border-bottom: 1px solid var(--color-grey-light);
  transition: border-color var(--duration);

  &:hover {
    border-color: ${({ $planetId }) => `var(--color-${$planetId})`};
  }

  &:focus {
    outline-offset: -1px;
  }
`

const PlanetName = styled.div<{ planetId: PlanetType }>`
  display: flex;
  align-items: center;
  gap: 25px;

  &::before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ planetId }) => `var(--color-${planetId})`};
  }
`
