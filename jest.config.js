/** @type {import('ts-jest').JestConfigWithTsJest} * */
export default {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
};
