module.exports = {
    reporters: [
        "default",
        ["jest-junit", { outputDirectory: "./results/jest" }],
        ["jest-html-reporter", { outputPath: "./results/jest/test-report.html" }]
    ],
    "roots": [
        "<rootDir>/src"
    ],
    testEnvironment: 'node',
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    preset: 'ts-jest',
};