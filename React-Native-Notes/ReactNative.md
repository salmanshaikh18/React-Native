## React Native

- `Create React-Native Project:` 
```bash
npx react-native@latest init project_name
```

- `Run React-Native Project:`
```bash
npx react-native@latest init project_name
```

- `React-Native Snippets`
```bash
rnfs
```

React Native is an open-source framework developed by Facebook for building mobile applications using JavaScript and React. It allows developers to use React, a popular JavaScript library for building user interfaces, to create native mobile applications for iOS and Android platforms. With React Native, developers can write code once and run it on both iOS and Android, saving time and effort compared to developing separate codebases for each platform.

Key features of React Native include:

1. **Cross-platform Development:** React Native enables developers to write code in JavaScript and React, and then use it to create native mobile apps for both iOS and Android platforms. This helps in maintaining a single codebase for multiple platforms.

2. **Reusable Components:** React Native encourages the use of reusable components, making it easier to share code between different parts of an application or even between different projects.

3. **Hot Reloading:** Developers can see the result of their changes almost instantly with hot reloading, which allows them to inject new versions of the files that they edit without the need for a full app restart.

4. **Native Performance:** React Native bridges the gap between native code and JavaScript, allowing developers to achieve near-native performance. Critical parts of the application can be written in native code for optimal performance.

5. **Large Community and Ecosystem:** React Native has a large and active community, which means that developers can find a wealth of resources, libraries, and third-party plugins to enhance their development process.

6. **Support for Third-party Plugins:** React Native allows the use of third-party plugins or modules, enabling developers to access native device functionalities or use existing native libraries.

Overall, React Native provides an efficient and flexible solution for mobile app development, especially for teams familiar with React and JavaScript. It has gained widespread adoption in the industry and is used by many companies to build high-quality, performant mobile applications.


## Create Hello World in ReactNative

Certainly! The provided code is a simple React Native component written in JavaScript. Let's break down the code step by step:

`App.tsx`

1. **Import Statements:**
   ```javascript
   import React from 'react'
   import {
     View,
     Text,
     SafeAreaView,
     StyleSheet,
   } from 'react-native'
   ```
   Here, you're importing necessary modules from the React and React Native libraries. `React` is imported from the 'react' library, and several components (`View`, `Text`, `SafeAreaView`, `StyleSheet`) are imported from the 'react-native' library. These components are essential for building user interfaces in React Native.

2. **Functional Component:**
   ```javascript
   function App() {
     // ...
   }
   ```
   This defines a functional component named `App`. In React Native, components are building blocks of the UI, and functional components are a concise way to create them. This component, in particular, doesn't take any props and returns a JSX structure to describe the UI.

3. **JSX Structure:**
   ```javascript
   return (
     <SafeAreaView>
       <View>
         <Text>Hello World!</Text>
         <Text>Hello World!</Text>
         <Text>Hello World!</Text>
         <Text>Hello World!</Text>
       </View>
     </SafeAreaView>
   )
   ```
   The `return` statement contains the JSX structure that defines the UI for the `App` component. Here's what each part does:
   - `<SafeAreaView>`: This is a wrapper component provided by React Native to ensure that the content is displayed within the safe area of the device, avoiding areas like notches or system bars.
   - `<View>`: A fundamental container component used to group and structure other components.
   - `<Text>`: This component is used to display text.

   Inside the `<View>` component, there are four `<Text>` components, each displaying the text "Hello World!". This is a simple example to show how you can use the `Text` component to render text in your React Native application.

4. **Export Statement:**
   ```javascript
   export default App;
   ```
   Finally, the `export default App;` statement exports the `App` component as the default export of this module. This allows other parts of your application to import and use this component.

In summary, this code defines a basic React Native component (`App`) that renders a series of "Hello World!" texts within a `View` component, and the whole structure is wrapped in a `SafeAreaView` for proper display on various devices.


## Styling React Native Components

Certainly! This code is another React Native component, and it adds some styling and dynamic theming based on the device's color scheme. Let's break it down:

1. **Import Statements:**
   ```javascript
   import React from 'react'
   import {
       View,
       Text,
       StyleSheet,
       useColorScheme,
   } from 'react-native'
   ```
   Similar to the previous example, you are importing necessary modules from React and React Native libraries. Additionally, you are importing `useColorScheme` from 'react-native', which is a hook that provides information about the user's preferred color scheme (light or dark).

2. **Functional Component:**
   ```javascript
   function AppPro(): JSX.Element {
       // ...
   }
   ```
   This defines a functional component named `AppPro`. Like the previous example, it doesn't take any props and returns a JSX structure.

3. **Dynamic Theming with `useColorScheme`:**
   ```javascript
   const isDarkMode = useColorScheme() === 'dark'
   ```
   Here, you are using the `useColorScheme` hook to determine if the device is in dark mode. It returns 'light', 'dark', or 'null' (if the color scheme cannot be determined). The result is stored in the `isDarkMode` variable.

4. **JSX Structure:**
   ```javascript
   return (
       <View style={styles.container}>
           <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello World!</Text>
       </View>
   )
   ```
   The `return` statement contains the JSX structure that defines the UI for the `AppPro` component. It includes a `View` component with a `Text` component inside. The color of the text is dynamically determined based on the `isDarkMode` variable. If `isDarkMode` is `true`, it applies the `whiteText` style; otherwise, it applies the `darkText` style.

5. **Styles using `StyleSheet.create`:**
   ```javascript
   const styles = StyleSheet.create({
       container: {
           flex: 1,
           alignItems: 'center',
           justifyContent: 'center'
       },
       whiteText: {
           color: '#FFFFFF'
       },
       darkText: {
           color: '#000000'
       }
   })
   ```
   The `StyleSheet.create` method is used to define styles for the components. The `container` style sets the component to take up the full screen and center its content. The `whiteText` and `darkText` styles set the color of the text based on the chosen color scheme.

6. **Export Statement:**
   ```javascript
   export default AppPro;
   ```
   Finally, the `export default AppPro;` statement exports the `AppPro` component as the default export of this module.

In summary, this code creates a React Native component (`AppPro`) that dynamically styles its content based on the device's color scheme. The text color will be white in dark mode and black in light mode.


## ScrollView

In React Native, `ScrollView` is a component that provides a scrolling container for content that is larger than the screen. It allows you to create a scrollable view in which you can place other components or content that extends beyond the dimensions of the screen.

Here's a basic explanation of how to use `ScrollView` in React Native:

1. **Import ScrollView:**
   First, you need to import `ScrollView` from the `react-native` library.

   ```javascript
   import { ScrollView } from 'react-native';
   ```

2. **Wrap Content with ScrollView:**
   Wrap the content you want to make scrollable inside the `ScrollView` component. This content can be a combination of various other React Native components like `View`, `Text`, `Image`, etc.

   ```javascript
   import React from 'react';
   import { ScrollView, View, Text } from 'react-native';

   const MyScrollableComponent = () => {
     return (
       <ScrollView>
         <View>
           {/* Your scrollable content goes here */}
           <Text>Scroll me!</Text>
           {/* ... other components ... */}
         </View>
       </ScrollView>
     );
   };

   export default MyScrollableComponent;
   ```

3. **Props:**
   `ScrollView` comes with various props that you can use to customize its behavior. Some common props include:

   - `horizontal`: If set to `true`, the ScrollView will scroll horizontally instead of vertically.
   - `showsVerticalScrollIndicator` and `showsHorizontalScrollIndicator`: Set to `false` to hide the scroll indicators.
   - `onScroll`: A callback that will be called when the scroll position changes.

   ```javascript
   <ScrollView
     horizontal={true}
     showsVerticalScrollIndicator={false}
     onScroll={(event) => {
       // Handle scroll event
     }}
   >
     {/* Your content here */}
   </ScrollView>
   ```

4. **Nested Components:**
   You can nest other components inside the `ScrollView` to create more complex scrollable layouts. For example, you can use `View` components to structure your layout, and the entire content will become scrollable.

   ```javascript
   <ScrollView>
     <View>
       <Text>Scroll me!</Text>
       <Image source={...} />
       {/* ... other components ... */}
     </View>
   </ScrollView>
   ```

Remember that while `ScrollView` is suitable for smaller amounts of scrollable content, for larger lists of data, you might want to consider using `FlatList` or `SectionList` for better performance and efficiency. These components are optimized for rendering large lists in a more performant way than `ScrollView`.