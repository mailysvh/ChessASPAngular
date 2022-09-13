import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/core/models/link.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  mesLiens: Link[] = [];

  constructor() { }

  ngOnInit(): void {
    this.mesLiens = [
      {title : "Home", url : "tournament/indextournament", icon: "home"},
      {title : "Player", icon: "person", children : [
        {title : "List players", url : "player/indexplayer", icon: "list"},
        {title : "Add player", url : "player/addplayer", icon: "add"}]},
      {title: "Tournament", icon: "emoji_events", children : [
        {title : "List tournaments", url : "tournament/indextournament", icon: "list"},
        {title : "Add tournament", url : "tournament/addtournament", icon: "add"}]}
    ]
  }

  toggleChildrenVisible(index : number) {
    this.mesLiens[index].isChildrenVisible = !this.mesLiens[index].isChildrenVisible
  }

}
