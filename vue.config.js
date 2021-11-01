module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            builderOptions: {
                "appId": "com.example.app",  //ID 不用解释吧?
                "productName":"云上浏览器",//项目名，也是生成的安装文件名，即aDemo.exe
                "copyright":"Copyright © 2021",//版权信息
                "directories":{
                    "output":"./dist"//打包后的输出文件路径
                },
                "mac": {
                    "category": "public.app-category.developer-tools", // 应用程序类别
                    "target": ["dmg", "zip"],  // 目标包类型 
                    "icon": "./favicon.ico" // 图标的路径
                },
                "win":{//win相关配置
                    "icon":"./favicon.ico",//图标，当前图标在根目录下，注意这里有个坑
                    "target": [
                        {
                            "target": "nsis",//利用nsis制作安装程序
                            "arch": [
                                "x64"//64位
                            ]
                        }
                    ]
                },
                "nsis": {
                    "oneClick": false, // 是否一键安装
                    "allowElevation": true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
                    "allowToChangeInstallationDirectory": true, // 允许修改安装目录
                    "installerIcon": "./favicon.ico",// 安装图标
                    "uninstallerIcon": "./favicon.ico",//卸载图标
                    "installerHeaderIcon": "./favicon.ico", // 安装时头部图标
                    "createDesktopShortcut": true, // 创建桌面图标
                    "createStartMenuShortcut": true,// 创建开始菜单图标
                    "shortcutName": "云上浏览器", // 图标名称(也就是应用创建后的桌面快捷方式名称)
                },
                }
            }

    }
}