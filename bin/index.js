#!/usr/bin/env node

const yargs = require("yargs");
const cli = require("../lib/generate");

// Customize yargs version
yargs.version('1.1.0')

// generate command for creating new component.
yargs.command({
    command: 'generate [value]',
    describe: 'Generate a new web component file',
    aliases: ['g', 'gen'],
    builder: (yargs) => yargs.default('value', 'new_component'),
    handler: function (argv) {
        cli.generate(argv.value);
    }
})


console.log(yargs.argv)