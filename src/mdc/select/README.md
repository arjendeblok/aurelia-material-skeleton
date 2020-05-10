
# Material Design Select components

This a Select component that uses a native select

## Example

```html
<mdc-select id="selectInput" 
            label="Fruit" 
            selected.bind="selectedFruit" 
            select-options.bind="['Banana', 'Orange', 'Apple'] | mdcSelectOptions">
</mdc-select>
```

## Attributes

1. `id` is the identifier of the element and must have an unique value (**required**);
2. `label` is the label shown above the select;
3. `selected` is the where the selected value is stored;
5. `select-options` is an array of values or an array of key/value pairs where the key is a string and the value can be anything
6. `helperText` is a text that is shown when the select has focus and there is no error;
7. `required` indicates if the select is a required field; is independent of the Aurelia validation required(), so both must be set;


Besides strings 

```html
<mdc-select id="selectInput" 
            label="Fruit" 
            selected.bind="selectedFruit" 
            select-options.bind="['Banana', 1, 'Orange', 2, 'Apple', 3 | mdcSelectOptions:true">
</mdc-select>
```

## Important

You need to add the `mdc-validation-errors` custom attribute and an `validate` value behavior on the `value` attribute to make the validation work.
