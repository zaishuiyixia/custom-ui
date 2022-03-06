//TypeScript只能识别.ts结尾的文件，所以需要声明文件对其他引入的文件做兼容，告诉TS应该如何理解引入的其他类型的文件
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}