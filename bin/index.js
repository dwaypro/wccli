#!/usr/bin/env node

const yargs = require("yargs");
const generate = require("../lib/generate");
const newProject = require("../lib/new");
// Customize yargs version
yargs.version('1.1.0')

// generate command for creating new component.
yargs.command({
    command: 'generate [value]',
    describe: 'Generate a new web component file',
    aliases: ['g', 'gen'],
    builder: (yargs) => yargs.default('value', 'new_component'),
    handler: function (argv) {
        generate.generate(argv.value);
    }
})

/**
 * Command that generates a new webcomponent project that bundles a new webpack project and starts the server
 */
yargs.command({
    command: 'new [value]',
    describe: 'Generate a new web component project', 
    aliases: ['n'],
    builder: (yargs) => yargs.default('value', 'new_project'),
    handler: function(argv){
        newProject.newProject(argv.value);
    }
})

