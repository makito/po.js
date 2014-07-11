po.js
=====

Super-simple gettext translation in pure JS

Advantages
=====
1. Lightweight: ~0.5KB
2. No need in 3d-party dependencies like jQuery, Prototype etc.
3. JSON is caching in localStorage. To reset cache simple add ?1 to json link (yeah, old-school).

Usage
=====
- Create JSON file from PO and store it on your server in public folder. I suggest you to use this converter - https://localise.biz/free/converter/po-to-json
- Include po.min.js into your project
```
<script src="po.min.js"></script>
```
- Initialize your translation by calling init() method and pass link to your converted JSON file. Not pass this link for default language.
```
pojs.init('/ru.json');
```
- In all your JS files replace all untranslated messages. po.js will find translation or will return this key otherwise.
```
pojs._('Hello world');
```
- Simple sprintf emulation:
```
pojs._('My name is %s, and I am %s years old', ['Sasha', 24]);
```
- If JSON is not cached it can take some time for JSON loading. So you should wrap all your code:
```
pojs.ready(function() {
    pojs._('Hello world');
});
```
