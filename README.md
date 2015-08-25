# Komohua: Character Injection

*ʻO Komohua he kuʻina koʻo jQuery (1.7 a ʻoi) no ke komo ʻana o nā huapalapala ʻŌlelo Hawaiʻi i loko o ka `input` a me ka `textarea` ma ka papapihi hiki ʻole. Hiki pū ʻo Komohua ke kōkua i kekahi mau hana like. __ʻAʻole mākaukau nā kinona hua a pau i nā huapalapala Ōlelo Hawaiʻi.__*

*Komohua* is a jQuery (1.7+) plugin which adds Hawaiian character injectors to HTML input and textareas, along with optional helper functions. **Note that many fonts do not support the full range of Hawaiian letters, particularly the ʻokina.**

**Browser support:** Chrome 1+, Firefox 1+, Internet Explorer 9+, Opera 8+, Safari 3+.

**Demo:** [Komohua Demo](http://hilo.hawaii.edu/js/jquery.komohua/demo.html)

![animated demo](http://i.imgur.com/PBWLEYG.gif)

## *Hana* (Usage)

*Aia ka hana a Komohua iā UTF-8. Hiki paha ke hana pū ma waho akā ʻaʻole i paʻani pēla.*

*Komohua* assumes you are using UTF-8 encoding in your pages and source files. It may work but is untested with other encodings.

```html
<meta charset="utf-8">
```

### *He Laʻana Pōkole* (Sample Basic Usage)

```html
<p>
  <label for="input">Input:</label>
  <input type="text" id="input">
</p>
<script src="/path/to/jquery.js"></script>
<script src="/path/to/jquery.komohua.js"></script>
<script>$('#input').komohua();</script>
```

### *He Laʻana me Kekahi Mea Koho* (Sample with Additional Options)

```html
<p>
  <label for="textarea">Textarea:</label>
  <textarea id="textarea" rows="4">'Olelo Hawai`i should be ʻŌlelo Hawaiʻi</textarea>
</p>
<script src="/path/to/jquery.js"></script>
<script src="/path/to/jquery.komohua.js"></script>
<script>
$('#textarea').komohua({
  chars: 'āēīōūĀĒĪŌŪʻ', // different list of characters
  container_loc: 'before', // display the injectors before the textarea
  container_tag: 'div' // contain the injectors in a div
});
</script>
```

## *Nā Mea Koho* (Options)

| *Inoa*<br>(Option) | *ʻAno*<br>(Type) | *Paʻamau*<br>(Default) | *Memo*<br>(Description) |
| ------ | ---- | ------- | ----------- |
| `chars` | string | ʻĀĒĪŌŪāēīōū | List of characters which are turned into injector buttons |
| `container_class` | string | after | Class(es) applied to the injectors container element |
| `container_loc` | after/before (string) | after | Place the injectors before or after the input element |
| `container_tag` | string | span | Tag name of injectors container element |
| `helpers` | array of objects | see [Helpers](#helpers) for the default helper | Optional additional buttons as definable helper functions |
| `helpers_class` | string | inject-helper | Class(es) applied to the helper buttons |
| `injector_class` | string | inject | Class(es) applied to the injector buttons |
| `injector_params` | string | href="#" | Additional parameters added to the injector buttons tag |
| `injector_tag` | string | a | Tag name of the injector buttons |

## *Nā Hana Kōkua* (Helpers)    {#helpers}

*Hiki ke haku i kekahi hana kōkua (ʻo Helpers) no ka hana ʻokoʻa ma waena i na pihi Komohua, me ke kaila pū o ia mea.*

Additional helper buttons may be added which provide non-injector functionality but within the confines and context of the injector buttons container.

### *Wehewehe i Nā Hana Kōkua* (Helpers Definition)

```javascript
var helpers = [{
  label:   'Ke Pihi Inoa / Helper button label',
  tooltip: 'Ke Pihi Memo / Hover text on the helper button',
  action:  function() {
    // Eia ka hana mauli.
    // ʻO this ka input/textarea

    // functionality of the button goes here
    // "this" has the context of the input/textarea element
  },
  $.fn.komohua.okina_helper // also include the ʻokina helper as well
}];
```

### *ʻO Switch to ʻOkina* (Included Helper)

*ʻO Switch to ʻOkina ka hana kōkua no ka hoʻololi i nā mea ʻokina like (', \`, ‘) i ka ʻokina mauli.*

The default helper is a button which will convert ticks ', backticks \`, and left single quotes ‘ to the proper ʻokina character.

*Ke koho i kekahi māhele o ke kikokikona, e hoʻololi wale nō ana ʻo Switch to ʻOkina i loko o nā mea i koho, akā ke koho ʻole, e hoʻololi ana i na huapalapala like ʻokina a pau.*

If there is no selected text in the input, all such characters will be converted; but if there is a selection, only such characters in the selected text will be converted.

*Ke makemake ʻole iā Switch to ʻOkina, e kāhea iā Komohua e like me kēia.*

If you do not want the included helper, call Komohua as follows.

```html
$('#selector').komohua({helpers: []});
```

## *Nā Mea ʻOkoʻa* (Other Features)

*Inā kāhea iā `$.fn.komohua.supported()`, puka mai ka hiki o Komohua i loko o ia browser.*

You can test if Komohua will work in the browser by calling `$.fn.komohua.supported()`.

## License

(The MIT License)

Copyright (c) 2013 Sunny Walker swalker@hawaii.edu

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
