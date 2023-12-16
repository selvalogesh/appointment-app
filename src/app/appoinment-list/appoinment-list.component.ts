import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.css']
})
export class AppoinmentListComponent implements OnInit {
  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments");
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  addAppointment() {
    if(this.newAppointmentTitle.trim().length && this.newAppointmentTitle) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      };

      this.appointments.push(newAppointment);
      this.newAppointmentDate = new Date();
      this.newAppointmentTitle = "";

      localStorage.setItem("appointments", JSON.stringify(this.appointments));
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }
}
