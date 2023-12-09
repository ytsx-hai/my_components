# vue3-ts 搭建组件库

## 项目搭建步骤

    +1、pnpm init
    +2、pnpm install vue typescript
    +3、建立.npmrc文件写入
        shamefully-hoist = true
    +4、重新pnpm install
    +5、初始化ts配置文件，让我们的代码有ts提示
        pnpm tsc --init
    +6、修改tsconfig.json配置
    +7、创建pnpm-workspace.yaml文件，写入
        packages:
            - play #存放组件测试运行代码
            - docs #存放组件文档
            - "packages/**" #分包管理
    +8、进入到packages中的各个文件执行pnpm init初始化一个package.json文件
    +9、自己的工作空间中可能存在相互依赖的情况，所以要将它们安装到根目录下
        退出到根目录，执行pnpm install @lh/components -w命令，有多少个分包
        分包执行各分包
        执行完后查看根目录的package.json配置文件依赖是否装上
        "dependencies": {
            "@lh/components": "workspace:*",
            "@lh/theme-chalk": "workspace:*",
            "@lh/utils": "workspace:*",
            "typescript": "^5.3.3",
            "vue": "^3.3.11"
        }
        到此分包管理已初步完成。
