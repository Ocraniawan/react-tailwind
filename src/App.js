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
    </div>
  );
}

export default App;
