var frontMatter = require('front-matter')
var markdownIt = require('markdown-it')
var objectAssign = require('object-assign')

var md = markdownIt({
  html: true,
  linkify: true,
  typographer: true
})

module.exports = function (content) {
  this.cacheable()
  const meta = frontMatter(content)
  const body = md.render(meta.body)
  const result = objectAssign({}, meta.attributes, {
    body,
  })
  this.value = result
  return `module.exports = ${JSON.stringify(result)}`
}
