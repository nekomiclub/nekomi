
import { IRoute, routes } from '../routes';
import { config } from '../config';



/** Get route object by it's path */
export function getRoute(path: string): IRoute | null {
  let route: IRoute | null = null;
  path = path.replace(config.URL.baseURL, '')

  for (const key in routes) {
    const routeRec = routes[key] as IRoute;

    //* If path equals to record path
    if (routeRec.path === path) {
      return routeRec;
    }

    //* Check dynamic routes
    if (routeRec.path.includes('/*') || routeRec.dynamic) {
      const matcher = new RegExp(routeRec.path.replaceAll('/*', '\/(?:(?!\/).)*'));
      if (path.match(matcher)) return routeRec
    }
  }

  //* Anyway return route
  return route;
}