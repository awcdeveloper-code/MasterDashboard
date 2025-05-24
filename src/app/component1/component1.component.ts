import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-component1',
  imports: [CommonModule],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})

export class Component1Component {
  
  constructor(private router: Router) { }

  tablesAvailable = [
    { number: 1, capacity: 4 },
    { number: 3, capacity: 2 },
    { number: 5, capacity: 6 },
    { number: 8, capacity: 4 },
    { number: 1, capacity: 4 },
    { number: 3, capacity: 2 },
    { number: 5, capacity: 6 },
    { number: 8, capacity: 4 },
    { number: 1, capacity: 4 },
    { number: 3, capacity: 2 },
    { number: 5, capacity: 6 },
    { number: 8, capacity: 4 },
    { number: 1, capacity: 4 },
    { number: 3, capacity: 2 },
    { number: 5, capacity: 6 },
    { number: 8, capacity: 4 },
  ];
  
  tablesOccupied = [
    { number: 2, capacity: 4, occupiedBy: 'Smith Party' },
    { number: 4, capacity: 2, occupiedBy: 'Johnson' },
    { number: 6, capacity: 6, occupiedBy: 'Williams Family' },
    { number: 7, capacity: 4, occupiedBy: 'Davis Group' },
  ];
  
  onAvailableTableClick(table: any): void {
    console.log('Available table clicked:', table);
    this.router.navigate(['/table-details', table.number]);
  }
  
  onOccupiedTableClick(table: any): void {
    console.log('Occupied table clicked:', table);
    this.router.navigate(['/table-details', table.number]);
  }
}
