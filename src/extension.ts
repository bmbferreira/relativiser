import * as vscode from 'vscode';
import * as path from 'path';

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

export function deactivate() {}
