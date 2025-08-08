import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/pages/home.tsx"),
    route('/auth/sign_in', "routes/auth/sign_in.tsx"),
    route('/auth/sign_up', "routes/auth/sign_up.tsx"),
    route('/analytics', "routes/pages/teamAnalytics.tsx"),
    route('*', "routes/pages/notFound.tsx"),
] satisfies RouteConfig;
