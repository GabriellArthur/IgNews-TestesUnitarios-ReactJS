module.exports = {
   testPathIgnorePattern: ["/node_modules","/.next/","/.github/"],
   setupFilesAfterEnv: [
      "<rootDir>/src/tests/setupTests.ts"
   ],
   transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
   },
   testEnvironment: 'jsdom'
}