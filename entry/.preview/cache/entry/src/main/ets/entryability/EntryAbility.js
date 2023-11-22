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
import UIAbility from '@ohos:app.ability.UIAbility';
export default class EntryAbility extends UIAbility {
    onCreate(arg) {
        console.log('Home-Create', arg);
    }
    onWindowStageCreate(arg) {
        console.log('Home-WindowStageCreate', arg);
    }
    onForeground() {
        console.log('Home-Foreground');
    }
    onBackground() {
        console.log('Home-Background');
    }
    onWindowStageDestroy() {
        console.log('Home-WindowStageDestroy');
    }
    onDestroy() {
        console.log('Home-Destroy');
    }
}
//# sourceMappingURL=EntryAbility.js.map