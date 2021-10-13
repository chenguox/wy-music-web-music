import WYDiscover from "@/pages/discover"
import WYMine from "@/pages/mine"
import WYFriend from "@/pages/friend"

const routes = [
  {
    path: "/",
    exact: true,
    component: WYDiscover
  },
  {
    path: "/mine",
    component: WYMine
  },
  {
    path: "/friend",
    component: WYFriend
  }
];

export default routes;

