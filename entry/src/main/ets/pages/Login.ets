import router from '@ohos.router';
@Entry
@Component
struct Login {
  @State message: string = '登陆'

  build() {
    Column() {
      Row(){
        Image($r("app.media.app_icon"))
          .width(80)
          .height(80)


        Image('https://cn.vitejs.dev/logo.svg')
          .width(80)
          .height(80)
          .margin({left:20})
      }

      Text(this.message)
        .fontColor(Color.Black)
        .fontSize(20)
        .fontWeight(FontWeight.Bold)
        .margin({top:20})

      TextInput({placeholder:"请输入手机号"})
        .maxLength(11)
        .type(InputType.Number)
        .margin({top:20})
        .borderRadius(0)
        .borderWidth({bottom:1})
        .borderStyle(BorderStyle.Solid)
        .borderColor('#ccc')
        .backgroundColor(Color.Transparent)
        .onChange((value)=>{
          console.log('TextInput：账号',value)
        })

      TextInput({placeholder:"请输入密码"})
        .maxLength(20)
        .type(InputType.Password)
        .margin({top:20})
        .borderRadius(0)
        .borderWidth({bottom:1})
        .borderStyle(BorderStyle.Solid)
        .borderColor(Color.Grey)
        .backgroundColor(Color.Transparent)
        .onChange((value)=>{
          console.log('TextInput:密码',value)
        })
      Row(){
        Text("短信验证码登陆")
          .fontSize(14)
          .fontColor(Color.Blue)
        Text('忘记密码')
          .fontSize(14)
          .fontColor(Color.Blue)
      }
      .margin({top:10})
      .width("100%")
      .justifyContent(FlexAlign.SpaceBetween)
      .alignItems(VerticalAlign.Center)


      Button('登陆',{type:ButtonType.Capsule})
        .width(160)
        .margin({top:20})
        .onClick(()=>{
          console.log("button:登陆")
          router.pushUrl({
            url:'pages/ToDoList'
          })
        })
      Text('注册账号')
        .margin({top:20})
        .fontSize(14)
        .fontColor(Color.Grey)
        .onClick(()=>{
          console.log("button:注册账号")
        })
      LoadingProgress()
        .color(Color.Blue)
        .height(60)
        .width(60)
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
    .padding(30)
  }
}