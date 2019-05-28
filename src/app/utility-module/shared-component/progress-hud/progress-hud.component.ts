import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../shared-service/shared.service';

@Component({
  selector: 'app-progress-hud',
  templateUrl: './progress-hud.component.html',
  styleUrls: ['./progress-hud.component.scss']
})

export class ProgressHudComponent implements OnInit {
  
  isLoading = false;
  
  constructor(private sharedService: SharedService) {
  }
  
  ngOnInit() {
    this.sharedService.getLoader().subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }
}
