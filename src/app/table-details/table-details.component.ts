import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-details',
  imports: [CommonModule],
  templateUrl: './table-details.component.html',
  styleUrl: './table-details.component.css'
})
export class TableDetailsComponent implements OnInit {
  tableNumber: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tableNumber = this.route.snapshot.paramMap.get('number');
  }

  goBack(): void {
    window.history.back();
  }
}
