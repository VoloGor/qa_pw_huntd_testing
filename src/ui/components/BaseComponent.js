export class BaseComponent {
  constructor(page, hostLocator) {
    this.page = page;
    // If a hostLocator is provided, all queries inside the component will be scoped relative to it.
    this.host = hostLocator || page;
  }
}
