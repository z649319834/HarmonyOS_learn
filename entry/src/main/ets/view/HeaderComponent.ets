import router from '@ohos.router';
@Component
export struct HeaderComponent{
  @Prop title:string
  build(){
    Row(){
      Image($r('app.media.ic_public_back'))
        .width(20)
        .height(20)
        .onClick(()=>{
          router.back()
        })
      if(this.title){
        Text(this.title).fontSize(20)
      }
      Row(){}.width(20).height(24)
    }
    .width('100%')
    .height(60)
    .backgroundColor(Color.White)
    .justifyContent(FlexAlign.SpaceBetween)
    .alignItems(VerticalAlign.Center)

  }

}