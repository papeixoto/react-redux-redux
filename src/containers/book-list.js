import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // whatever is returned from here will show as props inside Booklist
  return {
    books: state.books,
  }
}

//anything returned from this fucntion will end up as props on the Booklist container
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called the result should be passed to all reducers
  // this.props.selectBook
  // this makes sure that the action is available, and that it is propagated to props
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//Promote BookList from a component to a container - it needs to know about
// this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

