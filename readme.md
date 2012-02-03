# GHOST

Ghost is the minimalistic dependency management for client-side JavaScript applications.

## Motivation

Once you want to develop larger scale application, you will start to divede your app
into multiple pieces - modules. Each module can stay on its own or base on another.
The module dependency will soon become the problem, you would have to tackle. 

Ghost is simple and fullfil just one purpose - handle your dependency management. The 
modules are registered to global container, which is then used to require and execute
the module. Because it takes care to check if module was already required, it would
never execute your code multiple times.

## Installation

Grap the most recent release of ```ghost.js``` or its uglified variation ```ghost.min.js```.
You can include the Ghost into your html and directly start using it.

## Getting started

Here comes the very simple example, which shows, how to use the Ghost:

index.html

```html
<script type="text/javascript" src="ghost.min.js"></script>
<script type="text/javascript" src="core.js"></script>
<script type="text/javascript" src="namespace.js"></script>
<script type="text/javascript">
  // You can see above it modules would work regardless the order of loading.
  // Each module should require its own dependancies, so it makes sure it would work.

  // Require Core module.
  require('core');
</script>
```

namespace.js

```javascript
register('namespace', function() {
  window.Namespace = {};
});
```

core.js

```javascript

// Here comes simple Foo module. It has the Namespace module as dependancy, so we make
// sure its executed before Foo. Way how to execute the code is to call require function.

require('namespace');
window.Namespace.Core = {};
```

## API

```register(name, callback)``` - register the module with a given name. Module is always a
function, to be executed when module is required.

```require(name)``` - require the execution of the given module.

## License

Copyright (C) 2012 Petr Janda

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
