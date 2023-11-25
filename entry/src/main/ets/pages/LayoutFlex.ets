import { HeaderComponent } from '../view/HeaderComponent';
@Entry
@Component
struct LayoutFlex {
  @State switchRow:boolean=false
  @State directionType:string='Row'
  @State directionTypeList:string[]=["Row","RowReverse","Column","ColumnReverse"]
  @State justifyContentType:string="Start"
  @State justifyContentTypeList:string[]=["Start","Center","End","SpaceBetween","SpaceAround","SpaceEvenly"]
  @State alignItemsType:string='Auto'
  @State alignItemsTypeList:string[]=["Auto","Start","Center","End","Stretch","Baseline"]

  build() {
    Column() {
      HeaderComponent({ title: 'Layout Flex' })
      Text("设置：direction").width('100%')
      Flex({ direction: FlexDirection.Row, wrap: FlexWrap.Wrap }) {
        ForEach(this.directionTypeList, (type) => {
          Row() {
            Radio({ value: type, group: 'directionGroup' })
              .checked(this.directionType === type)
              .height(20)
              .width(20)
              .onChange((isChecked: boolean) => {
                this.directionType = type
              })
            Text(type)
          }
        }, type => type)
      }

      Text("设置：justifyContent").width('100%')
      Flex({ direction: FlexDirection.Row, wrap: FlexWrap.Wrap }) {
        ForEach(this.justifyContentTypeList, (type) => {
          Row() {
            Radio({ value: type, group: 'justifyContentGroup' })
              .checked(this.justifyContentType === type)
              .height(20)
              .width(20)
              .onChange((isChecked: boolean) => {
                this.justifyContentType = type
              })
            Text(type)
          }
        }, type => type)
      }

      Text("设置：alignItems").width('100%')
      Flex({ direction: FlexDirection.Row, wrap: FlexWrap.Wrap }) {
        ForEach(this.alignItemsTypeList, (type) => {
          Row() {
            Radio({ value: type, group: 'alignItemsGroup' })
              .checked(this.alignItemsType === type)
              .height(20)
              .width(20)
              .onChange((isChecked: boolean) => {
                this.alignItemsType = type
              })
            Text(type)
          }
        }, type => type)
      }

      Flex({ direction: FlexDirection[this.directionType],justifyContent:FlexAlign[this.justifyContentType],alignItems:ItemAlign[this.alignItemsType] }) {
        Text('1').width('20%').height(20).backgroundColor(0xF5DEB3)
        Text('2').width('20%').height(30).backgroundColor(0xD2B48C)
        Text('3').width('20%').height(40).backgroundColor(0xF5DEB3)
        Text('4').width('20%').height(50).backgroundColor(0xD2B48C)
      }
      // Flex({ direction: FlexDirection[this.directionType],justifyContent:FlexAlign[this.justifyContentType],alignItems:ItemAlign[this.alignItemsType] }) {
      //   Text('1').width('20%').height(20).backgroundColor(0xF5DEB3)
      //   Text('2').width('20%').height(30).backgroundColor(0xD2B48C)
      //   Text('3').width('20%').height(40).backgroundColor(0xF5DEB3)
      // }
    }
    .padding(20)
    .width('100%')
    .constraintSize({maxHeight:"100%"})
  }
}