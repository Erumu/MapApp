import { Component, OnInit } from '@angular/core';
import { Policy } from 'src/app/models/policy.model';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {

  policies?: Policy[];
  currentPolicy: Policy = {};
  currentIndex = -1;
  entitlementString = '';

  constructor(private policyService: PolicyService) { }

  ngOnInit(): void {
    this.retrievePolicies();
  }

  retrievePolicies(): void {
    this.policyService.getAll()
      .subscribe(
        data => {
          this.policies = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievePolicies();
    this.currentPolicy = {};
    this.currentIndex = -1;
  }

  setActivePolicy(policy: Policy, index: number): void {
    this.currentPolicy = policy;
    this.currentIndex = index;
  }

  removeAllPolicies(): void {
    this.policyService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentPolicy = {};
    this.currentIndex = -1;

    this.policyService.findByTitle(this.entitlementString)
      .subscribe(
        data => {
          this.policies = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
