
# Material Design Drawer component

## Attributes

1. `model` indicates if the drawer must be modal;
2. `title` holds the title;
3. `subtitle` holds the subtitle;
4. `mainContentSelector` is the CSS selector for the main part; default `main`

The replacable template `drawer-content` must contain a `nav` element with class `mdc-list` and items with class `mdc-list-item`.

```html
<nav class="mdc-list">
    <a class="mdc-list-item mdc-list-item--activated" href="#" aria-selected="true">
        <i class="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>
        <span class="mdc-list-item__text">Inbox</span>
    </a>
    <a class="mdc-list-item" href="#">
        <i class="material-icons mdc-list-item__graphic" aria-hidden="true">send</i>
        <span class="mdc-list-item__text">Outgoing</span>
    </a>
    <a class="mdc-list-item" href="#">
        <i class="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
        <span class="mdc-list-item__text">Drafts</span>
    </a>
</nav>
```