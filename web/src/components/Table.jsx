import { useNavigate } from "react-router-dom";
import Button from "./Button";

const tasks = [
  { id: 1, title: "Test title 1", dueDate: "01.02.2022", status: "Pending" },
  { id: 2, title: "Test title 2", dueDate: "02.02.2022", status: "Completed" },
  // Add more tasks as needed
];

const Table = () => {
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/view-task/${id}`);
  };

  return (
    <div>
      <table className="table-fixed w-full">
        <thead className="text-center">
          <tr>
            <th className="text-sm font-medium text-start pl-5">Title</th>
            <th className="text-sm font-normal">Due Date</th>
            <th className="text-sm font-normal">Status</th>
            <th className="text-sm font-normal">Edit Task</th>
            <th className="text-sm font-normal">Delete Task</th>
            <th className="text-sm font-normal">Mark as Complete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr
              key={task.id}
              className="bg-n-1 min-h-20 h-20 text-n-5 cursor-pointer hover:bg-gray-100"
              onClick={() => handleRowClick(task.id)}
            >
              <td className="rounded-s-lg pl-5">{task.title}</td>
              <td className="text-center">{task.dueDate}</td>
              <td className="text-center">{task.status}</td>
              <td className="text-center">
                <Button
                  text="Update"
                  bgColor="bg-n-2/50"
                  width="w-[114px]"
                  height="h-[48px]"
                  customStyles="text-n-2 font-semibold"
                />
              </td>
              <td className="text-center">
                <Button
                  text="Delete"
                  bgColor="bg-n-3/50"
                  width="w-[114px]"
                  height="h-[48px]"
                  customStyles="text-n-3 font-semibold"
                />
              </td>
              <td className="rounded-e-lg text-center">Complete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
