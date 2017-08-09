yarn install
go to node_modules > react-native-google-signin > android > src > ... > RNGoogleSigninPackage.java 
remove @Override on line 25
go to node_modules > react-native-material-bottom-navigation > lib > BottomNavigation.js
change line 155 from 3 to at least 5 

cd android
./gradlew clean
cd ..
react-native run-android

Develop :)