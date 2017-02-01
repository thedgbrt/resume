- Uses flow@0.38

## For dynamic page transitions
- in pages/_Modal.js, set all initial state values to true
- in pages/_Page.js, remove the <Modal> component wrapper (so that the outermost component is `<div className="page content">`)
