import { Plugin, App, Component } from "vue";

export type SFCWithinstall<T> = T & Plugin;
export function withInstall<T>(com: T){
    (com as SFCWithinstall<T>).install = function(app: App){
        const { name } = com as {name: string};
        app.component(name,com as Component)
    }
    return com as SFCWithinstall<T>;
}