auth: 管理系统前端代码
visualization: 看板
workbench： 工台面板

  "build": {
    "appId": "com.nodebook.app", 
    "productName": "云上浏览器", 
  	"asar": true,
    "directories": {
        "buildResources": "build",
        "output": "dist"
    },
    "win": {
        "target": ["nsis","zip"]
    },
    "nsis": {
    "oneClick": false,
    "allowElevation": true,
    "allowToChangeInstallationDirectory": true,
    "installerIcon": "./build/favicon.ico",
    "uninstallerIcon": "./build/favicon.ico",
    "installerHeaderIcon": "./build/favicon.ico",
    "createDesktopShortcut": true,
    "createStartMenuShortcut": true
    }
  },