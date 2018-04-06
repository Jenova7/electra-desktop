import { WalletBalance } from 'electra-js'
import { Store } from 'redux'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import ElectraJsMiddleware from '../../middlewares/ElectraJs'
import * as OverviewActionNames from './action-names'
import { GlobalBalanceObservable, GlobalBalanceOtherObservable, OverviewActions } from './types'

const BTC: 'BTC' = 'BTC'
const ONE_SECOND: number = 1000

export function getGlobalBalance(action$: ActionsObservable<OverviewActions>, store: Store<any>):
  Observable<GlobalBalanceObservable> {
    return action$.ofType(OverviewActionNames.GET_GLOBAL_BALANCE)
      .map(async () => ElectraJsMiddleware.wallet.getBalance())
      .debounceTime(ONE_SECOND)
      .switchMap((promise: Promise<WalletBalance>) =>
      Observable
      .fromPromise(promise)
      .map((balance: WalletBalance) => ({
        payload: {
          confirmed: balance.confirmed,
          unconfirmed: balance.unconfirmed
        },
        type: OverviewActionNames.GET_GLOBAL_BALANCE_SUCCESS
      }))
      .catch((error: Error) => {
        // tslint:disable-next-line:no-console
        console.log(error.message)

        return Observable.of({
        type: OverviewActionNames.GET_GLOBAL_BALANCE
      })
    })
  )
}

export function getCurrentPriceUSD(action$: ActionsObservable<OverviewActions>, store: Store<any>):
  Observable<GlobalBalanceOtherObservable> {
    return action$.ofType(OverviewActionNames.GET_CURRENT_PRICE_USD)
    .map(async () => ElectraJsMiddleware.webServices.getCurrentPriceInUSD())
    .mergeMap((promise: Promise<number>) =>
      Observable
        .fromPromise(promise)
        .map((currentPriceUSD: number) => ({
          payload: currentPriceUSD,
          type: OverviewActionNames.GET_CURRENT_PRICE_USD_SUCCESS
        }))
        .catch((error: Error) => Observable.of({
          type: OverviewActionNames.GET_CURRENT_PRICE_USD_FAIL
        })
      )
    )
}

export function getCurrentPriceBTC(action$: ActionsObservable<OverviewActions>, store: Store<any>):
  Observable<GlobalBalanceOtherObservable> {
    return action$.ofType(OverviewActionNames.GET_CURRENT_PRICE_BTC)
    .map(async () => ElectraJsMiddleware.webServices.getCurrentPriceInBTC(BTC))
    .mergeMap((promise: Promise<number>) =>
      Observable
        .fromPromise(promise)
        .map((currentPriceBTC: number) => ({
          payload: currentPriceBTC,
          type: OverviewActionNames.GET_CURRENT_PRICE_BTC_SUCCESS
        }))
        .catch((error: Error) => Observable.of({
          type: OverviewActionNames.GET_CURRENT_PRICE_BTC_FAIL
        })
      )
    )
}
