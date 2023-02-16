import type { Config } from '@jest/types'

export default <Config.InitialOptions>{
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
}
