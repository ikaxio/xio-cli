#!/usr/bin/env node
const program = require("commander")

program.command("scan", "扫描国际化词条文件")

program.on("--help", () => console.log("没有任何帮助"))

program.parse(process.argv)
const [cmd] = program.args
console.log(cmd)
if (!program._execs[cmd]) {

}
