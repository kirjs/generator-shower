'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var placeholder = module.exports = require('../common/SlideGenerator').placeholder;


var ShowerGenerator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = require('../package.json');
        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    askFor: function () {
        var done = this.async();
        this.log(this.yeoman);
        this.log(chalk.magenta('Shower presentation generator.'));

        var prompts = [
            {
                name: 'author',
                message: 'Your name',
                default: 'temp'
            },
            {
                name: 'url',
                message: 'Your website',
                default: ''
            },
            {
                name: 'title',
                message: 'Presentation title',
                default: 'temp'
            },
            {
                name: 'theme',
                type: 'list',
                choices: ['shower-ribbon', 'shower-bright', 'none'],
                message: 'Presentation theme'
            },
            {
                type: 'confirm',
                name: 'license',
                message: 'Include a copy of MIT licence?',
                default: true
            },
            {
                type: 'confirm',
                name: 'showProgressBar',
                message: 'Show progress bar?',
                default: true
            }
        ];

        this.prompt(prompts, function (props) {
            this.author = props.author;
            this.theme = props.theme;
            this.title = props.title;
            this.license = props.license;
            this.url = props.url;
            this.showProgressBar = props.showProgressBar;
            this.placeholder = placeholder;
            done();
        }.bind(this));
    },

    app: function () {
        this.mkdir('presentation');
        this.copy('bowerrc', '.bowerrc');
        this.template('_bower.json', 'bower.json');
        this.template('_package.json', 'package.json');
        this.template('presentation/_index.html', 'presentation/index.html');
        console.log('license::', this.license);
        if (this.license) {
            this.template('presentation/_License.md', 'presentation/License.md');
        }
    }



});

module.exports = ShowerGenerator;