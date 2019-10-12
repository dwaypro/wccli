#!/usr/bin/env node

const yargs = require("yargs");
const generate = require("../lib/generate");
const newProject = require("../lib/new");
// Customize yargs version
// yargs.version('1.1.0')

// generate command for creating new component.
yargs.command({
    command: 'generate [value]',
    describe: 'Generate a new web component file',
    aliases: ['g', 'gen'],
    // (yargs) => yargs.default('value', 'new_component')
    builder: {
        vc: {
            describe: 'Generates HTML5 Web Component with Vue enabled within the Shadow Dom',
            type: 'boolean'
        },
        v: {
            describe: 'Generates stand alone vue component',            
            type: 'boolean'
        }
    },
    option:{

    },
    handler: function (argv) {
        console.log('argv', argv);
        generate.generate(argv.value);
    }
})

/**
 * Command that generates a new webcomponent project that bundles a new webpack project and starts the
 */
yargs.command({
    command: 'new [value]',
    describe: 'Generate a new web component project', 
    aliases: ['n'],
    builder: (yargs) => yargs.default('value', 'new_project'),
    handler: function(argv){
        newProject.newProject(argv.value);
    }
}).argv
