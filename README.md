# react-native-bottom-alert

`react-native-bottom-alert` is a customizable React Native component that displays a smooth, bottom-aligned alert dialog with optional loader and action button. It supports automatic dismissal and flexible color theming.

## Demo

![react-native-bottom-alert-cropped](https://github.com/user-attachments/assets/3c05f576-6026-44b7-98d9-f54223d11e8f)

## Usage

```tsx
<BottomAlert
  visible={modalVisible}
  duration={4000}
  autoHide={true}
  showLoader={false}
  colors={{
    buttonTextColor: "#532f91",
    buttonBgColor: "#f8f3ff",
    backgroundColor: "#f8f3ff",
    descriptionTextColor: "#6f7795",
  }}
/>
```

## Props

| Prop            | Type         | Default                              | Description                                                                   |
| --------------- | ------------ | ------------------------------------ | ----------------------------------------------------------------------------- |
| `visible`       | `boolean`    | **Required**                         | Controls visibility of the alert.                                             |
| `title`         | `string`     | `"Operation Completed Successfully"` | The main title text displayed in the alert.                                   |
| `description`   | `string`     | `undefined`                          | Optional description text below the title.                                    |
| `buttonText`    | `string`     | `"Close"`                            | Text displayed on the action button.                                          |
| `onButtonPress` | `() => void` | `undefined`                          | Callback invoked when the action button is pressed or auto-hide triggers.     |
| `duration`      | `number`     | `3000`                               | Duration (in milliseconds) before auto-hide triggers (if `autoHide` is true). |
| `autoHide`      | `boolean`    | `true`                               | Whether the alert should automatically dismiss after `duration`.              |
| `showLoader`    | `boolean`    | `true`                               | Whether to show a loading spinner next to the alert content.                  |
| `colors`        | `object`     | See **Default Colors**               | Object to customize colors of various alert elements. See below for details.  |

### `colors` prop shape

All colors are optional; unspecified colors fall back to these defaults:

| Color Key              | Type     | Default   | Description                                                                                  |
| ---------------------- | -------- | --------- | -------------------------------------------------------------------------------------------- |
| `buttonTextColor`      | `string` | `#532f91` | Color used for the title text, button text, and the loader spinner.                          |
| `buttonBgColor`        | `string` | `#f8f3ff` | Background color of the action button.                                                       |
| `backgroundColor`      | `string` | `#f8f3ff` | Background color of the alert container.                                                     |
| `descriptionTextColor` | `string` | `#6f7795` | Color of the optional description text and the button border color (with 10% opacity added). |

- The alert slides in/out from the bottom with smooth animation.
- If `autoHide` is true, the alert auto-dismisses after `duration` milliseconds.
- Action button dismisses alert and triggers `onButtonPress` callback.
- Loader shows to indicate ongoing processes and can be toggled via `showLoader`.
