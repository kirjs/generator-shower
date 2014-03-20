# generator-shower [![Build Status](https://secure.travis-ci.org/kcherkashin/generator-shower.png?branch=master)](https://travis-ci.org/kcherkashin/generator-shower)
This is a yeoman generator for the [Shower presentation engine](http://shwr.me)

> [Yeoman](http://yeoman.io) generator

## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

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

After generating any slide yeoman will display the following prompt:
```
conflict index.html
[?] Overwrite index.html? (Ynaxdh)
```
Just hit `Enter`

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
