
# Material Design TextField components

This a TextField component that integrates with Aurelia validation. 

## Example

```html
<mdc-text-field 
    id="emailInput" 
    label="Email"
    value.bind="email & validate"
    required="true" maxlength="25" 
    mdc-validation-errors>
</mdc-text-field>
```

## Attributes

1. `id` is the identifier of the element and must have an unique value (**required**);
2. `value` is required and could be bound to a property that has an Aurelia validation bound to it (**required**);
3. `label` is the label shown above the text field;
4. `type` is the type of the input; default `text`;
5. `helperText` is a text that is shown when the input has focus and there is no error;
6. `required` indicates if the input is a required field; is independent of the Aurelia validation required(), so both must be set;
7. `disabled`: indicates if the input is disabled;
8. `autofocus`: indicates if the text-field must have autofocus;
9. `autocomplete`: sets the autocomplete value; default `on`;
10. `max-length`: set the maximum length that a user can fill in; is independent of the Aurelia validation maxLength(), so both must be set;

## Important

You need to add the `mdc-validation-errors` custom attribute and an `validate` value behavior on the `value` attribute to make the validation work.
