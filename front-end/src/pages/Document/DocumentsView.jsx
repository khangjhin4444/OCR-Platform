import './DocumentsView.css'


export default function DocumentsView() {
  return(
    <>
      <h2 className="fs-4">Document Storage</h2>
      <div className="search-container container">
        <input type="text" className='search-input'placeholder='Enter name or tag to search'/>
        <button className="search-btn">
          Search
        </button>
      </div>
      <div className='sort-container'>
        <p>Sort by:</p>
        
      </div>
    </>
  )
}