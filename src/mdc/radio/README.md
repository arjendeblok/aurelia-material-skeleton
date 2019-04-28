
# Material Design Radio component

This a Radio component that integrates with Aurelia.

## Example

```html
<mdc-radio 
    id="radio1"
    name="fruits"
    label="Banana"
    model="banana"
    checked.bind="selectedFruit">
</mdc-radio>
```

## Attributes

1. `id` is the identifier of the element and must have an unique value (**required**);
2. `name` is required and is used to group a number of radio buttons (like in the HTML5 spec) (**required**);
3. `model` is the value that is set in `checked` when the radio button is checked (**required**);
4. `checked` must be bound to a property in your view model (**required**);
5. `label` is the label shown besides the radio button;

## Important

The value of `model` property should be unique within all radio buttons with the same `name`. 
The binding of `checked` should be bind to the same property in your view model within all radio buttons with the same `name`.

You can use `model.bind` if you render radio buttons in a `repeat.for`.
