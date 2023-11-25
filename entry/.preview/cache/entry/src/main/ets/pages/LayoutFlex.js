import { HeaderComponent } from '@bundle:io.fireChat.h5/entry/ets/view/HeaderComponent';
class LayoutFlex extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__switchRow = new ObservedPropertySimplePU(false, this, "switchRow");
        this.__directionType = new ObservedPropertySimplePU('Row', this, "directionType");
        this.__directionTypeList = new ObservedPropertyObjectPU(["Row", "RowReverse", "Column", "ColumnReverse"], this, "directionTypeList");
        this.__justifyContentType = new ObservedPropertySimplePU("Start", this, "justifyContentType");
        this.__justifyContentTypeList = new ObservedPropertyObjectPU(["Start", "Center", "End", "SpaceBetween", "SpaceAround", "SpaceEvenly"], this, "justifyContentTypeList");
        this.__alignItemsType = new ObservedPropertySimplePU('Auto', this, "alignItemsType");
        this.__alignItemsTypeList = new ObservedPropertyObjectPU(["Auto", "Start", "Center", "End", "Stretch", "Baseline"], this, "alignItemsTypeList");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.switchRow !== undefined) {
            this.switchRow = params.switchRow;
        }
        if (params.directionType !== undefined) {
            this.directionType = params.directionType;
        }
        if (params.directionTypeList !== undefined) {
            this.directionTypeList = params.directionTypeList;
        }
        if (params.justifyContentType !== undefined) {
            this.justifyContentType = params.justifyContentType;
        }
        if (params.justifyContentTypeList !== undefined) {
            this.justifyContentTypeList = params.justifyContentTypeList;
        }
        if (params.alignItemsType !== undefined) {
            this.alignItemsType = params.alignItemsType;
        }
        if (params.alignItemsTypeList !== undefined) {
            this.alignItemsTypeList = params.alignItemsTypeList;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__switchRow.purgeDependencyOnElmtId(rmElmtId);
        this.__directionType.purgeDependencyOnElmtId(rmElmtId);
        this.__directionTypeList.purgeDependencyOnElmtId(rmElmtId);
        this.__justifyContentType.purgeDependencyOnElmtId(rmElmtId);
        this.__justifyContentTypeList.purgeDependencyOnElmtId(rmElmtId);
        this.__alignItemsType.purgeDependencyOnElmtId(rmElmtId);
        this.__alignItemsTypeList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__switchRow.aboutToBeDeleted();
        this.__directionType.aboutToBeDeleted();
        this.__directionTypeList.aboutToBeDeleted();
        this.__justifyContentType.aboutToBeDeleted();
        this.__justifyContentTypeList.aboutToBeDeleted();
        this.__alignItemsType.aboutToBeDeleted();
        this.__alignItemsTypeList.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get switchRow() {
        return this.__switchRow.get();
    }
    set switchRow(newValue) {
        this.__switchRow.set(newValue);
    }
    get directionType() {
        return this.__directionType.get();
    }
    set directionType(newValue) {
        this.__directionType.set(newValue);
    }
    get directionTypeList() {
        return this.__directionTypeList.get();
    }
    set directionTypeList(newValue) {
        this.__directionTypeList.set(newValue);
    }
    get justifyContentType() {
        return this.__justifyContentType.get();
    }
    set justifyContentType(newValue) {
        this.__justifyContentType.set(newValue);
    }
    get justifyContentTypeList() {
        return this.__justifyContentTypeList.get();
    }
    set justifyContentTypeList(newValue) {
        this.__justifyContentTypeList.set(newValue);
    }
    get alignItemsType() {
        return this.__alignItemsType.get();
    }
    set alignItemsType(newValue) {
        this.__alignItemsType.set(newValue);
    }
    get alignItemsTypeList() {
        return this.__alignItemsTypeList.get();
    }
    set alignItemsTypeList(newValue) {
        this.__alignItemsTypeList.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/LayoutFlex.ets(14:5)");
            Column.padding(20);
            Column.width('100%');
            Column.constraintSize({ maxHeight: "100%" });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new HeaderComponent(this, { title: 'Layout Flex' }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: 'Layout Flex'
                    });
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("设置：direction");
            Text.debugLine("pages/LayoutFlex.ets(16:7)");
            Text.width('100%');
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Flex.create({ direction: FlexDirection.Row, wrap: FlexWrap.Wrap });
            Flex.debugLine("pages/LayoutFlex.ets(17:7)");
            if (!isInitialRender) {
                Flex.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const type = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Row.create();
                    Row.debugLine("pages/LayoutFlex.ets(19:11)");
                    if (!isInitialRender) {
                        Row.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Radio.create({ value: type, group: 'directionGroup' });
                    Radio.debugLine("pages/LayoutFlex.ets(20:13)");
                    Radio.checked(this.directionType === type);
                    Radio.height(20);
                    Radio.width(20);
                    Radio.onChange((isChecked) => {
                        this.directionType = type;
                    });
                    if (!isInitialRender) {
                        Radio.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create(type);
                    Text.debugLine("pages/LayoutFlex.ets(27:13)");
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, this.directionTypeList, forEachItemGenFunction, type => type, false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Flex.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("设置：justifyContent");
            Text.debugLine("pages/LayoutFlex.ets(32:7)");
            Text.width('100%');
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Flex.create({ direction: FlexDirection.Row, wrap: FlexWrap.Wrap });
            Flex.debugLine("pages/LayoutFlex.ets(33:7)");
            if (!isInitialRender) {
                Flex.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const type = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Row.create();
                    Row.debugLine("pages/LayoutFlex.ets(35:11)");
                    if (!isInitialRender) {
                        Row.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Radio.create({ value: type, group: 'justifyContentGroup' });
                    Radio.debugLine("pages/LayoutFlex.ets(36:13)");
                    Radio.checked(this.justifyContentType === type);
                    Radio.height(20);
                    Radio.width(20);
                    Radio.onChange((isChecked) => {
                        this.justifyContentType = type;
                    });
                    if (!isInitialRender) {
                        Radio.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create(type);
                    Text.debugLine("pages/LayoutFlex.ets(43:13)");
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, this.justifyContentTypeList, forEachItemGenFunction, type => type, false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Flex.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("设置：alignItems");
            Text.debugLine("pages/LayoutFlex.ets(48:7)");
            Text.width('100%');
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Flex.create({ direction: FlexDirection.Row, wrap: FlexWrap.Wrap });
            Flex.debugLine("pages/LayoutFlex.ets(49:7)");
            if (!isInitialRender) {
                Flex.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const type = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Row.create();
                    Row.debugLine("pages/LayoutFlex.ets(51:11)");
                    if (!isInitialRender) {
                        Row.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Radio.create({ value: type, group: 'alignItemsGroup' });
                    Radio.debugLine("pages/LayoutFlex.ets(52:13)");
                    Radio.checked(this.alignItemsType === type);
                    Radio.height(20);
                    Radio.width(20);
                    Radio.onChange((isChecked) => {
                        this.alignItemsType = type;
                    });
                    if (!isInitialRender) {
                        Radio.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create(type);
                    Text.debugLine("pages/LayoutFlex.ets(59:13)");
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, this.alignItemsTypeList, forEachItemGenFunction, type => type, false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Flex.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Flex.create({ direction: FlexDirection[this.directionType], justifyContent: FlexAlign[this.justifyContentType], alignItems: ItemAlign[this.alignItemsType] });
            Flex.debugLine("pages/LayoutFlex.ets(64:7)");
            if (!isInitialRender) {
                Flex.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('1');
            Text.debugLine("pages/LayoutFlex.ets(65:9)");
            Text.width('20%');
            Text.height(20);
            Text.backgroundColor(0xF5DEB3);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('2');
            Text.debugLine("pages/LayoutFlex.ets(66:9)");
            Text.width('20%');
            Text.height(30);
            Text.backgroundColor(0xD2B48C);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('3');
            Text.debugLine("pages/LayoutFlex.ets(67:9)");
            Text.width('20%');
            Text.height(40);
            Text.backgroundColor(0xF5DEB3);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('4');
            Text.debugLine("pages/LayoutFlex.ets(68:9)");
            Text.width('20%');
            Text.height(50);
            Text.backgroundColor(0xD2B48C);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Flex.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new LayoutFlex(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=LayoutFlex.js.map