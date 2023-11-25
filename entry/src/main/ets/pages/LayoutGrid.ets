import { HeaderComponent } from '../view/HeaderComponent';
@Entry
@Component
struct LayoutGrid {
  @State numbers: number[] = new Array(100).fill('').map((item,index)=>index)
  scroller: Scroller = new Scroller()
  @State index:number=0

  build() {
      Column() {
        HeaderComponent({title:`Layout Grid-${this.index}`})
          .position({x:0,y:0})
          .zIndex(100)
          .padding({left:10,right:10})
        Grid(this.scroller){
          ForEach(this.numbers,(num)=>{
            GridItem(){
              Text(`${num}`)
                .fontSize(16)
                .fontColor(Color.Red)
            }
            .height(100)
            .align(Alignment.Center)
            .border({width:1,color:'red',style:BorderStyle.Solid})
          },num=>num)
        }
        .padding({top:70,right:10,bottom:10,left:10})
        .columnsTemplate("1fr 1fr 1fr 1fr 1fr")
        // .rowsTemplate('1fr 1fr 1fr 1fr 1fr')
        .columnsGap(5)
        .rowsGap(10)
        .supportAnimation(true)
        .scrollBarWidth(5)
        .scrollBarColor('yellow')
        .cachedCount(2)
        .editMode(true)
        .onScrollIndex((first: number) => {
          console.info(first.toString())
          this.index=first
        })
      }
      .width('100%')
  }
}