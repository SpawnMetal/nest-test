import {Config} from 'jest'
import {compilerOptions} from './tsconfig.json'
import {pathsToModuleNameMapper} from 'ts-jest'

const config: Config = {
  displayName: 'all-apps',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'json', 'ts'],

  coverageDirectory: './coverage',
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
}

export default config
