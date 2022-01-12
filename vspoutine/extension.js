// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Awesome, vspoutine has been activated. Use `Order a Poutine` from the command pallette to launch. ');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.orderPoutine', function () {
		// The code you place here will be executed every time your command is executed
        let config = vscode.workspace.getConfiguration('vspoutine');
        let customPoutine = config.get("customPoutine");

        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(customPoutine));
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
