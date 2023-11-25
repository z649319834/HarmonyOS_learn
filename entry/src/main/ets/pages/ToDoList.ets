import router from '@ohos.router';
import { HeaderComponent } from '../view/HeaderComponent';
@Entry
@Component
struct ToDoList {
  @State list: object[] = [
    {
      name:'Flex',
      url:'pages/LayoutFlex'
    },
    {
      name:'Grid',
      url:'pages/LayoutGrid'
    }
  ]

  build() {
    Column() {
      HeaderComponent({title:"目录"})
      List(){
          ForEach(this.list,(item)=>{
            ListItem(){
              Text(item.name)
                .margin({bottom:20})
                .padding(20)
                .width("100%")
                .height(60)
                .fontSize(20)
                .fontColor(Color.Black)
                .textAlign(TextAlign.Center)
                .lineHeight(20)
                .borderRadius(10)
                .backgroundColor('#ccc')
                .onClick(()=>{
                  router.pushUrl({
                    url:item.url
                  })
                })
            }
          },item=>JSON.stringify(item))
        
      }

    }
    .padding(20)
    .width('100%')
    .height('100%')
  }
}