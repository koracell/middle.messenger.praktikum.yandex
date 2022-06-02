import Route from './Route'

export default class Router {
   static __instance: any;
   routes: any;
   history: History;
   _currentRoute: any;
   _rootQuery: string;
   
   constructor(rootQuery: string) {
     if (Router.__instance) {
       return Router.__instance;
     }
 
     this.routes = [];
     this.history = window.history;
     this._currentRoute = null;

     this._rootQuery = rootQuery;
 
     Router.__instance = this;
   }
 
   use(pathname: string, block: any) {
      const route = new Route(pathname, block, {rootQuery: this._rootQuery});
      
      this.routes.push(route);
      
      return this;
   } 

   start() {
     // Реагируем на изменения в адресной строке и вызываем перерисовку
     window.onpopstate = (event: any) => {
       this._onRoute(event.currentTarget.location.pathname);
     };
 
     this._onRoute(window.location.pathname);
   }
 
   _onRoute(pathname: string) {
     const route = this.getRoute(pathname);
     if (!route) {
       return;
     }
 
     if (this._currentRoute) {
       this._currentRoute.leave();
     }
    
     this._currentRoute = route
     route.render(route, pathname);
   }
 
   go(pathname: string) {
     this.history.pushState({}, "", pathname);
     this._onRoute(pathname);
   }
 
   getRoute(pathname: string) {
     return this.routes.find((route: any) => route.match(pathname));
   }
 }