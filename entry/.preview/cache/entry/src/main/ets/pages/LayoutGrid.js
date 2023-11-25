import { HeaderComponent } from '@bundle:io.fireChat.h5/entry/ets/view/HeaderComponent';
class LayoutGrid extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__numbers = new ObservedPropertyObjectPU(new Array(100).fill('').map((item, index) => index), this, "numbers");
        this.scroller = new Scroller();
        this.__index = new ObservedPropertySimplePU(0, this, "index");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.numbers !== undefined) {
            this.numbers = params.numbers;
        }
        if (params.scroller !== undefined) {
            this.scroller = params.scroller;
        }
        if (params.index !== undefined) {
            this.index = params.index;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__numbers.purgeDependencyOnElmtId(rmElmtId);
        this.__index.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__numbers.aboutToBeDeleted();
        this.__index.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get numbers() {
        return this.__numbers.get();
    }
    set numbers(newValue) {
        this.__numbers.set(newValue);
    }
    get index() {
        return this.__index.get();
    }
    set index(newValue) {
        this.__index.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/LayoutGrid.ets(10:7)");
            Column.width('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            __Common__.create();
            __Common__.position({ x: 0, y: 0 });
            __Common__.zIndex(100);
            __Common__.padding({ left: 10, right: 10 });
            if (!isInitialRender) {
                __Common__.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new HeaderComponent(this, { title: `Layout Grid-${this.index}` }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: `Layout Grid-${this.index}`
                    });
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        __Common__.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Grid.create(this.scroller);
            Grid.debugLine("pages/LayoutGrid.ets(15:9)");
            Grid.padding({ top: 70, right: 10, bottom: 10, left: 10 });
            Grid.columnsTemplate("1fr 1fr 1fr 1fr 1fr");
            Grid.columnsGap(5);
            Grid.rowsGap(10);
            Grid.supportAnimation(true);
            Grid.scrollBarWidth(5);
            Grid.scrollBarColor('yellow');
            Grid.cachedCount(2);
            Grid.editMode(true);
            Grid.onScrollIndex((first) => {
                console.info(first.toString());
                this.index = first;
            });
            if (!isInitialRender) {
                Grid.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const num = _item;
                {
                    const isLazyCreate = true && (Grid.willUseProxy() === true);
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        GridItem.create(deepRenderFunction, isLazyCreate);
                        GridItem.height(100);
                        GridItem.align(Alignment.Center);
                        GridItem.border({ width: 1, color: 'red', style: BorderStyle.Solid });
                        GridItem.debugLine("pages/LayoutGrid.ets(17:13)");
                        if (!isInitialRender) {
                            GridItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const observedShallowRender = () => {
                        this.observeComponentCreation(itemCreation);
                        GridItem.pop();
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation(itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(`${num}`);
                            Text.debugLine("pages/LayoutGrid.ets(18:15)");
                            Text.fontSize(16);
                            Text.fontColor(Color.Red);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        GridItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(`${num}`);
                            Text.debugLine("pages/LayoutGrid.ets(18:15)");
                            Text.fontSize(16);
                            Text.fontColor(Color.Red);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        GridItem.pop();
                    };
                    if (isLazyCreate) {
                        observedShallowRender();
                    }
                    else {
                        observedDeepRender();
                    }
                }
            };
            this.forEachUpdateFunction(elmtId, this.numbers, forEachItemGenFunction, num => num, false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Grid.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new LayoutGrid(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=LayoutGrid.js.map