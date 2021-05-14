import React, { lazy, Component } from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import './style.css';
import colors from './icons/backgroundImages';
import Titles from './components/titles.jsx';
import Enrolled from './components/enrolled.jsx';
import Stars from './components/totalStars.jsx';

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
];


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
    if (document) {
      var uri = window.location.href.split('/');
      var id = uri[uri.length - 1] === '' ? 1 : uri[uri.length - 1];
    }

    // GET title, enrolled num, months, date, color, reviews, & stars
    axios.get(`/getTitle${window.location.pathname}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          titles: res.data.title,
          totalEnrolled: res.data.enrolled,
          month: months[Math.floor(Math.random() * months.length)],
          date: Math.floor(Math.random() * 30),
          color: colors[Math.floor(Math.random() * colors.length)],
          totalReviews: res.data.reviewcounts,
          totalStars: res.data.stars,
        });
      })
      .catch(err => console.error('Cannot get title', err));

    // generated from jay instructor
    axios.get(`http://54.176.19.199:3003/api/instructors/${id}`)
      .then(response => {
        this.setState({
          instructor: `${response.data[0].firstName} ${response.data[0].lastName}`
        });
      })
      .catch(err => console.log('Cannot get instructors', err));

    // generated from jay instructor
    axios.get(`http://54.176.19.199:3003/api/offeredBy/${id}`)
      .then(response => {
        this.setState({
          offeredBy: response.data[0].offeredByName
        });
      })
      .catch(err => console.log('Cannot get offered by', err));

    // generated from jay images
    axios.get(`http://54.176.19.199:3006/api/image/${id}/primaryInstructor `)
      .then(response => {
        this.setState({
          img: response.data.primaryInstructor
        });
      })
      .catch(err => console.log('Could not get images', err));
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
