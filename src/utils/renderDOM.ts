export function renderDOM(rootSelector: string, component) {
   const root = document.querySelector(rootSelector);

   if (!root) {
      throw new Error('Root not found')
   }

   root.innerHTML = ''

   root.append(component.getContent()!);
}