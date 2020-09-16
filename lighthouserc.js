module.exports = {
    ci: {
        collect: {
            staticDistDir: './dist/every-bus',
            isSinglePageApplication: true,
            maxWaitForLoad: 5000,
            url: [
                'http://localhost',
                'http://localhost/stop/36232897',
                'http://localhost/vehicle/921',
            ]
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};