// import React, { useState } from 'react';

// const SearchBar = () => {
//   const [searchVisible, setSearchVisible] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleIconClick = () => {
//     setSearchVisible(!searchVisible);
//   };

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Perform search logic with the search term
//     console.log('Searching for:', searchTerm);
//     setSearchTerm('');
//     setSearchVisible(false);
//   };

//   return (
//     <div>
//       <i className="search-icon" onClick={handleIconClick}></i>
//       {searchVisible && (
//         <form onSubmit={handleSearch}>
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleInputChange}
//             placeholder="Search..."
//           />
//           <button type="submit">Search</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default SearchBar;
