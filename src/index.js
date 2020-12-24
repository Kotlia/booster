import ora from 'ora'
import Shell from "../util/shell.js";
import cp from "child_process";
import readline from 'readline-promise'

const paper = ora("Downloading paper.jar\n")
paper.start()
Shell.exec("sudo bash ./src/paper_downloader.sh")
paper.stop()
console.log("Done!\n")
console.log("Starting server...")
import "./lanucher.js"