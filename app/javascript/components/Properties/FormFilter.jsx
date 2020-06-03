import React, { Component } from 'react';
import Select from 'react-select';

class FormFilter extends Component {
    
    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <div className="card">
                  <form onSubmit={this.handleSubmit}>
                    <div className="card-body">
                      <div className="row">
                        
                        <div className="col-md-3">
                                <input
                                  type="hidden"
                                  name="customer_id"
                                  value={this.props.formAutocomplete.customer_id}
                                />
                                <Select
                                  onChange={this.props.onChangeAutocomplete}
                                  options={this.props.country}
                                  autoFocus={false}
                                  className={`link-form`}
                                  value={this.props.formAutocomplete}
                                />
                        </div>

                        <div className="col-md-3">

                        </div>
                      </div>
                    </div>
                  </form>
                </div>
            </React.Fragment>
        );
    }
}

export default FormFilter;
