import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { TreeviewConfig } from 'ngx-treeview';

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.css']
})
export class HierarchyComponent implements OnInit {

  public hierarchies = {};
  public options = {};
  values: number[];
  config = TreeviewConfig.create({
      hasAllCheckBox: false,
      hasFilter: true,
      hasCollapseExpand: true,
      decoupleChildFromParent: false,
      maxHeight: 400
  });

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getHierarchies();
  }

  public getHierarchies(): void {
    this.httpService.getHierarchy().subscribe(data => {
      this.hierarchies = data.entity.nodeStandardMetadata.children;
      console.log("Hierarchy Data: ", this.hierarchies);
      
    })
  }

}
