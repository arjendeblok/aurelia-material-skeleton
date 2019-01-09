
# Material Design Select components

This a Select component that uses a native select

## Example

```html
<mdc-select id="selectInput" 
            label="Fruit" 
            selected.bind="selectedFruit" 
            choose="Select a fruit" 
            options="Banana,Orange,Apple">
</mdc-select>
```

## Attributes

1. `id` is the identifier of the element and must have an unique value (**required**);
2. `label` is the label shown above the select;
3. `selected` is the where the selected value is stored;
4. `choose` is a text that is shown when the select has nothing selected (yet);
5. `options` is a commma separated list op options
6. `helperText` is a text that is shown when the select has focus and there is no error;
7. `required` indicates if the select is a required field; is independent of the Aurelia validation required(), so both must be set;

You can also not use the `choose` and `options` attributes and make your own list of `option` tags.

```html
<template replace-part="options">
    <option model.bind="null">Select a fruit</option>
    <option value="Banana" selected>Banana</option>
    <option value="Orange">Orange</option>
    <option value="Apple">Apple</option>
</template>
```

## Important

You need to add the `mdc-validation-errors` custom attribute and an `validate` value behavior on the `value` attribute to make the validation work.
