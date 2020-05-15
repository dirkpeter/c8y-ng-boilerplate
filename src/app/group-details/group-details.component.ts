import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CumulocityService } from '../_services';

// TODO set types

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: [ './group-details.component.scss' ]
})

export class GroupDetailsComponent implements OnInit {
  private client;
  private groupId: number;
  public group;

  constructor(
    private route: ActivatedRoute,
    public Cumulocity: CumulocityService
  ) {
    this.client = this.Cumulocity.client;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.groupId = parseInt(params.get('groupId'), 10);
      const filter = {};
      this.client.inventory
        .detail(this.groupId, filter)
        .then(res => {
          this.group = res.data;
        });
    });
  }
}
