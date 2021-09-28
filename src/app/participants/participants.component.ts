import { ParticipantsService } from './../participants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  constructor(service: ParticipantsService) {
    this.person = this.participants = service.getParticipants();
  }
  person;
  participants;

  allAthlete() {
    this.person = this.participants;
  }
  genderAthlete(gender: string) {
    this.person = this.participants.filter(partcipant => partcipant.gender === gender)
  }

  ngOnInit(): void {
  }
}