(function($) {
	$.fn.komohua = function(options) {
		var defaults = { // start off with some default settings
				chars:           'ʻĀĒĪŌŪāēīōū', // characters to inject
				container_class: 'injectors',   // container class
				container_loc:   'after',       // where to place the injector container relative to the input
				container_tag:   'span',        // container tag
				helpers:         [              // additional buttons as definable helper functions
					{
						label: 'Switch to ʻokina',
						tooltip: 'Convert tick, backtick, and left single quote characters to the ʻokina in the selected text (or all if nothing is selected)',
						action: function() {
							var s = this[0].selectionStart, e = this[0].selectionEnd; // remember the selection start
							if (s!==e) { // only apply the fix in the selected text if there is a selection
								var val = this.val(),
									inner = val.substring(s, e),
									pre = val.substring(0, s),
									post = val.substring(e, val.length);
								this.val(pre + inner.replace(/`|'|‘/g, 'ʻ') + post);
							} else { // no selection, so apply to the whole thing
								this.val(this.val().replace(/`|'|‘/g, 'ʻ')); // convert backtick, tick, left single quote to ʻokina
							}
							this[0].selectionStart = s; // put the selection back
							this[0].selectionEnd = e;
							this.focus(); // focus back on the input
						}
					}
				],
				helpers_class:   'inject-helper', // class for helpers
				injector_class:  'inject',      // injector class
				injector_params: 'href="#"',    // injector tag parameters
				injector_tag:    'a'            // injector tag
			},
			settings = $.extend({}, defaults, options); // merge the user's settings into the defaults

		return this.each(function() {
			var input = $(this),
				container = $('<'+settings.container_tag+' class="'+settings.container_class+'" />'), // container for the injectors
				build_html = '';
			if (settings.chars.length && (typeof input[0].selectionStart==='number')) { // are there are injector characters to add and does the element have a selectionStart property?
				$.each(settings.chars.split(''), function(i, v) {
					build_html += '<'+settings.injector_tag+' '+settings.injector_params+' class="'+settings.injector_class+'">'+v+'</'+settings.injector_tag+'>';
				});
				container.append(build_html);
				$.each(settings.helpers, function(i, v) {
					var h = $('<'+settings.injector_tag+' '+settings.injector_params+' title="'+v.tooltip.replace(/"/g, '&quot;')+'" class="'+settings.helpers_class+'">'+v.label+'</'+settings.injector_tag+'>');
					h.on('click', function(e) {
						e.preventDefault();
						v.action.apply(input);
					});
					container.append(h);
				});
				if (settings.container_loc==='before') { input.before(container); }
				else { input.after(container); }
				container.on('click', '.'+settings.injector_class.replace(/ /g, '.'), function(e) {
					var el = input[0],
						start = el.selectionStart,
						pre = el.value.substring(0, start),
						post = el.value.substring(el.selectionEnd, el.value.length),
						replacement = $(this).text();
					e.preventDefault();
					el.value = pre + replacement + post;
					el.selectionStart = start + replacement.length;
					el.selectionEnd = el.selectionStart;
					el.focus();
				});
			} // if valid element type
		});
	}; // $.fn.komohua()
})(jQuery);