module.exports = {
    apps: [{
    name: 'app',
    script: './bundle.js',
    instances: 0,
    exec_mode: 'cluster'
    }]
}