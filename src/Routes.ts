//Routes to render for navigation purposes.

export interface Route {
    label: string;
    url: string;
    hidden?: boolean;
}

const routes: Route[] = [
    {
        label: 'Home',
        url: '/',
        hidden: true,
    },
];

export default routes;
