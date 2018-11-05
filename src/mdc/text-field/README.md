
# Material Design TextField components

This a TextField component that integrates with Aurelia validation. 
Aurelia validation works on objects, so that is why you will have to pass a model and a property name.

## Attributes

1. `id` is the identifier of the element and must have an unique value (**required**);
2. `model` is required and must be bound to an object that has an Aurelia validation bound to it (**required**);
3. `property` is required and is the name of the property in `model` that is edited (**required**);
4. `label` is the label shown above the text field;
5. `type` is the type of the input; default `text`;
6. `helperText` is a text that is shown when the input has focus and there is no error;
7. `required` indicates if the input is a required field; is independent of the Aurelia validation required(), so both must be set;
8. `disabled`: indicates if the input is disabled;
9. `autofocus`: indicates if the text-field must have autofocus;
10. `autocomplete`: sets the autocomplete value; default `on`;
11. `max-length`: set the maximum length that a user can fill in; is independent of the Aurelia validation maxLength(), so both must be set;

