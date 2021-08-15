/* eslint-disable array-callback-return */
/* eslint-disable class-methods-use-this */
import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';

class UsersList extends React.Component {
  // state
  // pageNumber
  // userCount

  state = {
    currentPage: 1,
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  render() {
    const { users } = this.props;
    const usersPerPage = 3;
    const { currentPage } = this.state;

    // input usersPerPage, currentPage
    // output users[]

    const startIndex = (currentPage - 1) * usersPerPage; // 0, 3, 6, 9
    const endIndex = startIndex + usersPerPage;
    const usersToDisplay = users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          currentPage={this.state.currentPage}
          goNext={this.goNext}
          goPrev={this.goPrev}
          totalItems={users.length}
          itemsPerPage={usersPerPage}
        />
        <ul className="users">
          {usersToDisplay.map(({ id, name, age }) => (
            <User key={id} name={name} age={age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
