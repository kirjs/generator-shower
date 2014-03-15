'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var ShowerGenerator = yeoman.generators.Base.extend({
    init: function() {
        this.pkg = require('../package.json');

        this.on('end', function() {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    askFor: function() {
        var done = this.async();

        // have Yeoman greet the user
        this.log(this.yeoman);

        // replace it with a short and sweet description of your generator
        this.log(chalk.magenta('Shower presentation generator.'));

        var prompts = [{
            name: 'author',
            message: 'Your name?',
            default: 'temp'
        }, {
            name: 'url',
            message: 'Your website?',
            default: ''
        }, {
            name: 'title',
            message: 'Presentation title',
            default: 'temp'
        }, {
            name: 'theme',
            type: 'list',
            choices: ['shower-ribbon', 'shower-bright', 'none'],
            message: 'Presentation theme'
        }];

        this.prompt(prompts, function(props) {
            this.author = props.author;
            this.theme = props.theme;
            this.title = props.title;
            this.url = props.url;

            done();
        }.bind(this));
    },

    app: function() {
        this.mkdir('presentation');
        this.copy('_package.json', 'package.json');
        this.template('_bower.json', 'bower.json');
        this.copy('bowerrc', '.bowerrc');
        this.template('presentation/_index.html', 'presentation/index.html');

    }


});

module.exports = ShowerGenerator;