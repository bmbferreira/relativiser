// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	//const path = require('node:path');

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "relativiser" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	//let disposable = vscode.commands.registerCommand('relativiser.helloWorld', () => {
	//	// The code you place here will be executed every time your command is executed
	//	// Display a message box to the user
	//	vscode.window.showInformationMessage('Hello World from relativiser!');
	//});

	//context.subscriptions.push(disposable);

	context.subscriptions.push(vscode.commands.registerCommand('relativiser.helloWorld', (_: vscode.Uri, uris?: [vscode.Uri, vscode.Uri]) => {
		if (uris?.length !== 2) {
			vscode.window.showErrorMessage(
			  'This command can run only by selecting 2 files'
			);
			return;
		  }
		vscode.window.showInformationMessage(path.relative(path.dirname(uris[0].fsPath), uris[1].fsPath));
    }));

}

// this method is called when your extension is deactivated
export function deactivate() {}
