import router from "@ohos.router";

@Entry
@Component
struct Home {
  @State message: string = '首页'

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        Blank()
        Button("Next")
          .onClick(()=>{
            router.pushUrl({
              url:"pages/RankPage",
              params:{
                name:'zcz',
                age:"32"
              }
            },router.RouterMode.Single)
          })
      }
      .width('100%')
    }
    .height('100%')
  }

  onPageShow(){
    console.log("onPageShow:页面显示触发")
  }

}