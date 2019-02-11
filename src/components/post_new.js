import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import { fetchPosts } from '../actions';

class PostNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
    }

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    type="text"
                    {...field.input}
                />
                {/* if field has been touched, show error if it is true else show empty string*/}
                <div className="text-help">{touched ? error : ''}</div>
            </div>
        );
    }

    onSubmit(values) {
        const { createPost, fetchPosts } = this.props;

        this.setState({ isLoading: true });
        createPost(values, () => {
            // update list
            fetchPosts();
            this.setState({ isLoading: false });
        });

    }

/*
    reduxblog.herokuapp.com is a free post API and only takes title, categories and content as parameters.
    Therefor:
    title = namn
    categories = email
    content = meddelande
 */
    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="title"
                    //Arbitrary properties
                    label="Namn*"
                    component={this.renderField}
                />
                <Field
                    name="categories"
                    label="E-mail*"
                    component={this.renderField}
                />
                <Field
                    name="content"
                    label="Meddelande*"
                    component={this.renderField}
                />

                <button type="submit" className={"button button__cta " + (this.state.isLoading ? 'hide' : 'showit')}>Skicka</button>
                <figure className={"comments__spinner " + (this.state.isLoading ? 'showit' : 'hide')}><img src="/media/spinner.gif" /></figure>
            </form>
        );
    }
}
//validation
function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Glöm inte att ange ett namn.";
    }
    else if (values.title.length < 2) {
        errors.title = 'Du måste ange mer än 2 tecken.'
    }
    if (!values.categories) {
        errors.categories = "Glöm inte att ange din e-mail.";
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.categories)) {
        errors.categories = 'Felaktig e-mail'
    }
    if (!values.content) {
        errors.content = "Glöm inte att lämna ett meddelande.";
    }
    else if (values.content.length < 10) {
        errors.title = 'Du måste ange mer än 10 tecken i en kommentar.'
    }

    return errors;
}
const afterSubmit = (result, dispatch) =>
    dispatch(reset('PostsNewForm'));

export default reduxForm({
    validate,
    form: 'PostsNewForm',
    onSubmitSuccess: afterSubmit
})(
    connect(null, { fetchPosts, createPost })(PostNew)
    );
