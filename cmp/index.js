const meld = require('./wiring/meld')

module.exports = component

function component (ctx) {

  return render

  function render (props) {
    return meld `
      <div>
        <button type="button" onClick="${action1}">
          Call Service1 Action1
        </button>
        <br/>
        <button type="button" onClick="${action2}">
          Call Service1 Action2
        </button>
      </div>
    `
  }

  function action1 () {
    fetch('/service1/action1')
      .then((response) => response.json())
      .then((data) => {
        alert('Response from service1 action1')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function action2 () {
    fetch('/service1/action2')
      .then((response) => response.json())
      .then((data) => {
        alert('Response from service1 action2')
      })
      .catch((error) => {
        console.log(error)
      })
  }

}