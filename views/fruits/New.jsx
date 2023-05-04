const React = require("react")
const Nav = require("../components/Nav")
const DefaultLayout = require("../layout/Default")

class New extends React.Component {
  render() {
    return(
      <DefaultLayout title="Create a New Fruit!">
        <Nav link="/fruits" text="Home" />
        <form action="/fruits" method="POST">
          Name: <input type="text" name="name" />
          Color: <input type="text" name="color" />
          Is Ready To Eat: 
          <input 
            type="checkbox" 
            name="readyToEat" 
          /> 
          <input type="submit" value="Create Fruit" />       
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = New