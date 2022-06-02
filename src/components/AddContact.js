import React from 'react';

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault();
    if(this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandetory!");
      return;
    }
    this.props.contactHandler(this.state);
    this.setState({name: "", email: ""});
    this.props.history.push("/");
  }
  render() {
    return (
      <div className="ui main">
        <br/><br/>
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={(e) => this.setState({name: e.target.value})}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={(e) => this.setState({email: e.target.value})}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  };
}

export default AddContact;
