/** @type {import('ts-jest').JestConfigWithTsJest} */
import type { Config } from 'jest';

const config: Config = {
  rootDir: './',
  reporters: ['default'],
  roots: ['<rootDir>'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!<rootDir>/**/index.ts',
    '!<rootDir>/**/*.d.ts',
    '!<rootDir>/jest.config.ts',
    '!<rootDir>/vite.config.ts',
    '!<rootDir>/src/main.tsx'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|gif|ttf|eot)$': '<rootDir>/src/mocks/fileMock.ts'
  },
  setupFilesAfterEnv: [
    '<rootDir>/setupJest.ts'
  ],
};

export default config;