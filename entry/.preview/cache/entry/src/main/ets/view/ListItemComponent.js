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
import { FontSize, FontWeight, ItemStyle, WEIGHT } from '@bundle:io.fireChat.h5/entry/ets/common/constants/Constants';
export class ListItemComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.index = undefined;
        this.name = undefined;
        this.__vote = new SynchedPropertySimpleOneWayPU(params.vote, this, "vote");
        this.__isSwitchDataSource = new SynchedPropertySimpleOneWayPU(params.isSwitchDataSource, this, "isSwitchDataSource");
        this.__isChange = new ObservedPropertySimplePU(false, this, "isChange");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.index !== undefined) {
            this.index = params.index;
        }
        if (params.name !== undefined) {
            this.name = params.name;
        }
        if (params.vote !== undefined) {
            this.__vote.set(params.vote);
        }
        else {
            this.__vote.set('');
        }
        if (params.isSwitchDataSource !== undefined) {
            this.__isSwitchDataSource.set(params.isSwitchDataSource);
        }
        else {
            this.__isSwitchDataSource.set(false);
        }
        if (params.isChange !== undefined) {
            this.isChange = params.isChange;
        }
    }
    updateStateVars(params) {
        this.__vote.reset(params.vote);
        this.__isSwitchDataSource.reset(params.isSwitchDataSource);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__vote.purgeDependencyOnElmtId(rmElmtId);
        this.__isSwitchDataSource.purgeDependencyOnElmtId(rmElmtId);
        this.__isChange.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__vote.aboutToBeDeleted();
        this.__isSwitchDataSource.aboutToBeDeleted();
        this.__isChange.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get vote() {
        return this.__vote.get();
    }
    set vote(newValue) {
        this.__vote.set(newValue);
    }
    get isSwitchDataSource() {
        return this.__isSwitchDataSource.get();
    }
    set isSwitchDataSource(newValue) {
        this.__isSwitchDataSource.set(newValue);
    }
    get isChange() {
        return this.__isChange.get();
    }
    set isChange(newValue) {
        this.__isChange.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("view/ListItemComponent.ets(28:5)");
            Row.height(ItemStyle.BAR_HEIGHT);
            Row.width(WEIGHT);
            Row.onClick(() => {
                this.isSwitchDataSource = !this.isSwitchDataSource;
                this.isChange = !this.isChange;
            });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("view/ListItemComponent.ets(29:7)");
            Column.width(ItemStyle.LAYOUT_WEIGHT_LEFT);
            Column.alignItems(HorizontalAlign.Start);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.isRenderCircleText()) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        If.create();
                        if (this.index !== undefined) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.CircleText.bind(this)(this.index);
                            });
                        }
                        else {
                            If.branchId(1);
                        }
                        if (!isInitialRender) {
                            If.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    If.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        var _a;
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Text.create((_a = this.index) === null || _a === void 0 ? void 0 : _a.toString());
                        Text.debugLine("view/ListItemComponent.ets(35:11)");
                        Text.lineHeight(ItemStyle.TEXT_LAYOUT_SIZE);
                        Text.textAlign(TextAlign.Center);
                        Text.width(ItemStyle.TEXT_LAYOUT_SIZE);
                        Text.fontWeight(FontWeight.BOLD);
                        Text.fontSize(FontSize.SMALL);
                        if (!isInitialRender) {
                            Text.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Text.pop();
                });
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.name);
            Text.debugLine("view/ListItemComponent.ets(46:7)");
            Text.width(ItemStyle.LAYOUT_WEIGHT_CENTER);
            Text.fontWeight(FontWeight.BOLDER);
            Text.fontSize(FontSize.MIDDLE);
            Text.fontColor(this.isChange ? ItemStyle.COLOR_BLUE : ItemStyle.COLOR_BLACK);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.vote);
            Text.debugLine("view/ListItemComponent.ets(51:7)");
            Text.width(ItemStyle.LAYOUT_WEIGHT_RIGHT);
            Text.fontWeight(FontWeight.BOLD);
            Text.fontSize(FontSize.SMALL);
            Text.fontColor(this.isChange ? ItemStyle.COLOR_BLUE : ItemStyle.COLOR_BLACK);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
    }
    CircleText(index, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("view/ListItemComponent.ets(66:5)");
            Row.justifyContent(FlexAlign.Center);
            Row.borderRadius(ItemStyle.CIRCLE_TEXT_BORDER_RADIUS);
            Row.size({ width: ItemStyle.CIRCLE_TEXT_SIZE,
                height: ItemStyle.CIRCLE_TEXT_SIZE });
            Row.backgroundColor({ "id": 16777243, "type": 10001, params: [], "bundleName": "io.fireChat.h5", "moduleName": "entry" });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            var _a;
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create((_a = this.index) === null || _a === void 0 ? void 0 : _a.toString());
            Text.debugLine("view/ListItemComponent.ets(67:7)");
            Text.fontWeight(FontWeight.BOLD);
            Text.fontSize(FontSize.SMALL);
            Text.fontColor(Color.White);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
    }
    isRenderCircleText() {
        // Just render the element before the fourth in the list.
        return this.index === 1 || this.index === 2 || this.index === 3;
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=ListItemComponent.js.map