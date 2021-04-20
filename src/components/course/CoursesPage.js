import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

const initialState = {
  title: '',
  cid: '',
};

function CoursesPage(props) {
  const [course, setCourse] = useState(initialState);
  const handleChange = (e) => {
    const course = {
      ...props.courses.courses,
      cid: props.courses.length + 1,
      title: e.target.value,
    };
    setCourse(course);
    console.log(course);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCourse(initialState);
    props.actions.createCourse(course);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Add Course</h3>
        <input type='text' value={course.title} onChange={handleChange} />
        <input type='submit' value='Save' />
        {props.courses.length > 0
          ? props.courses.map((course) => (
              <div key={course.cid}>{course.title}</div>
            ))
          : null}
      </form>
      {/* <form className='row g-4' autoComplete='off'>
          <div className='col-md-6'>
            <label className='form-label'>Title</label>
            <input type='text' className='form-control' id='title' />
          </div>
          <div className='col-md-6'>
            <label htmlFor='author' className='form-label'>
              Author Name
            </label>
            <input type='text' className='form-control' id='author' />
          </div>
          <div className='col-12'>
            <label htmlFor='inputAddress' className='form-label'>
              Address
            </label>
            <input
              type='text'
              className='form-control'
              id='inputAddress'
              placeholder='1234 Main St'
            />
          </div>
          <div className='col-12'>
            <label htmlFor='inputAddress2' className='form-label'>
              Address 2
            </label>
            <input
              type='text'
              className='form-control'
              id='inputAddress2'
              placeholder='Apartment, studio, or floor'
            />
          </div>
          <div className='col-md-6'>
            <label htmlFor='inputCity' className='form-label'>
              City
            </label>
            <input type='text' className='form-control' id='inputCity' />
          </div>
          <div className='col-md-4'>
            <label htmlFor='inputState' className='form-label'>
              State
            </label>
            <select id='inputState' className='form-select'>
              <option defaultValue>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className='col-md-2'>
            <label htmlFor='inputZip' className='form-label'>
              Zip
            </label>
            <input type='text' className='form-control' id='inputZip' />
          </div>
          <div className='col-12'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                id='gridCheck'
              />
              <label className='form-check-label' htmlFor='gridCheck'>
                Check me out
              </label>
            </div>
          </div>
          <div className='col-12'>
            <button type='submit' className='btn btn-primary'>
              Sign in
            </button>
          </div>
        </form> */}
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
