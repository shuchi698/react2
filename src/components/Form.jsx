import React from 'react';

class Form extends React.Component {
    state = {
        name: '',
        department: '',
        rating: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addEmployeeHandler(this.state);
        this.setState({
            name:'',
            department:'',
            rating: '',
        });
    }

    render() {
        return (
            <div className='Form'>
                <div className='form-wrapper'>
                    <h1>EMPLOYEE FEEDBACK FORM</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor="name">Name: </label>
                            <input
                                type="text"
                                id='name'
                                className='form-input'
                                name='name'
                                value={this.state.name}
                                required
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="department">Department: </label>
                            <input
                                type="text"
                                id='department'
                                className='form-input'
                                name='department'
                                value={this.state.department}
                                required
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="rating">Rating: </label>
                            <input
                                type="number"
                                id='rating'
                                className='form-input'
                                name='rating'
                                value={this.state.rating}
                                required
                                onChange={this.handleChange}
                            />
                        </div>
                        <button type='submit' className='submit-btn'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;
