import DeleteAllUsers from "./DeleteAllUsers";
import "../index.css";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
import DisplayUser from "./DisplayUser";

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    dispatch(addUser(payload));
  };
  return (
    <>
      <div className=" w-[80%] m-[auto] mt-8 ">
        <div className="flex flex-row justify-between pb-4 border-b-2">
          <div className="font-semibold text-zinc-500 text-xl ">
            List of User Details
          </div>
          <button
            className=" px-5 py-1 bg-gradient-to-r from-indigo-600 to-blue-500 text-white hover:bg-gradient-to-l from-indigo-600 to-blue-500"
            onClick={() => addNewUser(fakeUserData())}
          >
            Add New Users
          </button>
        </div>
        <ul>
          <DisplayUser />
        </ul>
        <hr />
        <DeleteAllUsers />
      </div>
    </>
  );
};

export default UserDetails;
