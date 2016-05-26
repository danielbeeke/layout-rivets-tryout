# Rivets layout example

This repo is an example how you can use rivets to have a layout that is maintainable.

## Abstract idea: Layouts are a lot like faces.

For this example I have used the abstract idea that layouts/UI's are a bit like a face.
A face has 'presets': smiling, lauching, crying, thinking, eating.
These presets are a combination of tension on muscles in the face. So for laughing you maybe need 20 specific muscles,
 for thinking maybe 10 different one. 
 
## Back to rivets 

State of a layout is like the face. Inside the example state is a javascript object.

```
layout: {
    sidebar: {
        collapsed: false
    },
    panel: {
        left: {
            name: 'left',
            expanded: true,
            collapsed: false
        },
        right: {
            name: 'right',
            expanded: false,
            collapsed: true
        }
    }
}
```

Rivets monitors this object, so when a value changes rivets re-renders the template.
Awesome!