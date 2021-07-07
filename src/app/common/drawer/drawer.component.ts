import {Component, OnInit} from "@angular/core"
import {NavigationEnd, Router} from "@angular/router"
import {filter} from "rxjs/operators"

@Component({
  selector: "app-drawer",
  templateUrl: "./drawer.component.html",
  styleUrls: ["./drawer.component.scss"],
})
export class DrawerComponent implements OnInit {
  activeUrl: string = "/"

  constructor(private readonly router: Router) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.activeUrl = event.url
      })
  }

  ngOnInit(): void {
  }
}
