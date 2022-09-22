import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from 'src/app/paises/services/countries.service';
import { Country } from 'src/app/pipes/interfaces/country';
import { ConfirmDeleteComponent } from '../../components/confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  continents = [
    { id: 0, name: 'Europe' },
    { id: 1, name: 'America' },
    { id: 2, name: 'Oceania' },
    { id: 3, name: 'Asia' },
    { id: 4, name: 'Africa' },
  ];
  country: Country = {
    capital: '',
    continent: '',
    currency: '',
    name: '',
    population: 0,
    visa: false,
    image: '',
    link: '',
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (this.router.url.includes('edit')) {
      this.activatedRoute.params.subscribe(({ id }) => {
        this.countriesService.getCountry(id).subscribe((country: Country) => {
          this.country = country;
          console.log(country);
        });
      });
    }
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2500,
    });
  }

  saveCountry() {
    if (this.country.name.trim().length === 0) {
      return;
    }
    if (this.country.id) {
      this.countriesService.updateCountry(this.country).subscribe((resp) => {
        this.openSnackBar('Successfully saved', 'Close');
      });
    } else {
      this.countriesService.addCountry(this.country).subscribe((resp) => {
        this.openSnackBar('Successfully added', 'Close');
        this.router.navigate(['/paises/edit', resp.id]);
      });
    }
  }
  deleteCountry() {
    const dialog = this.dialog.open(ConfirmDeleteComponent, {
      width: '350px',
      data: { ...this.country },
    });
    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.countriesService
          .deleteCountry(this.country.id!)
          .subscribe((resp) => {
            this.openSnackBar('Successful delete', 'Close');
            this.router.navigate(['/paises/list']);
          });
      }
    });
  }
}
