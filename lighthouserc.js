module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm run start:lighthouse',
            url: [
                'http://localhost:4200'
            ]
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};