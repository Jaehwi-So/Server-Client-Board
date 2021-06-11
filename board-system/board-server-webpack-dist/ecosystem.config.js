module.exports = {
    apps: [{
    name: 'app',
    script: './dist/index.js',
    instances: "max",   //프로세스 인스턴스의 수. 0이면 cpu 코어 수 만큼 프로세스 생성. max또한 최대 개수
    //instances: 0
    exec_mode: 'cluster',
    }]
}