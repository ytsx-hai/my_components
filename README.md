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
        退出到根目录，执行pnpm install @lh-vui/components -w命令，有多少个分包
        分包执行各分包
        执行完后查看根目录的package.json配置文件依赖是否装上
        "dependencies": {
            "@lh-vui/components": "workspace:*",
            "@lh-vui/theme-chalk": "workspace:*",
            "@lh-vui/utils": "workspace:*",
            "typescript": "^5.3.3",
            "vue": "^3.3.11"
        }
        到此分包管理已初步完成。

## 创建组件执行的 vue 环境目录

    pnpm create vite play --template vue-ts

## 安装给组件命名的插件

    pnpm install unplugin-vue-define-options -D

    在vite.config.ts中配置

    import unpluginDefineOptions from "unplugin-vue-define-options/vite"

    export default defineConfig({
        plugins: [vue(), unpluginDefineOptions()],
    })

    给组件起名字
        defineOptions({
            name: "lh-icon"
        })

### 介绍一个常用图标库 https://xicons.org/#/

    pnpm i @vicons/ionicons5

## eslint 校验规则处理

    npx eslint --init

    pnpm i @vue/eslint-config-typescript -D -w
