import React, {Component} from 'react';

class SearchForm extends Component{
    state = {
        searchText : ''
    }
    onSearchChange = (e) => {
        this.setState({
            searchText : e.target.value
        })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.onSearch(this.query.value);
      e.currentTarget.reset();
   }


  render() {
      return (
          <form className="search-form" onSubmit={this.handleSubmit}>
              <label className="is-hidden" htmlFor="search">Search</label>
              <input
                  ref = {(input)=> this.query = input}
                  onChange={this.onSearchChange}
                  type="search"
                  name="search"
                  placeholder="Search..."
              />
              <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
          </form>
      );
  }
}

export default SearchForm;