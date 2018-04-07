import * as _ from 'lodash'
import { Epic } from 'redux-observable'

import { ToastEpic } from './common/toast'
import { unlockModalEpics } from './common/unlock-modal'
import { HeaderEpics } from './header'
import { OverviewEpic } from './overview'
import { paymentsEpics } from './payments'
import { TransactionsEpic } from './transactions'

const epics: Array<Epic<any, any, any, any>> = _.reduce(
  [HeaderEpics, OverviewEpic, paymentsEpics, TransactionsEpic, ToastEpic, unlockModalEpics],
  (result: any, epic: any) => _.concat(result, _.values(epic)),
  [],
)

export default epics
