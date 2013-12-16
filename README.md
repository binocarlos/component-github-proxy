component-github-proxy
======================

An express handler that will download and compile [components](https://github.com/component/component) from github dynamically

```js
var Proxy = require('component-github-proxy');
var app = express();
var server = http.createServer(app);

var proxy = Proxy({
	tmpfolder:'/tmp/wheretobuildcomponents'
})

app.use('/builds', proxy);

server.listen(80, function(){

})
```

Using the above setup we can request the following URLs to have the javascript and css for the component:

```html
<link rel="stylesheet" href="/builds/username/repo/build/build.css" />
<script src="/builds/username/repo"></script>
```

Until improvements are made you need to request the javascript first before the css can be served.  This only applies to the first time you compile a component.