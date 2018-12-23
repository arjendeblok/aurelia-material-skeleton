
# Material Design Switch component

## Attributes

1. `id` is the identifier of the element and must have an unique value (**required**);
2. `label` holds the label
3. `checked` is the boolean value of the switch

If you want validation work for the switch you have to change the update trigger of the validation controller because it will not *blur* when the switch is changed.

```javascript
this.controller.changeTrigger(validateTrigger.changeOrBlur);
```