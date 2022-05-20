import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get("/asdf")
  getRootRoute() {
    return "hi there!";
  }

  @Get("/bye")
  getByeTHere() {
    return "bye there!";
  }
}
