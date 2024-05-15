import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slices/UserSlice";
const DisplayUser = () => {
  const data = useSelector((state) => {
    return state.users;
  });
  const dispatch = useDispatch();
  const deleteUser = (id) => {
    return dispatch(removeUser(id));
  };

  return (
    <>
      {data.map((user, id) => {
        return (
          <li className="flex flex-rows justify-between" key={id}>
            {user}
            <button className="text-red-600" onClick={() => deleteUser(id)}>
              <MdDeleteForever />
            </button>
          </li>
        );
      })}
    </>
  );
};

export default DisplayUser;
