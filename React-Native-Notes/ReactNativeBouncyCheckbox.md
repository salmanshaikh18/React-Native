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