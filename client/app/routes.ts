import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('/auth/sign_in', "routes/sign_in.tsx"),
    route('/auth/sign_up', "routes/sign_up.tsx"),
] satisfies RouteConfig;
