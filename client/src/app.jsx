import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import './style.css';
import colors from './__helpers__/backgroundImages';
import Titles from './components/titles.jsx';
import Enrolled from './components/enrolled.jsx';
import Stars from './components/totalStars.jsx';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      num: 0,
      titles: '',
      totalEnrolled: 0,
      instructor: '',
      offeredBy: '',
      img: '',
      month: '',
      date: 0,
      totalReviews: 20,
      totalStars: 0,
      color: '',
    };
  }

  // API Get request
  componentDidMount() {
    const id = window.location.pathname;

    const urls = [
      `/getTitle${id}`,
      `http://18.118.36.172:3003/api/instructors${id}`
      // `http://54.176.19.199:3006/api/image${id}/primaryInstructor`
    ];

    const results = Promise.allSettled(urls.map(url => axios.get(url)));

    results.then(res => {
      res.forEach((res, i) => {
        if (res.status === "fulfilled") {
          // titles, etc.
          if (i === 0) {
            const { title, enrolled, reviewcounts, stars, offeredby } = res.value.data;

            this.setState({
              titles: title,
              totalEnrolled: enrolled,
              month: months[Math.floor(Math.random() * months.length)],
              date: Math.floor(Math.random() * 30),
              color: colors[Math.floor(Math.random() * colors.length)],
              totalReviews: reviewcounts,
              totalStars: stars,
              offeredBy: offeredby,
            });
            // instructor name
          } else if (i === 1) {
            const { firstname, lastname } = res.value.data[0];

            this.setState({
              instructor: `${firstname} ${lastname}`,
            });
            // instructor image
          } else {
            const { primaryInstructor } = res.value.data;

            this.setState({
              img: primaryInstructor,
            });
          }
        }
      })
    })
  }

  render() {
    return (
      <div>
        <div className="title-service" style={{ backgroundImage: `linear-gradient(${this.state.color})` }}>
          <div className="title-inner">
            <div className="title-service1">
              <div className="title-nav">
                Browse {'>'}   Department {'>'}   {this.state.titles}
              </div>
              <div className="banner-title">
                <Titles title={this.state.titles} />
              </div>
              <div className="title-star">
                <Stars rating={this.state.totalStars} />
                <span className="title-num">{this.state.totalStars}</span>
                <span className="title-rating">{this.state.totalReviews} ratings</span>
              </div>
              <div className="instructor-main">
                <img src={this.state.img} alt="instructor" className="instructor" />
                <span className="title-instructorName">
                  {this.state.instructor}
                </span>
                {this.state.totalEnrolled > 50000 &&
                  <span id="title-top-instructor">Top instructor</span>
                }
              </div>
              <div className="white-box">
                <div className="title-charge"> Enroll for Free</div>
                <div className="title-date">Starts {this.state.month} {this.state.date}</div>
              </div>
              <div className="title-aid">Financial aid available</div>
              <div className="enrolled">
                <span> <Enrolled enrolled={this.state.totalEnrolled} /> </span>
                <span style={{ marginLeft: '10px' }}>already enrolled</span>
              </div>
            </div>
            <div className="side-bar">
              <span>
                <p className="offered">Offered By </p>
                <div className="university">{this.state.offeredBy}</div>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDom.render(<Title />, document.getElementById('title'));
