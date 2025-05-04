import * as vscode from 'vscode';
import * as path from 'path'
import { exec } from 'child_process';
import configMgr from '../helper/configMgr'
import { DEFAULT_GROUP } from '../enum'
import { getSingleRootPath } from '../helper/util'


class CurrentFavoritesHook {
  private cmdPath: string;

  public constructor() {
    this.resolvePath();
  }

  public async run(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.cmdPath) {
        resolve()
        return
      }

      const cwd = path.resolve(getSingleRootPath())
      const favoriteRcFile = path.resolve(getSingleRootPath(), '.vscfavoriterc')
      const currentGroup = (configMgr.get('currentGroup') as string) || DEFAULT_GROUP
      let cmdPath = this.cmdPath
      if (!path.isAbsolute(cmdPath)) {
        cmdPath = path.resolve(cwd, this.cmdPath)
      }
      const cmd = `${cmdPath} ${favoriteRcFile} ${currentGroup}`
      exec(cmd, { cwd: cwd }, (error, stdout, stderr) => {
        if (error) {
          vscode.window.showErrorMessage(`Error: ${error.message}`)
          reject()
          return
        }
        if (stderr) {
          vscode.window.showWarningMessage(`Stderr: ${stderr}`)
          reject()
          return
        }
        resolve()
      })
    })
  }

  public resolvePath(): void {
    this.cmdPath = vscode.workspace.getConfiguration('favorites').get<string>('currentFavoritesHookPath');
  }
}

export default new CurrentFavoritesHook()
