import { GradientNoise, ValueNoise } from './noise'

export type NoiseMaps = GradientNoise | ValueNoise

export type NoiseMapClassParam = new (seed: number) => NoiseMaps
