初始化项目安装react-native-camera会遇到各种版本问题，逐个更改

打release包一直报
android/app/build/intermediates/res/merged/release/drawable-hdpi/node_modules_reactnavigation_src_views_assets_backicon.png: error: uncompiled PNG file passed as argument. Must be compiled first into .flat file..

暂时解决方法：
In your gradle.properties file add following lines:
classpath 'com.android.tools.build:gradle:3.0.0'
distributionUrl=https://services.gradle.org/distributions/gradle-4.1-all.zip
android.enableAapt2=false