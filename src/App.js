import "./App.css";
import MyProfilePic from "./Component/Profile/ProfilePhoto";
import MyFullName from "./Component/Profile/FullName";
import MyAddress from "./Component/Profile/Address";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div class="container mt-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-7">
          <div class="card p-3 py-4">
            <div class="text-center">
              <MyProfilePic />
            </div>
            <div class="text-center mt-3">
              <span class="bg-secondary p-1 px-4 rounded text-white">
                Full stack JS
              </span>
              <MyFullName />
              <div class="px-4 mt-1">
                <MyAddress />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
