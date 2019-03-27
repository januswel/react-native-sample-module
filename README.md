# react-native-sample-module

## Getting started

`$ npm install react-native-sample-module --save`

### Mostly automatic installation

`$ react-native link react-native-sample-module`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-sample-module` and add `JWSampleModule.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libJWSampleModule.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.januswel.JWSampleModulePackage;` to the imports at the top of the file
  - Add `new JWSampleModulePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-sample-module'
  	project(':react-native-sample-module').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-sample-module/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-sample-module')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `JWSampleModule.sln` in `node_modules/react-native-sample-module/windows/JWSampleModule.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Sample.Module.JWSampleModule;` to the usings at the top of the file
  - Add `new JWSampleModulePackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import JWSampleModule from 'react-native-sample-module';

// TODO: What to do with the module?
JWSampleModule;
```
  