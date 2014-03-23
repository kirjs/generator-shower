# generator-shower [![Build Status](https://secure.travis-ci.org/kcherkashin/generator-shower.png?branch=master)](https://travis-ci.org/kcherkashin/generator-shower)
This is a [Yeoman](http://yeoman.io) generator for the [Shower presentation engine](http://shwr.me)

## Getting Started

### Installing Yeoman?

This generator required yeoman, it can be installed from npm:

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-shower from npm, run:

```
$ npm install -g generator-shower
```

### Generating Shower presentation
Navigate into a folder where you want your presentation

```
$ yo shower
```

Answer the questions, then open `presentation/index.html` in your browser.

### Adding slides to your Shower presentation
#### Generate empty slide
```
$ yo shower:slide "Slide title"
```

#### Generate empty list slide
```
$ yo shower:list "Slide title"
```

#### Generate empty table slide
```
$ yo shower:table "Slide title"
```

#### Generate empty shout slide
```
$ yo shower:shout "Slide title"
```

#### Generate empty quote slide
```
$ yo shower:quote "Slide title"
```

#### Generate empty code slide
```
$ yo shower:code "Slide title"
```

## License

MIT
