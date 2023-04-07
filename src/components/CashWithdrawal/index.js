/* eslint-disable import/no-named-as-default */
/* eslint-disable object-shorthand */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import {Component} from 'react'

// eslint-disable-next-line import/no-named-as-default-member
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000, denominationsList: denominationsList}

  deductValue = id => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.state

    return (
      <div className="app-container">
        <div className="bg-container">
          <div className="profile">
            <button type="button" className="button">
              S
            </button>
            <h1 className="heading">Sarah Williams</h1>
          </div>
          <div className="balance">
            <p className="heading1">Your Balance</p>
            <div className="amount">
              <p className="heading2">{amount}</p>
              <p1 className="paragraph">In Rupees</p1>
              <p2 className="heading">Withdraw</p2>
              <p3 className="paragraph">CHOOSE SUM IN RUPEES</p3>
            </div>
          </div>
          <ul>
            {denominationsList.map(each => (
              <DenominationItem denominationItem={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
