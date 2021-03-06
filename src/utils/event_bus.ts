type Handler = (...args: unknown[]) => void;

export default class EventBus {
   listeners: Record<string, Handler[]> = {};
 
   on(event: string, callback: Handler): void {
     if (!this.listeners[event]) {
       this.listeners[event] = [];
     }
 
     this.listeners[event].push(callback);
   }
 
   off(event: string, callback: Handler): void {
       if (!this.listeners[event]) {
       throw new Error(`Нет события: ${event}`);
     }
 
     this.listeners[event] = this.listeners[event].filter(
       listener => listener !== callback
     );
   }
 
    emit(event: string, ...args: unknown[]): void {
     if (!this.listeners[event]) {
       return;
     }
     
     this.listeners[event].forEach(function(listener) {
       listener(...args);
     });
   }
 }