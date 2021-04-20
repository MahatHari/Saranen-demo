import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CourseList from './courseList';

class CoursesPage extends React.Component {
  componentDidMount() {
    const { courses, authors, actions } = this.props;
    console.log(this.props);
    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        console.log('Loading courses failed' + error);
      });
    }

    /* if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        console.log('Loading authors failed' + error);
      });
    } */
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

// Redux=>passing pops and connecting store with CoursePage

CoursesPage.prototypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
};

// courses is state.courses => from store
function mapStateToProps({ courses }) {
  return {
    courses,
  };
}
// Dispatching actions to store using bindActionCreators
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
};
/* // Dispatching actions as object
const mapDispatchToProps = {
  createCourse:courseActions.createCourse
} */

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
