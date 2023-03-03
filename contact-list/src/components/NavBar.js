import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export function NavBar(props) {
  const { onSearch } = props;

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <form className="d-flex flex-grow-1 align-items-center">
          <input
            className="form-control form-control-lg me-4"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleSearch}
          />
        </form>
        <NavLink to='/addcontact'>
          <button className="btn btn-outline-light me-2">
            Add
          </button>
        </NavLink>
      </div>
    </nav>
  );
}
