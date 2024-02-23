import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { useContext } from 'react';
import { ThemeContext } from '../hooks/themeContext';
import { subscribeContext } from '../hooks/subscribeContext';
import * as Yup from 'yup';

// Schema for yup
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, '*Names must have at least 2 characters')
    .max(100, "*Names can't be longer than 100 characters")
    .required('*Name is required'),
  email: Yup.string()
    .email('*Must be a valid email address')
    .max(100, '*Email must be less than 100 characters')
    .required('*Email is required'),
  subscribe: Yup.boolean(),
});

const SubscribeForm = () => {
  const { bgColorClass, textColorClass } = useContext(ThemeContext);
  const { toggleSubscribe } = useContext(subscribeContext);

  return (
    <div
      className={`container  p-4 ${bgColorClass} shadow`}
      style={{ width: '20rem' }}
      role='form'
      aria-label='Subscription Form'
    >
      <Formik
        initialValues={{ name: '', email: '', subscribe: false }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          const existingData = localStorage.getItem('formData');
          let formDataArray = existingData ? JSON.parse(existingData) : [];

          if (!Array.isArray(formDataArray)) {
            formDataArray = [];
          }

          formDataArray.push(values);
          localStorage.setItem('formData', JSON.stringify(formDataArray));
          resetForm();
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit} className='mx-auto'>
            <Form.Group
              controlId='formName'
              className={`mb-3 ${textColorClass}`}
            >
              <Form.Label className='text-body-secondary'>Name:</Form.Label>
              <Form.Control
                type='text'
                name='name'
                placeholder='Full Name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={`form-control ${
                  touched.name && errors.name ? 'is-invalid' : ''
                }`}
                style={{ marginBottom: '1em' }}
              />
              {touched.name && errors.name ? (
                <div className='invalid-feedback'>{errors.name}</div>
              ) : null}
            </Form.Group>

            <Form.Group
              controlId='formEmail'
              className={`mb-3 ${textColorClass}`}
            >
              <Form.Label className='text-body-secondary'>Email:</Form.Label>
              <Form.Control
                type='text'
                name='email'
                placeholder='Email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={`form-control ${
                  touched.email && errors.email ? 'is-invalid' : ''
                }`}
                style={{ marginBottom: '1em' }}
              />{' '}
              {touched.email && errors.email ? (
                <div className='invalid-feedback'>{errors.email}</div>
              ) : null}
              <Form.Check
                type='checkbox'
                name='subscribe'
                label='Do you want to receive our newsletter?'
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.subscribe}
                className={`${
                  touched.subscribe && errors.subscribe ? 'is-invalid' : ''
                } text-body-secondary`}
              />
            </Form.Group>

            <Button
              className={`mx-4 ${textColorClass}`}
              variant='success'
              type='submit'
              disabled={isSubmitting}
              style={{ marginTop: '1em' }}
            >
              Submit
            </Button>
            <Button
              className={`mx-4  ${textColorClass}`}
              variant='success'
              type='close'
              style={{ marginTop: '1em' }}
              onClick={toggleSubscribe}
            >
              Close
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SubscribeForm;
