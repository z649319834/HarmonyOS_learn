/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import prompt from '@ohos:promptAction';
import { RankViewModel } from '@bundle:io.fireChat.h5/entry/ets/viewmodel/RankViewModel';
import { ListHeaderComponent } from '@bundle:io.fireChat.h5/entry/ets/view/ListHeaderComponent';
import { TitleComponent } from '@bundle:io.fireChat.h5/entry/ets/view/TitleComponent';
import { ListItemComponent } from '@bundle:io.fireChat.h5/entry/ets/view/ListItemComponent';
import { APP_EXIT_INTERVAL, Style, TIME, TITLE, WEIGHT } from '@bundle:io.fireChat.h5/entry/ets/common/constants/Constants';
import router from '@ohos:router';
let rankModel = new RankViewModel();
class RankPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__dataSource1 = new ObservedPropertyObjectPU([], this, "dataSource1");
        this.__dataSource2 = new ObservedPropertyObjectPU([], this, "dataSource2");
        this.__isSwitchDataSource = new ObservedPropertySimplePU(true, this, "isSwitchDataSource");
        this.__params = new ObservedPropertyObjectPU(router.getParams()
        // It will record the time of clicking back button of system navigation.
        , this, "params");
        this.clickBackTimeRecord = 0;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.dataSource1 !== undefined) {
            this.dataSource1 = params.dataSource1;
        }
        if (params.dataSource2 !== undefined) {
            this.dataSource2 = params.dataSource2;
        }
        if (params.isSwitchDataSource !== undefined) {
            this.isSwitchDataSource = params.isSwitchDataSource;
        }
        if (params.params !== undefined) {
            this.params = params.params;
        }
        if (params.clickBackTimeRecord !== undefined) {
            this.clickBackTimeRecord = params.clickBackTimeRecord;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__dataSource1.purgeDependencyOnElmtId(rmElmtId);
        this.__dataSource2.purgeDependencyOnElmtId(rmElmtId);
        this.__isSwitchDataSource.purgeDependencyOnElmtId(rmElmtId);
        this.__params.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__dataSource1.aboutToBeDeleted();
        this.__dataSource2.aboutToBeDeleted();
        this.__isSwitchDataSource.aboutToBeDeleted();
        this.__params.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get dataSource1() {
        return this.__dataSource1.get();
    }
    set dataSource1(newValue) {
        this.__dataSource1.set(newValue);
    }
    get dataSource2() {
        return this.__dataSource2.get();
    }
    set dataSource2(newValue) {
        this.__dataSource2.set(newValue);
    }
    get isSwitchDataSource() {
        return this.__isSwitchDataSource.get();
    }
    set isSwitchDataSource(newValue) {
        this.__isSwitchDataSource.set(newValue);
    }
    get params() {
        return this.__params.get();
    }
    set params(newValue) {
        this.__params.set(newValue);
    }
    aboutToAppear() {
        this.dataSource1 = rankModel.loadRankDataSource1();
        this.dataSource2 = rankModel.loadRankDataSource2();
    }
    onBackPress() {
        if (this.isShowToast()) {
            prompt.showToast({
                message: { "id": 16777237, "type": 10003, params: [], "bundleName": "io.fireChat.h5", "moduleName": "entry" },
                duration: TIME
            });
            this.clickBackTimeRecord = new Date().getTime();
            return true;
        }
        return false;
    }
    isShowToast() {
        return new Date().getTime() - this.clickBackTimeRecord > APP_EXIT_INTERVAL;
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/RankPage.ets(66:5)");
            Column.backgroundColor({ "id": 16777242, "type": 10001, params: [], "bundleName": "io.fireChat.h5", "moduleName": "entry" });
            Column.height(WEIGHT);
            Column.width(WEIGHT);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new 
                    // Title component in the top.
                    TitleComponent(this, { isRefreshData: this.__isSwitchDataSource, title: TITLE }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/RankPage.ets(70:7)");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            var _a;
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create((_a = this.params) === null || _a === void 0 ? void 0 : _a.name);
            Text.debugLine("pages/RankPage.ets(71:9)");
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            var _a;
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create((_a = this.params) === null || _a === void 0 ? void 0 : _a.age);
            Text.debugLine("pages/RankPage.ets(72:9)");
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            __Common__.create();
            __Common__.margin({
                top: Style.HEADER_MARGIN_TOP,
                bottom: Style.HEADER_MARGIN_BOTTOM
            });
            if (!isInitialRender) {
                __Common__.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new 
                    // The head style of List component.
                    ListHeaderComponent(this, {
                        paddingValue: {
                            left: Style.RANK_PADDING,
                            right: Style.RANK_PADDING
                        },
                        widthValue: Style.CONTENT_WIDTH
                    }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        __Common__.pop();
        // The style of List component.
        this.RankList.bind(this)(Style.CONTENT_WIDTH);
        Column.pop();
    }
    RankList(widthValue, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/RankPage.ets(97:5)");
            Column.padding({
                left: Style.RANK_PADDING,
                right: Style.RANK_PADDING
            });
            Column.borderRadius(Style.BORDER_RADIUS);
            Column.width(widthValue);
            Column.alignItems(HorizontalAlign.Center);
            Column.backgroundColor(Color.White);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create();
            List.debugLine("pages/RankPage.ets(98:7)");
            List.width(WEIGHT);
            List.height(Style.LIST_HEIGHT);
            List.divider({ strokeWidth: Style.STROKE_WIDTH });
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const item = _item;
                {
                    const isLazyCreate = true;
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, isLazyCreate);
                        ListItem.debugLine("pages/RankPage.ets(101:13)");
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
                        {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                if (isInitialRender) {
                                    ViewPU.create(new ListItemComponent(this, { index: (Number(index) + 1), name: item.name, vote: item.vote,
                                        isSwitchDataSource: this.isSwitchDataSource
                                    }, undefined, elmtId));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {
                                        vote: item.vote,
                                        isSwitchDataSource: this.isSwitchDataSource
                                    });
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                        }
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                if (isInitialRender) {
                                    ViewPU.create(new ListItemComponent(this, { index: (Number(index) + 1), name: item.name, vote: item.vote,
                                        isSwitchDataSource: this.isSwitchDataSource
                                    }, undefined, elmtId));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {
                                        vote: item.vote,
                                        isSwitchDataSource: this.isSwitchDataSource
                                    });
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                        }
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
            this.forEachUpdateFunction(elmtId, this.isSwitchDataSource ? this.dataSource1 : this.dataSource2, forEachItemGenFunction, (item) => JSON.stringify(item), true, false);
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
loadDocument(new RankPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=RankPage.js.map