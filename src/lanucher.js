import cp from "child_process";
import readline from 'readline-promise'

const server = cp.spawn('java', [
    '-Xmx512M',
    '-Xms256M',
    '-jar',
    './paper.jar',
    'nogui'
], {
    cwd: "./serverfiles"
});

const log = data => process.stdout.write(data.toString())

server.stdout.on('data', log);
server.stderr.on('data', log);

const rlp = readline.default.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

commandExecuter()

function commandExecuter() {
    rlp.questionAsync("").then(c => {
        server.stdin.write(c.toString() + '\n')
        commandExecuter()
    });
}