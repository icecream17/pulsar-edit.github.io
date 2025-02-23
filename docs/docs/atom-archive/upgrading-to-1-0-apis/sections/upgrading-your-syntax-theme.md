---
title: Upgrading Your Syntax Theme
---

::: note

**Note:** The Shadow DOM was removed in Atom `1.13`. The `:host` selector described below won't work and should not be used anymore.

:::

### Upgrading Your Syntax Theme

Text editor content is now rendered in the shadow DOM, which shields it from being styled by global style sheets to protect against accidental style pollution. For more background on the shadow DOM, check out the [Shadow DOM 101](https://www.html5rocks.com/en/tutorials/webcomponents/shadowdom) on HTML 5 Rocks.

Syntax themes are specifically intended to style only text editor content, so they are automatically loaded directly into the text editor's shadow DOM when it is enabled. This happens automatically when the theme's `package.json` contains a `theme: "syntax"` declaration, so you don't need to change anything to target the appropriate context.

When theme style sheets are loaded into the text editor's shadow DOM, selectors intended to target the editor from the _outside_ no longer make sense. Styles targeting the `.editor` and `.editor-colors` classes instead need to target the `:host` pseudo-element, which matches against the containing `atom-text-editor` node. Check out the [Shadow DOM 201](https://www.html5rocks.com/en/tutorials/webcomponents/shadowdom-201#toc-style-host) article for more information about the `:host` pseudo-element.

Here's an example from Atom's light syntax theme. Note that the `atom-text-editor` selector intended to target the editor from the outside has been retained to allow the theme to keep working during the transition phase when it is possible to disable the shadow DOM.

```less
atom-text-editor,
:host {
	/* :host added */
	background-color: @syntax-background-color;
	color: @syntax-text-color;

	.invisible-character {
		color: @syntax-invisible-character-color;
	}
	/* more nested selectors... */
}
```
