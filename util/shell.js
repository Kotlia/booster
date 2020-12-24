import cp from 'child_process'

export default class Shell {
    static e = cp.execSync

    static exec(cmd) {
        return Shell.e(cmd).toString()
    }
}