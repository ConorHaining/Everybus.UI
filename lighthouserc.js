module.exports = {
    ci: {
        collect: {
            staticDistDir: './dist/every-bus',
            isSinglePageApplication: true,
            maxWaitForLoad: 5000,
            numberOfRuns: "5",
            url: [
                'http://localhost',
                'http://localhost/stop/6200207580',
                'http://localhost/vehicle/921',
            ]
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};