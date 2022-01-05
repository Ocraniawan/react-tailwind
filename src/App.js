import "./App.css";

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
      <div className="mx-10 my-10 text-left">
        <form className="bg-amber-100 rounded-xl p-10">
          <label className="block">
            <span className="text-sm font-medium text-black-500">Username</span>
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
            <span className="text-sm font-medium text-black-500">Password</span>
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
      </div>
    </div>
  );
}

export default App;
