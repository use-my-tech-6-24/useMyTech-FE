import React, { Component } from "react";
import { Link } from "react-router-dom";

import { CategoryHeader } from "../../styles/Styles";
import Category from "./Category";

export default class CategoriesList extends Component {
  state = {
    category_id: null
  };

  componentDidMount() {
    if (this.props.match) {
      const { category_id } = this.props.match.params;

      this.setState({ category_id });
    }
  }

  render() {
    return (
      <>
        <CategoryHeader>
          <div className="header-text">
            <h3>YOU CAN RENT</h3>
            <p>PROFESSIONAL EQUIPMENTS</p>
            <br />
            <Link to="/register">
              <button type="button" className="btn btn-primary">
                Join Now
              </button>
            </Link>
          </div>
        </CategoryHeader>

        <div className="container-fluid">
          <div className="card-deck mb-5">
            <Category
              image="https://images.unsplash.com/photo-1495512046360-dad6e8b83667?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              name="Cameras"
              favicon="fas fa-camera fa-2x"
              path="/category/camera"
            />
            <Category
              image="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              name="Monitors"
              favicon="fas fa-desktop fa-2x"
              path="/category/monitors"
            />
            <Category
              image="https://images.unsplash.com/photo-1490971774356-7fac993cc438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              name="Lights"
              favicon="far fa-lightbulb fa-2x"
              path="/category/lights"
            />
            <Category
              image="https://images.unsplash.com/photo-1544785349-c4a5301826fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              name="CDJS"
              favicon="fas fa-compact-disc fa-2x"
              path="/category/cdjs"
            />
            <Category
              image="https://images.unsplash.com/photo-1485846147915-69f12fbd03b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              name="Video Cameras"
              favicon="fas fa-video fa-2x"
              path="/category/videocamera"
            />
            <Category
              image="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
              name="Events"
              favicon="fas fa-glass-cheers fa-2x"
              path="/category/events"
            />
          </div>
        </div>
      </>
    );
  }
}
