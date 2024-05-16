import { useDispatch } from "react-redux";
import { deleteAllUser } from "../store/slices/UserSlice";

const DeleteAllUsers = () => {
  const dispatch = useDispatch();

  const clearUsers = () => {
    dispatch(deleteAllUser());
  };
  return (
    <div className="text-right mt-4 ">
      <button
        className="px-6 py-1 bg-gradient-to-r from-orange-600 to-amber-500 text-white hover:bg-gradient-to-l from-orange-600 to-amber-500"
        onClick={clearUsers}
      >
        DeleteAllUsers
      </button>
    </div>
  );
};

export default DeleteAllUsers;
