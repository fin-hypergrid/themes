Themes for Hypergrid

### Synopsis
```js
function registerTheme(name, themeObject);
```
```js
function registerTheme(themeObject); // name optional when `themeObject.themeName` defined
```
```js
function registerTheme(name); // unregisters a theme previously registered under name
```
```js
function registerThemes(collection); // registers a whole collection of themes at once
```
```js
function applyTheme(name); // uses a registered theme
```
```js
function applyTheme(themeObject); // uses an unregistered theme
```
```js
function applyTheme(); // removes theme; resets to default theme
```

### Registering themes

Selected theme from this package:
```js
Hypergrid.registerTheme(require('fin-hypergrid-themes/js/candy'));
```

All themes in this package:
```js
Hypergrid.registerThemes(require('fin-hypergrid-themes'));
```

Build a theme from a loaded [Polymer Theme](https://polymerthemes.com) CSS stylesheet (name required):
```js
Hypergrid.registerTheme('myTheme', require('fin-hypergrid-themes').buildTheme());
```

To unregister:
```js
Hypergrid.registerTheme('myTheme');
```

### Applying themes

```js
Hypergrid.applyTheme('myTheme'); // set a global theme shared by all grid instances
myGridInstance.applyTheme('candy'); // overlay a local theme for a particular grid instance
```

To remove applied theme/restore default theme:
```js
myGridInstance.applyTheme('default');
myGridInstance.applyTheme(); // same effect
```

> NOTE: Global theme cannot be removed.

There are also `theme` setters that can be used instead of `applyTheme`:
```js
Hypergrid.theme = 'dark-side'; // set a global theme
grid.theme = 'candy'; // set a local theme
```

### Interrogating the local theme

```js
var currentTheme = grid.getTheme(); // get theme name or undefined if no theme applied
```

There is also a `theme` getter that can be used in place of `getTheme`:
```js
var currentTheme = grid.theme; // get theme name or undefined if no theme applied
```
