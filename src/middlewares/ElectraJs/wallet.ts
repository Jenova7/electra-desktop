import {
  WalletAddress,
  WalletDaemonState,
  WalletInfo,
  WalletLockState,
  WalletState,
  WalletTransaction,
  WalletBalance
} from 'electra-js'
import { ipcRenderer } from 'electron'

import { bindEventToAsyncCall, bindEventToSyncCall } from './helpers'

export default class Wallet {
  public get addresses(): WalletAddress[] {
    return JSON.parse(ipcRenderer.sendSync('electraJs:wallet:addresses'))
  }

  public get allAddresses(): WalletAddress[] {
    return JSON.parse(ipcRenderer.sendSync('electraJs:wallet:allAddresses'))
  }

  public get daemonState(): WalletDaemonState {
    return JSON.parse(ipcRenderer.sendSync('electraJs:wallet:daemonState'))
  }

  public get isNew(): boolean {
    return JSON.parse(ipcRenderer.sendSync('electraJs:wallet:isNew'))
  }

  public get lockState(): WalletLockState {
    return JSON.parse(ipcRenderer.sendSync('electraJs:wallet:lockState'))
  }

  public get mnemonic(): string {
    return JSON.parse(ipcRenderer.sendSync('electraJs:wallet:mnemonic'))
  }

  public get randomAddresses(): WalletAddress[] {
    return JSON.parse(ipcRenderer.sendSync('electraJs:wallet:randomAddresses'))
  }

  public get state(): WalletState {
    return JSON.parse(ipcRenderer.sendSync('electraJs:wallet:state'))
  }

  public async startDaemon(): Promise<void> {
    return bindEventToAsyncCall<void>('electraJs:wallet:startDaemon', arguments)
  }

  public async stopDaemon(): Promise<void> {
    return bindEventToAsyncCall<void>('electraJs:wallet:stopDaemon', arguments)
  }

  public export(): string {
    return bindEventToSyncCall<string>('electraJs:wallet:export', arguments)
  }

  public async generate(mnemonic?: string, mnemonicExtension?: string, chainsCount?: number): Promise<void> {
    return bindEventToAsyncCall<void>('electraJs:wallet:generate', arguments)
  }

  public async getBalance(): Promise<WalletBalance> {
    return bindEventToAsyncCall<WalletBalance>('electraJs:wallet:getBalance', arguments)
  }

  public async getInfo(): Promise<WalletInfo> {
    return bindEventToAsyncCall<WalletInfo>('electraJs:wallet:getInfo', arguments)
  }

  public async getTransactions(count: number): Promise<WalletTransaction[]> {
    return bindEventToAsyncCall<WalletTransaction[]>('electraJs:wallet:getTransactions', arguments)
  }

  public async getTransaction(transactionHash: string): Promise<WalletTransaction> {
    return bindEventToAsyncCall<WalletTransaction>('electraJs:wallet:getTransaction', arguments)
  }

  public async import(data: string, passphrase: string): Promise<void> {
    return bindEventToAsyncCall<void>('electraJs:wallet:import', arguments)
  }

  public async lock(passphrase: string): Promise<void> {
    return bindEventToAsyncCall<void>('electraJs:wallet:lock', arguments)
  }

  public async unlock(passphrase: string, forStakingOnly?: boolean): Promise<void> {
    return bindEventToAsyncCall<void>('electraJs:wallet:unlock', arguments)
  }

  public async send(amount: number, to: string): Promise<void> {
    return bindEventToAsyncCall<void>('electraJs:wallet:send', arguments)
  }
}
