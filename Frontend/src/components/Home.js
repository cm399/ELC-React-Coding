import ClipLoader from "react-spinners/ClipLoader";

const Home = ({ data, isLoading }) => {
  return (
    <section id="home">
      {isLoading ? (
        <div className="loader">
          <ClipLoader size="200px" color="white" />
        </div>
      ) : (
        <div className="container">
          {data &&
            data?.map((item) => {
              return (
                <div key={item._id} className="card">
                  <div className="card-top-bar">
                    <p className="id">ID: {item._id}</p>
                    <p className="price">Price: {item.price}</p>
                    <p className="isActive">{item.isActive}</p>
                  </div>

                  <img
                    src={item.picture}
                    alt={item.name}
                    height={300}
                    width="100%"
                  ></img>

                  <p className="name">Name: {item.name}</p>
                  <p className="about">{item.about}</p>

                  <div className="tag-container">
                    {item?.tags?.map((tag) => (
                      <p key={tag}>#{tag}</p>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </section>
  );
};

export default Home;
