import "./App.css";

const dummyTable = [
  {
    id: 1,
    name: "Ocraniawan Patattan",
    title: "Frontend Developer",
    email: "ocraniawan@example.com",
  },
  {
    id: 2,
    name: "Andriansyah",
    title: "Backend Developer",
    email: "andriansyah@example.com",
  },
  {
    id: 3,
    name: "Andre Pratama",
    title: "Tech Lead",
    email: "andre@example.com",
  },
  {
    id: 4,
    name: "Amabel Hadisoewono",
    title: "Business Analyst",
    email: "amabel@example.com",
  },
  {
    id: 5,
    name: "Iqbal Faraby",
    title: "UI / UX Developer",
    email: "iqbal@example.com",
  },
  { id: 1, name: "Erga", title: "QA Engginer", email: "erga@example.com" },
];

function App() {
  return (
    <div className="App p-4">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0"></div>
        <button className="bg-sky-600 text-white p-1 rounded-lg hover:bg-sky-700">
          Check this Out!
        </button>
        <div>
          <div className="text-xl font-medium text-black prim">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
      <div className="md:mx-10 md:my-10 text-left">
        <div className="md:flex bg-amber-100 rounded-xl md:justify-center p-10">
          <form className="w-auto bg-white rounded-lg px-4 py-2 shadow-md">
            <label className="block">
              <span className="text-sm font-medium text-black-500">
                Username
              </span>
              <input
                type={"text"}
                disabled
                placeholder="Ocraniawan Patattan"
                className="mt-1 block ml-2 p-1 border border-gray-300 rounded-md shadow-sm
                          disabled:shadow-none bg-gray-50 disabled:text-gray-2500"
              />
              <p class="mt-1 ml-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Please provide a valid email address.
              </p>
            </label>
            <label className="block">
              <span className="text-sm font-medium text-black-500">Email</span>
              <input
                type={"email"}
                className="peer mt-1 block ml-2 h-auto p-1 bg-white border border-gray-300 rounded-md shadow-sm 
                focus:border-sky-400 focus:outline-none 
                invalid:border-pink-500 invalid:text-pink-500"
              />
              <p class="mt-1 ml-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Please provide a valid email address.
              </p>
            </label>
            <label className="block mt-2 ">
              <span className="text-sm font-medium text-black-500">
                Password
              </span>
              <input
                type={"password"}
                className="peer block mt-1 ml-2 h-auto p-1 bg-white border border-gray-300 rounded-md shadow-sm 
                focus:border-sky-400 focus:outline-none focus:invalid:border-pink-500 focus:invalid:text-pink-500
                invalid:border-pink-500 invalid:text-pink-500"
                minLength={8}
              />
              <p className="mt-1 ml-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Please input minimum 8 characters.
              </p>
            </label>
          </form>
          <div className="mt-2 md:mt-0 md:pl-4">
            <table className="rounded-lg">
              <thead className="text-left">
                <tr className="bg-gray-200 h-8">
                  <th className="text-sky-500 p-2 font-medium">Name</th>
                  <th className="text-sky-500 font-medium">Role</th>
                  <th className="text-sky-500 font-medium">Email</th>
                </tr>
              </thead>
              <tbody>
                {dummyTable.map((item, i) => (
                  <tr
                    key={i}
                    className="odd:bg-white even:bg-gray-100 w-auto font-normal text-gray-700 hover:bg-sky-500 hover:text-white"
                  >
                    <td className="p-2 ">{item.name}</td>
                    <td className="p-2 ">{item.title}</td>
                    <td className="p-2 ">{item.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
