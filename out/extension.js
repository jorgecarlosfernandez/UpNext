"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const htmlString = require("./Boilerplates/htmlBoilerplate");
const messageString = require("./Boilerplates/message");
const pkgjsonString = require("./Boilerplates/pkgjsonBoilerplate");
const constructors_1 = require("./constructors");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Your extension "UpNext" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('upnext.createBoilerplate', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('UpNext Running!');
        const myPath = vscode.workspace.workspaceFolders[0].uri.fsPath;
        constructors_1.makeFile(myPath, 'package.json', pkgjsonString);
        constructors_1.makeFolder(myPath, 'test');
        constructors_1.makeFile(`${myPath}\\test`, 'htmlBoilerplate.html', htmlString);
        constructors_1.makeFolder(`${myPath}\\test`, 'test-ception');
        constructors_1.makeFile(`${myPath}\\test\\test-ception`, 'message.js', messageString);
    });
    // if context matches command, activate disposable function
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map