import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Loan Application</h1>
      <div class="bg-gray-200 h-screen overflow-hidden flex items-center justify-center">
        <div class="w-10/12 lg:w-9/12 xl:w-7/12 flex">
          <div
            class="w-full h-auto hidden lg:block lg:w-1/2 bg-cover rounded-lg lg:rounded-r-none"
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/4968383/pexels-photo-4968383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
            }}
          ></div>
          <div class="w-full lg:w-1/2 bg-white rounded-lg lg:rounded-l-none py-24 px-12">
            <h3 class="font-bold text-3xl text-red-600 text-center tracking-widest uppercase mb-4">
              Login
            </h3>
            <form class="bg-white">
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold" for="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  class="w-full p-3 text-md border rounded shadow focus:outline-none focus:shadow-outline"
                  placeholder="Username"
                />
              </div>
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold" for="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  class="w-full p-3 text-md border rounded shadow focus:outline-none focus:shadow-outline"
                  placeholder="***********"
                />
              </div>
              <div class="mb-4">
                <button
                  class="w-full p-3 font-bold text-white bg-red-500 rounded-full focus:outline-none"
                  type="button"
                >
                  Sign In
                </button>
              </div>
              <hr class="mb-4 border-t" />
              <div class="text-sm text-center">
                <a href="/#">Create an Account</a>
                <a href="/#" class="text-blue-500 pl-2">
                  Forgot Password ?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
