const Metalsmith  = require('metalsmith');
const collections = require('metalsmith-collections');
const layouts     = require('metalsmith-layouts');
const markdown    = require('metalsmith-markdown');
const permalinks  = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .metadata({
    sitename: 'Design By X',
    siteurl: 'https://jamesgopsill.github.io/DesignByX/',
    description: '',
    generatorName: 'Metalsmith',
    generatorUrl: 'http://www.metalsmith.io'
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(collections({
    posts: 'posts/*/*.md'
  }))
  .use(markdown())
  .use(permalinks({
    relative: false
  }))
  .use(layouts({
    engine: 'handlebars'
  }))
  .build(function(err){
    if (err) throw err;
  });
