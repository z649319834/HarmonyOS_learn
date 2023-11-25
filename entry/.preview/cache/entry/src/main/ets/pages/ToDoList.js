import router from '@ohos:router';
import { HeaderComponent } from '@bundle:io.fireChat.h5/entry/ets/view/HeaderComponent';
class ToDoList extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__list = new ObservedPropertyObjectPU([
            {
                name: 'Flex',
                url: 'pages/LayoutFlex'
            },
            {
                name: 'Grid',
                url: 'pages/LayoutGrid'
            }
        ], this, "list");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.list !== undefined) {
            this.list = params.list;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__list.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__list.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get list() {
        return this.__list.get();
    }
    set list(newValue) {
        this.__list.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/ToDoList.ets(18:5)");
            Column.padding(20);
            Column.width('100%');
            Column.height('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new HeaderComponent(this, { title: "目录" }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: "目录"
                    });
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create();
            List.debugLine("pages/ToDoList.ets(20:7)");
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const isLazyCreate = true;
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, isLazyCreate);
                        ListItem.debugLine("pages/ToDoList.ets(22:13)");
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const observedShallowRender = () => {
                        this.observeComponentCreation(itemCreation);
                        ListItem.pop();
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation(itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(item.name);
                            Text.debugLine("pages/ToDoList.ets(23:15)");
                            Text.margin({ bottom: 20 });
                            Text.padding(20);
                            Text.width("100%");
                            Text.height(60);
                            Text.fontSize(20);
                            Text.fontColor(Color.Black);
                            Text.textAlign(TextAlign.Center);
                            Text.lineHeight(20);
                            Text.borderRadius(10);
                            Text.backgroundColor('#ccc');
                            Text.onClick(() => {
                                router.pushUrl({
                                    url: item.url
                                });
                            });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(item.name);
                            Text.debugLine("pages/ToDoList.ets(23:15)");
                            Text.margin({ bottom: 20 });
                            Text.padding(20);
                            Text.width("100%");
                            Text.height(60);
                            Text.fontSize(20);
                            Text.fontColor(Color.Black);
                            Text.textAlign(TextAlign.Center);
                            Text.lineHeight(20);
                            Text.borderRadius(10);
                            Text.backgroundColor('#ccc');
                            Text.onClick(() => {
                                router.pushUrl({
                                    url: item.url
                                });
                            });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        ListItem.pop();
                    };
                    if (isLazyCreate) {
                        observedShallowRender();
                    }
                    else {
                        observedDeepRender();
                    }
                }
            };
            this.forEachUpdateFunction(elmtId, this.list, forEachItemGenFunction, item => JSON.stringify(item), false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        List.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new ToDoList(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=ToDoList.js.map