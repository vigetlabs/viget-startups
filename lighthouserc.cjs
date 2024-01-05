module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      settings: {
        // preset: "desktop", // comment out this line for mobile
        onlyCategories: ['performance', 'accessibility'],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: '.lhci',
    },
  },
}
