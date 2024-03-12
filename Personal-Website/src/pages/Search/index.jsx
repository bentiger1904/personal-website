// // // /* eslint-disable react/react-in-jsx-scope */
// // // // import { useState, useEffect } from 'react';
// // // // import API from '../../utils/API';
// // // // import Container from '../../components/Container';
// // // // import SearchForm from '../../components/SearchForm';
// // // // import SearchResults from '../../components/SearchResults';
// // // // import Alert from '../../components/Alert';

// // // import { useState, useEffect } from 'react';
// // // import API from '../../utils/API';
// // // import Container from '../../components/Container';
// // // import SearchForm from '../../components/SearchForm';
// // // import SearchResults from '../../components/SearchResults';
// // // import Alert from '../../components/Alert';

// // // function Search() {
// // //   const [search, setSearch] = useState('Wikipedia');
// // //   const [title, setTitle] = useState('');
// // //   const [url, setUrl] = useState('');
// // //   const [error, setError] = useState('');

// // //   // TODO: Fix the useEffect hook running after every state change.
// // //   // useEffect(() => {
// // //   //   if (!search) {
// // //   //     return;
// // //   //   }
// // //   useEffect(() => {
// // //     if (!search) {
// // //       return;
// // //     }
  
// // //     API.searchTerms(search)
// // //       .then((res) => {
// // //         if (res.data.length === 0) {
// // //           throw new Error('No results found.');
// // //         }
// // //         if (res.data.status === 'error') {
// // //           throw new Error(res.data.message);
// // //         }
// // //         // Use the response data to set the title and url.
// // //         setTitle(res.data.title);
// // //         setUrl(res.data.url);
// // //       })
// // //       .catch((err) => setError(err));
// // //   }, [search]);
// // //   //   API.searchTerms(search)
// // //   //     .then((res) => {
// // //   //       if (res.data.length === 0) {
// // //   //         throw new Error('No results found.');
// // //   //       }
// // //   //       if (res.data.status === 'error') {
// // //   //         throw new Error(res.data.message);
// // //   //       }
// // //   //       // TODO: Use the response data to set the title and url.
// // //   //     })
// // //   //     .catch((err) => setError(err));
// // //   // });

// // //   // TODO: Fix the handleInputChange function to display the Wikipedia URL
// // //   // const handleInputChange = (event) => {
// // //   //   console.log(event.target.value);
// // //   // };
// // //   const handleInputChange = (event) => {
// // //     setSearch(event.target.value);
// // //   };

// // //   return (
// // //     <div>
// // //       <Container style={{ minHeight: '100vh' }}>
// // //         <h1 className="text-center pt-5">Search For Anything on Wikipedia</h1>
// // //         <Alert
// // //           type="danger"
// // //           style={{ opacity: error ? 1 : 0, marginBottom: 10 }}
// // //         >
// // //           {error}
// // //         </Alert>
// // //         <SearchForm handleInputChange={handleInputChange} results={search} />
// // //         <SearchResults title={title} url={url} />
// // //       </Container>
// // //     </div>
// // //   );
// // // }

// // // export default Search;
// // // //   return (
// // // //     <div>
// // // //       <Container style={{ minHeight: '100vh' }}>
// // // //         <h1 className="text-center pt-5">Search For Anything on Wikipedia</h1>
// // // //         <Alert
// // // //           type="danger"
// // // //           style={{ opacity: error ? 1 : 0, marginBottom: 10 }}
// // // //         >
// // // //           {error}
// // // //         </Alert>
// // // //         <SearchForm handleInputChange={handleInputChange} results={search} />
// // // //         <SearchResults title={title} url={url} />
// // // //       </Container>
// // // //     </div>
// // // //   );
// // // // }


// // /* eslint-disable react/react-in-jsx-scope */
// // import { useState, useEffect } from 'react';
// // import API from '../../utils/API';
// // import Container from '../../components/Container';
// // import SearchForm from '../../components/SearchForm';
// // import SearchResults from '../../components/SearchResults';
// // import Alert from '../../components/Alert';

// // function Search() {
// //   const [search, setSearch] = useState('Wikipedia');
// //   const [title, setTitle] = useState('');
// //   const [url, setUrl] = useState('');
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     if (!search) {
// //       return;
      
// //     }
// //     console.log("this should run")
// //     API.searchTerms(search)
// //       .then((res) => {
// //         if (res.data.length === 0) {
// //           throw new Error('No results found.');
// //         }
// //         if (res.data.status === 'error') {
// //           throw new Error(res.data.message);
// //         }
// //         setTitle(res.data.title);
// //         setUrl(res.data.url);
// //       })
// //       .catch((err) => setError(err));
// //   }, [search]);

// //   const handleInputChange = (event) => {
// //     setSearch(event.target.value);
// //   };

// //   return (
// //     <div>
// //       <Container style={{ minHeight: '100vh' }}>
// //         <h1 className="text-center pt-5">Search For Anything on Wikipedia</h1>
// //         <Alert
// //           type="danger"
// //           style={{ opacity: error ? 1 : 0, marginBottom: 10 }}
// //         >
// //           {error}
// //         </Alert>
// //         <SearchForm handleInputChange={handleInputChange} results={search} />
// //         <SearchResults title={title} url={url} />
// //       </Container>
// //     </div>
// //   );
// // }

// // export default Search;
// import { useState, useEffect } from 'react';
// import API from '../../utils/API';
// import Container from '../../components/Container';
// import SearchForm from '../../components/SearchForm';
// import SearchResults from '../../components/SearchResults';
// import Alert from '../../components/Alert';

// function Search() {
//   const [search, setSearch] = useState('Wikipedia');
//   const [title, setTitle] = useState('');
//   const [url, setUrl] = useState('');
//   const [error, setError] = useState('');

//   // useEffect to fetch data from API when search term changes
//   useEffect(() => {
//     // Function to fetch data from API
//     const fetchData = async () => {
//       try {
//         if (!search) {
//           return; // Do nothing if search term is empty
//         }

//         const res = await API.searchTerms(search);
//         if (res.data.length === 0) {
//           throw new Error('No results found.');
//         }
//         if (res.data.status === 'error') {
//           throw new Error(res.data.message);
//         }

//         // Update title and URL with response data
//         setTitle(res.data.title);
//         setUrl(res.data.url);
//         setError(''); // Clear error if any
//       } catch (err) {
//         setError(err.message); // Handle errors
//       }
//     };

//     // Call fetchData function
//     fetchData();

//   }, [search]); // Run effect when search term changes

//   // Function to handle input change
//   const handleInputChange = (event) => {
//     setSearch(event.target.value); // Update search term with input value
//   };

//   // Render component
//   return (
//     <div>
//       <Container style={{ minHeight: '100vh' }}>
//         <h1 className="text-center pt-5">Search For Anything on Wikipedia</h1>
//         {/* Display error alert if error exists */}
//         <Alert
//           type="danger"
//           style={{ opacity: error ? 1 : 0, marginBottom: 10 }}
//         >
//           {error}
//         </Alert>
//         {/* Search form component */}
//         <SearchForm handleInputChange={handleInputChange} results={search} />
//         {/* Display search results component */}
//         <SearchResults title={title} url={url} />
//       </Container>
//     </div>
//   );
// }

// export default Search;
import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import Container from '../../components/Container';
import SearchForm from '../../components/SearchForm';
import SearchResults from '../../components/SearchResults';
import Alert from '../../components/Alert';
import axios from 'axios';

const Search = () => {
  const [search, setSearch] = useState('Wikipedia');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!search) {
          return;
        }
    
        const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(search)}`;
        const response = await axios.get(apiUrl);
    
        if (response.data.type === 'disambiguation') {
          throw new Error('Disambiguation page. Please provide a more specific search term.');
        }
    
        setTitle(response.data.title);
        setUrl(response.data.content_urls.desktop.page);
        setError('');
      } catch (err) {
        setError(err.message);
        setTitle('');
        setUrl('');
      }
    };
    fetchData();

  }, [search]);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <Container style={{ minHeight: '100vh' }}>
        <h1 className="text-center pt-5">Search For Anything on Wikipedia</h1>
        <Alert
          type="danger"
          style={{ opacity: error ? 1 : 0, marginBottom: 10 }}
        >
          {error}
        </Alert>
        <SearchForm handleInputChange={handleInputChange} results={search} />
        <SearchResults title={title} url={url} />
      </Container>
    </div>
  );
}

export default Search;
