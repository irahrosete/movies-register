const AddMovie = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Movie</label>
        <input
          type="text"
          placeholder="Add Movie"
        />
      </div>
      <div className="form-control">
        <label>Category</label>
        <input
          type="text"
          placeholder="Add Category"
        />
      </div>
      <div className="form-control form-control-check">
        <label>Watched?</label>
        <input
          type="checkbox"
        />
      </div>
      <input type="submit" value="Add Movie" className="btn btn-block" />
    </form>
  )
}

export default AddMovie
