export const PLANETS = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'] as const
export type Planet = typeof PLANETS[number]
