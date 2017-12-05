import Reveal from 'reveal.js/js/reveal'
import 'reveal.js/lib/js/head.min'
import '../node_modules/reveal.js/css/reveal.css'
import '../node_modules/reveal.js/css/theme/moon.css'
import './output.css'
import './darcula.css'

const libPath = '../node_modules/reveal.js/'

Reveal.initialize({
  dependencies: [
    {src: `${libPath}plugin/markdown/marked.js`},
    {src: `${libPath}plugin/markdown/markdown.js`},
    {src: `${libPath}plugin/notes/notes.js`, async: true},
    {
      src: `${libPath}plugin/highlight/highlight.js`,
      async: true,
      callback: () => { hljs.initHighlightingOnLoad() }
    }
  ],
  history: true,
  slideNumber: true,
})