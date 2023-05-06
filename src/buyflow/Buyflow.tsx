import React from 'react'
import AgeStep from './AgeStep'
import EmailStep from './EmailStep'
import SummaryStep from './SummaryStep'
import NameStep from './NameStep'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { BuyFlowStateProvider } from '../context/BuyFlowContext'

interface BuyflowProps {
  productId: ProductIds
}

export enum ProductIds {
  devIns = 'dev_ins',
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const { path } = useRouteMatch()

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>

      <BuyFlowStateProvider>
        <Switch>
          <Route exact path={path}>
            <EmailStep path={path} />
          </Route>
          <Route path={`${path}/age`}>
            <AgeStep path={path} />
          </Route>
          <Route path={`${path}/fullname`}>
            <NameStep path={path} />
          </Route>
          <Route path={`${path}/summary`}>
            <SummaryStep />
          </Route>
        </Switch>
      </BuyFlowStateProvider>
    </>
  )
}

export default Buyflow
