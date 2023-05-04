const React = require("react")
const Nav = require("../components/Nav")
const DefaultLayout = require("../layout/Default")

class Index extends React.Component {
  render() {
    const { fruits } = this.props
    return(
      <DefaultLayout 
        title="Fruits Index Page"
        link="/fruits"
        text="Home">
            {/* see that we used Nav bar in two different ways of passing props through Nav and then DefaultLayout */}
        <Nav link="/fruits/new" text="Create a Fruit"/>
        <ul>
            {fruits.map((fruit, i) => {
                return (
                    <li key={i}>
                        The {" "}
                        <a href={`/fruits/${fruit._id}`}>
                            {fruit.name}
                        </a>{" "}
                        is {fruit.color} <br></br>
                        {fruit.readyToEat
                            ? `It is ready to eat`
                            : `It is not ready to eat`}
                        <br />
                        {/* link to this specific fruit's edit page */}
                        <a href={`/fruits/${fruit._id}/edit`}>Edit This Fruit</a> 
                        {/* we must use a Form for delete because we need to make a request to our server.  You can't use handleClick in server-side app */}
                        <form action={`/fruits/${fruit._id}?_method=DELETE`} method ="POST">
                            <input type="submit" value="DELETE" />
                        </form>
                    </li>
                );
            })}
        </ul>
    </DefaultLayout>
    )
  }
}

module.exports = Index

