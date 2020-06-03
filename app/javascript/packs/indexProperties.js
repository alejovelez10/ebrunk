import React, { Component } from 'react';
import PropertiesIndex from "../components/Properties/Index";
import Filter from '../components/Properties/FormFilter';
import WebpackerReact from 'webpacker-react';

class indexProperties extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            dataCountry: [],

            formFilter: {
                search: "",
                search2: "",
                search3: "",
                search4: "",
                search5: "",
                search6: "",
            },

            selectedOption :{
                search: "",
                label: "Search by city",
            },
        }
    }

    componentDidMount(){
        this.loadData();
        const array = new Array();

        this.props.country.map((item) => (
            array.push({label: item.name, value: item.id})
        ))

        this.setState({
            dataCountry: array
        })
    }

    handleChangeAutocomplete = selectedOption => {
        this.setState({
          selectedOption,
          formFilter: {
            ...this.state.formFilter,
            search: selectedOption.value
          }
        });
    };

    HandleClickFilter = e => {
        fetch(`/get_properties?search=${this.state.formFilter.search}&search2=${this.state.formFilter.search2}&search3=${this.state.formFilter.search3}&search4=${this.state.formFilter.search4}&search5=${this.state.formFilter.date_hasta}&search6=${this.state.formFilter.search6}`)
          .then(response => response.json())
          .then(data => {
            this.setState({
              data: data.data,
            });
        });
    };

    loadData = () => {
        fetch("/get_properties")
        .then(response => response.json())
        .then(data => {
          this.setState({
            data: data.data,
          });
        });
    }

    handleChangeFilter = (e) => {
        this.setState({
            formFilter: {
              ...this.state.formFilter,
              [e.target.name]: e.target.value
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container" style={{ marginTop: "80px" }}>
                    <div className="col-md-12 pl-0 mb-3">
                            <Filter
                                onChangeFilter={this.handleChangeFilter}
                                formValuesFilter={this.state.formFilter}
                                onClick={this.HandleClickFilter}
                                /* AUTOCOMPLETE PAIS */
                                country={this.props.country}
                                onChangeAutocomplete={this.handleChangeAutocomplete}
                                formAutocomplete={this.state.selectedOption}
                            />
                    </div>
                        <PropertiesIndex />
                </div>
            </React.Fragment>
        );
    }
}

export default indexProperties;

WebpackerReact.setup({ indexProperties });