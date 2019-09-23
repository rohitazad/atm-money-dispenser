import React, { Component } from 'react';




class MoneyComp extends Component {
  state = {
    amount: '',
  }

  // handles change in form input field
  handleChange = fieldName => event => {
    this.setState({ [fieldName]: event.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.amount);
  }

  render() {
    const { dispensedNotes } = this.props;
    let totalNotes = 0;
    let dispensedNotesContent;
    if (dispensedNotes.length) {
      dispensedNotesContent = dispensedNotes.map((value) => {
        totalNotes += value.numberOfNotes;
        return (<div className="ListItem" key={value.denomination}>{`${value.numberOfNotes} notes of Rs ${value.denomination}`}</div>)
      })
    }

    return (
      <>
        <section className="sec-head">
            <h1>
                ATM Money Dispenser
            </h1>
        </section>
        <section>
          <div className="atm-section">
            <div className="paper">
              <h2>Welcome to ATM</h2>
              <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
                <label htmlFor="amount">Enter the Amount</label>
                <input
                  id="amount"
                  label="Enter the Amount"
                  value={this.state.amount}
                  onChange={this.handleChange('amount')}
                  margin="normal"
                  type="number"
                  name="amount"
                />
                <div>
                  <button
                    type="submit" className="pri-color"
                  >
                    Get Money
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="notes-sec">
            {this.props.dispensedNotes.length !== 0 && <div className="paper">
              <h4>You will get the following amount</h4>
              <div>{dispensedNotesContent}</div>
              <h4 className="total-dis">Total notes dispensed: {totalNotes}</h4>
            </div>}
          </div>
        </section>
      </>
    );
  }
}



export default MoneyComp;