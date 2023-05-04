const React = require('react');
const DefaultLayout = require('../layout/Default')

class Edit extends React.Component {
    render() {
        const fruit = this.props.fruit
        //this const makes the props more easily accessible - see line 15,16 the shortened extension for accessing the data.
        return (
            <DefaultLayout
                title="Edit Page"
                link="/fruits"
                text="Home">

                <form action={`/fruits/${fruit._id}?_method=PUT`} method="POST">
                {/* use the fruit info to give the inputs defaultValue for a nice user experience */}
                Name: <input type="text" name="name" defaultValue={fruit.name}/>
                Color: <input type="text" name="color" defaultValue={fruit.color} />
                Is Ready To Eat: 
                {/* conditionally rendering the checkbox input to have it match the original data */}
                {
                    fruit.readyToEat ? 
                        <input type="checkbox" name="readyToEat" defaultChecked />
                    : 
                        <input type="checkbox" name="readyToEat"/> }
                <input type="submit" value="Submit Changes" />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit;