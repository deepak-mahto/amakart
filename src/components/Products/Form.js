const Form = (props) => {
  const handleInput = (e) => {
    props.onChangeInput(e);
  };

  return (
    <form onSubmit={props.onFormsubmission}>
      <h1>Item card details</h1>
      <div className={"input-field"}>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          placeholder="Enter Title"
          value={props.item.title}
          onChange={handleInput}
          required
        />
      </div>
      <div className={"input-field"}>
        <label htmlFor="price">Price</label>
        <input
          name="price"
          type="number"
          placeholder="Enter Price"
          value={props.item.price}
          onChange={handleInput}
          required
        />
      </div>
      <div className={"input-field"}>
        <label htmlFor="discountedPrice">DiscountedPrice</label>
        <input
          name="discountedPrice"
          type="number"
          placeholder="Enter discountedPrice"
          value={props.item.discountedPrice}
          onChange={handleInput}
          required
        />
      </div>
      <div className={"input-field"}>
        <label htmlFor="thumbnail">Thumbnail</label>
        <input
          name="thumbnail"
          type="text"
          placeholder="Enter thumbnail"
          value={props.item.thumbnail}
          onChange={handleInput}
          required
        />
      </div>
      <div className={"submit-wrap"}>
        <button>Update</button>
      </div>
    </form>
  );
};

export default Form;
