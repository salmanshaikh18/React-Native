## react-native-bouny-checkbox library

[Learn more about react-native-bouny-checkbox library](https://www.npmjs.com/package/react-native-bouncy-checkbox)

## Installation

Add the dependecny in React-Native

```bash
npm i react-native-bouncy-checkbox
```

## Import 

```JavaScript
import BouncyCheckbox from "react-native-bouncy-checkbox";
```

## Usage

```JavaScript
<BouncyCheckbox onPress={(isChecked: boolean) => {}} />
```

## Advanced Custom Usage

```JavaScript
<BouncyCheckbox
  size={25}
  fillColor="red"
  unfillColor="#FFFFFF"
  text="Custom Checkbox"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "JosefinSans-Regular" }}
  onPress={(isChecked: boolean) => {}}
/>
```

## Configuration props

| Property                | Type       | Default         | Description                                                                                                      |
|-------------------------|------------|-----------------|------------------------------------------------------------------------------------------------------------------|
| text                    | string     | undefined       | Set the checkbox's text.                                                                                         |
| textComponent           | component  | undefined       | Set the checkbox's text using a React Component.                                                                 |
| onPress                 | function   | null            | Set your own onPress functionality after the bounce effect. Callback receives the next `isChecked` boolean if `disableBuiltInState` is false.                           |
| disableText             | boolean    | false           | Enable/disable the checkbox text.                                                                                |
| size                    | number     | 25              | Size of width and height of the checkbox.                                                                        |
| style                   | style      | default         | Set/override the container style.                                                                                |
| textStyle               | style      | default         | Set/override the text style.                                                                                     |
| iconStyle               | style      | default         | Set/override the outer icon container style.                                                                     |
| innerIconStyle          | style      | default         | Set/override the inner icon container style.                                                                     |
| isChecked               | boolean    | false           | Set the default checkbox value.                                                                                  |
| fillColor               | color      | #f09f48         | Change the checkbox's filled color.                                                                             |
| unfillColor             | color      | transparent     | Change the checkbox's un-filled color when it's not checked.                                                      |
| useNativeDriver         | boolean    | true            | Enable/disable the useNativeDriver for animation.                                                               |
| iconComponent           | component  | Icon            | Set your own icon component.                                                                                     |
| checkIconImageSource    | image      | default         | Set your own check icon image.                                                                                   |
| ImageComponent          | component  | Image           | Set your own Image component instead of RN's default Image.                                                      |
| disableBuiltInState     | boolean    | false           | Enable/disable manually handling the isChecked prop and disable built-in handling.                              |
| textContainerStyle      | ViewStyle  | default         | Set/override the text container style.                                                                          |
| TouchableComponent      | Component  | TouchableOpacity | Set/override the main TouchableOpacity component with any Touchable Component like Pressable.                   |


## Animation Configurations

| Property          | Type    | Default | Description                                       |
|-------------------|---------|---------|---------------------------------------------------|
| bounceEffectIn    | number  | 0.9     | Change the bounce effect when pressed in.         |
| bounceEffectOut   | number  | 1       | Change the bounce effect when pressed out.        |
| bounceVelocityIn  | number  | 0.1     | Change the bounce velocity when pressed in.       |
| bounceVelocityOut | number  | 0.4     | Change the bounce velocity when pressed out.      |
| bouncinessIn      | number  | 20      | Change the bounciness when pressed in.            |
| bouncinessOut     | number  | 20      | Change the bounciness when pressed out.           |
