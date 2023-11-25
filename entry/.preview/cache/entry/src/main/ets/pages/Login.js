import router from '@ohos:router';
class Login extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__message = new ObservedPropertySimplePU('登陆', this, "message");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get message() {
        return this.__message.get();
    }
    set message(newValue) {
        this.__message.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/Login.ets(8:5)");
            Column.width('100%');
            Column.height('100%');
            Column.justifyContent(FlexAlign.Center);
            Column.padding(30);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/Login.ets(9:7)");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777217, "type": 20000, params: [], "bundleName": "io.fireChat.h5", "moduleName": "entry" });
            Image.debugLine("pages/Login.ets(10:9)");
            Image.width(80);
            Image.height(80);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create('https://cn.vitejs.dev/logo.svg');
            Image.debugLine("pages/Login.ets(15:9)");
            Image.width(80);
            Image.height(80);
            Image.margin({ left: 20 });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.message);
            Text.debugLine("pages/Login.ets(21:7)");
            Text.fontColor(Color.Black);
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
            Text.margin({ top: 20 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: "请输入手机号" });
            TextInput.debugLine("pages/Login.ets(27:7)");
            TextInput.maxLength(11);
            TextInput.type(InputType.Number);
            TextInput.margin({ top: 20 });
            TextInput.borderRadius(0);
            TextInput.borderWidth({ bottom: 1 });
            TextInput.borderStyle(BorderStyle.Solid);
            TextInput.borderColor('#ccc');
            TextInput.backgroundColor(Color.Transparent);
            TextInput.onChange((value) => {
                console.log('TextInput：账号', value);
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: "请输入密码" });
            TextInput.debugLine("pages/Login.ets(40:7)");
            TextInput.maxLength(20);
            TextInput.type(InputType.Password);
            TextInput.margin({ top: 20 });
            TextInput.borderRadius(0);
            TextInput.borderWidth({ bottom: 1 });
            TextInput.borderStyle(BorderStyle.Solid);
            TextInput.borderColor(Color.Grey);
            TextInput.backgroundColor(Color.Transparent);
            TextInput.onChange((value) => {
                console.log('TextInput:密码', value);
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/Login.ets(52:7)");
            Row.margin({ top: 10 });
            Row.width("100%");
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.alignItems(VerticalAlign.Center);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("短信验证码登陆");
            Text.debugLine("pages/Login.ets(53:9)");
            Text.fontSize(14);
            Text.fontColor(Color.Blue);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('忘记密码');
            Text.debugLine("pages/Login.ets(56:9)");
            Text.fontSize(14);
            Text.fontColor(Color.Blue);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('登陆', { type: ButtonType.Capsule });
            Button.debugLine("pages/Login.ets(66:7)");
            Button.width(160);
            Button.margin({ top: 20 });
            Button.onClick(() => {
                console.log("button:登陆");
                router.pushUrl({
                    url: 'pages/ToDoList'
                });
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('注册账号');
            Text.debugLine("pages/Login.ets(75:7)");
            Text.margin({ top: 20 });
            Text.fontSize(14);
            Text.fontColor(Color.Grey);
            Text.onClick(() => {
                console.log("button:注册账号");
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            LoadingProgress.create();
            LoadingProgress.debugLine("pages/Login.ets(82:7)");
            LoadingProgress.color(Color.Blue);
            LoadingProgress.height(60);
            LoadingProgress.width(60);
            if (!isInitialRender) {
                LoadingProgress.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new Login(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=Login.js.map