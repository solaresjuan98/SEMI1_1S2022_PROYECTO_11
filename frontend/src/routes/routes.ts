
import { LazyExoticComponent } from "react";
import { HomePage } from "../pages/HomePage";
import { NotesPage } from "../pages/NotesPage";
import { CalendarPage } from '../pages/CalendarPage';
import { TodoListPage } from "../pages/TodoListPage";
import { TopicsPage } from "../pages/TopicsPage";

type JSXComponent = () => JSX.Element

export interface Route {
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent; //() => JSX.Element;
    name: string;
    icon?: string;
    children?: Route[];
}


export const routes: Route[] = [
    {
        name: 'Home',
        path: '/home',
        component: HomePage
    },
    {
        name: 'Todo list',
        path: '/to-do',
        component: TodoListPage
    },
    {
        name: 'My notes',
        path: '/notes/',
        component: NotesPage
    },
    {
        name: 'Calendar',
        path: '/calendar',
        component: CalendarPage
    },
    {
        name: 'Topics',
        path: '/topics',
        component: TopicsPage
    }
    
]