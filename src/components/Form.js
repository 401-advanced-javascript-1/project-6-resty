import React from 'react';
import * as actions from '../actions/form-actions.js';
import connect from 'react-redux';


class Form extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {};
    }

    handleChange = event => {
        let prop = event.target.name;
        let value = event.target.value;
        this.setState({ [prop]: value });
        this.props.get({ prop, value })
    
        // If basic/bearer, clear the other
        if (prop === 'token') {
          let username = '';
          let password = '';
          this.setState({ username, password });
        }
    
        if (prop.match(/username|password/)) {
          let token = '';
          this.setState({ token });
        }
    };

    render(){
        return(
            <form onSubmit={this.callAPI}>
            <section>
            <input
                type="text"
                className="wide"
                name="url"
                placeholder="URL"
                value={this.state.url}
                onChange={this.handleChange}
            />

            <div id="methods">
                <label>
                <input
                    type="radio"
                    name="method"
                    checked={this.state.method === 'get' ? true : false}
                    value="get"
                    onChange={this.handleChange}
                />
                <span>GET</span>
                </label>
                <label>
                <input
                    type="radio"
                    name="method"
                    checked={this.state.method === 'post' ? true : false}
                    value="post"
                    onChange={this.handleChange}
                />
                <span>POST</span>
                </label>
                <label>
                <input
                    type="radio"
                    name="method"
                    checked={this.state.method === 'put' ? true : false}
                    value="put"
                    onChange={this.handleChange}
                />
                <span>PUT</span>
                </label>
                <label>
                <input
                    type="radio"
                    name="method"
                    checked={this.state.method === 'patch' ? true : false}
                    value="patch"
                    onChange={this.handleChange}
                />
                <span>PATCH</span>
                </label>
                <label>
                <input
                    type="radio"
                    name="method"
                    checked={this.state.method === 'delete' ? true : false}
                    value="delete"
                    onChange={this.handleChange}
                />
                <span>DELETE</span>
                </label>
                <label>
                <button type="submit">Go!</button>
                </label>
            </div>
            </section>

            <section className="deck col-2">
            <div id="body">
                <textarea
                placeholder="Raw JSON Body"
                name="requestBody"
                onChange={this.handleChange}
                value={this.state.requestBody}
                disabled={
                    this.state.method.match(/get|delete/) ? true : false
                }
                />
            </div>

            <div id="headers">
                <a href="#" onClick={this.toggleHeaders}>
                Headers
                </a>
                <div className={'visible-' + this.state.headersVisible}>
                <h2>Basic Authorization</h2>
                <input
                    onChange={this.handleChange}
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                />
                <input
                    onChange={this.handleChange}
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                />
                </div>
                <div className={'visible-' + this.state.headersVisible}>
                <h2>Bearer Token</h2>
                <input
                    onChange={this.handleChange}
                    type="text"
                    className="wide"
                    name="token"
                    placeholder="Token"
                    value={this.state.token}
                />
                </div>
            </div>
            </section>
        </form>
        )
    }
}


const mapStateToProps = state => ({
    people: state.people,
});

const mapDispatchToProps = (dispatch, getState) => ({
    get: (people) => dispatch(actions.GET(people))
});

export default Form;
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(Form);