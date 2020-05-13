
# Material Design Switch component

## Example

```html
<mdc-switch 
    id="switch-input" 
    label="Switch me" 
    checked.bind="checked & validate" 
    required="true">
</mdc-switch>
```

## Attributes

1. `id` is the identifier of the element and must have an unique value (**required**);
2. `label` holds the label;
3. `checked` is the boolean value of the switch;
4. `required` indicates if the input is a required field; is independent of the Aurelia validation required(), so both must be set.
