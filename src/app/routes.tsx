import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Services } from "./components/Services";
import { ARCamera } from "./components/ARCamera";
import { Bookings } from "./components/Bookings";
import { Profile } from "./components/Profile";
import { ServiceDetail } from "./components/ServiceDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "services/:id", Component: ServiceDetail },
      { path: "ar-camera", Component: ARCamera },
      { path: "bookings", Component: Bookings },
      { path: "profile", Component: Profile },
    ],
  },
]);
