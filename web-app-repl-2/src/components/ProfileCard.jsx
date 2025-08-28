import "../styles/ProfileCard.scss";

const ProfileCard = (data) => {
  const obj = data.data;
  return (
    <div className="card">
      <div className="image">
        <img src={obj.image} />
      </div>

      <h2>{obj.job}</h2>
      <h3>
        {obj.firstName} {obj.lastName}
      </h3>
      <p>{obj.description}</p>
      <button
        onClick={() => {
          console.log(`${obj.firstName} ${obj.lastName}`);
        }}
      >
        Log my Name!
      </button>
    </div>
  );
};

export default ProfileCard;
