import { useNavigate } from "react-router-dom";

// create Next button to move to the next page

const Next = () => {
  const navigate = useNavigate();
  return (
    <div className="next">
      <button onClick={() => navigate(+1)}>Next</button>
    </div>
  );
};

export default Next;
