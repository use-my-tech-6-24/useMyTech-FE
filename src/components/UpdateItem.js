// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateItem } from '../actions/index';

import './AddItem.scss';

class UpdateItem extends Component {
  state = {
    name: '',
    category: '',
    price: '',
    image_url: '',
    description: ''
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  updateItem = e => {
    e.preventDefault();
    this.props.updateItem(this.state).then(() => {
      this.props.history.push('/dashboard');
    });
  };
  render() {
    console.log(`updateitem props?`, this.props);
    return (
      <div className='form-container'>
        <h1>Update Your Rental Listing</h1>
        <div className='form'>
          <form onSubmit={this.updateItem}>
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
              placeholder='item name'
            />
            <select
              type='text'
              name='category'
              onChange={this.handleChange}
              value={this.state.category}
            >
              <option value='cameras'>Cameras</option>
              <option value='monitors'>Monitors</option>
              <option value='lights'>Lights</option>
              <option value='cdjs'>CDJS</option>
              <option value='video'>Video</option>
              <option value='events'>Events</option>
            </select>
            <input
              type='number'
              name='price'
              value={this.state.price}
              onChange={this.handleChange}
              placeholder='price'
            />
            <input
              type='text'
              name='image_url'
              value={this.state.image_url}
              onChange={this.handleChange}
              placeholder='image link'
            />
            <textarea
              name='description'
              value={this.state.description}
              onChange={this.handleChange}
              placeholder='description of your rental'
            />
            <button>Update Item</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: [],
  isUpdatingItem: state.isRegistering,
  error: state.error
});

export default connect(
  mapStateToProps,
  { updateItem }
)(UpdateItem);
