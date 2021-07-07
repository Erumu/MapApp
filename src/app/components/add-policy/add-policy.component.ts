import { Component, OnInit } from '@angular/core';
import { Policy } from 'src/app/models/policy.model';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent implements OnInit {

  policy: Policy = {
    entitlementString: '',
    gidType: '',
    attrJson: '',
    changedBy: '',
    changedDate: new Date(),
    createdBy: '',
    createdDate: new Date(),
    status: ''
  };

  submitted = false;

  constructor(private policyService: PolicyService) { }


  ngOnInit(): void {
  }

  savePolicy(): void {
    const data = {
      entitltmenetString: this.policy.entitlementString,
      gidType: this.policy.gidType,
      attrJson: this.policy.attrJson,
      changedBy: this.policy.changedBy,
      changedDate: this.policy.changedDate,
      createdBy: this.policy.createdBy,
      createdDate: this.policy.createdDate,
      status: this.policy.status
    };

    this.policyService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPolicy(): void {
    this.submitted = false;
    this.policy = {
      entitlementString: '',
      gidType: '',
      attrJson: '',
      changedBy: '',
      changedDate: new Date(),
      createdBy: '',
      createdDate: new Date(),
      status: ''
    };
  }

}
