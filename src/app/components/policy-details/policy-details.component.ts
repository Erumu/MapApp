import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/services/policy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Policy } from 'src/app/models/policy.model'

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.css']
})
export class PolicyDetailsComponent implements OnInit {

  currentPolicy: Policy = {
    id:'',
    entitlementString: '',
    gidType: '',
    attrJson: ''
  };
  message = '';
  constructor(
    private policyService: PolicyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getPolicy(this.route.snapshot.params.id);
  }

  getPolicy(id: string): void {
    this.policyService.get(id)
      .subscribe(
        data => {
          this.currentPolicy = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateGidType(localGidType: string): void {
    const data = {
      title: this.currentPolicy.entitlementString,
      description: this.currentPolicy.gidType,
      gidType: localGidType
    };

    this.message = '';

    this.policyService.update(this.currentPolicy.id, data)
      .subscribe(
        response => {
          this.currentPolicy.gidType = localGidType;
          console.log(response);
          this.message = response.message ? response.message : 'The Gid Type was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  updatePolicy(): void {
    this.message = '';

    this.policyService.update(this.currentPolicy.entitlementString, this.currentPolicy)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This policy mapping was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deletePolicy(): void {
    this.policyService.delete(this.currentPolicy.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/policies']);
        },
        error => {
          console.log(error);
        });
  }

}
