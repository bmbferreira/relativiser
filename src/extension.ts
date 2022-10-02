// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import clipboard from 'clipboardy';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "relativiser" is now active!');

	context.subscriptions.push(vscode.commands.registerCommand('relativiser.getPath', (_: vscode.Uri, uris?: [vscode.Uri, vscode.Uri]) => {
		if (uris?.length !== 2) {
			vscode.window.showErrorMessage(
			  'This command can run only by selecting 2 files'
			);
			return;
		  }
		let relativePath = path.relative(path.dirname(uris[0].fsPath), uris[1].fsPath)
		vscode.env.clipboard.writeText(relativePath);
		vscode.window.showInformationMessage(`Path ${relativePath} copied to clipboard!`);
    }));

}

// this method is called when your extension is deactivated
export function deactivate() {}
