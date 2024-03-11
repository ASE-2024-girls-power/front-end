import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./Pages/Home";
import { Stories } from "./Pages/Stories";
import SingleStory from "./Pages/SingleStory";
import { Error } from "./Pages/Error";
import Navbar from "./Components/Navbar/Navbar";
import { Registration } from "./Pages/Registration";
import { SignIn } from "./Pages/SignIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="registration" element={<Registration />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="stories" element={<Stories />} />
      <Route path="stories/:id" element={<SingleStory />} />
      <Route element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
