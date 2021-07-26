import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@app/pages/auth/auth.service';
import { Menu } from '@app/shared/models/menu.interface';
import { UtilsService } from '@app/shared/services/util.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<any>();
  lstMenu: Menu[] = [];

  constructor(private authSvc: AuthService, private utilsSvc: UtilsService) { }

  ngOnInit(): void {
    this.authSvc.getRol$
      .pipe(takeUntil(this.destroy$))
      .subscribe(rol => {
        if (rol == 'admin') {
          this.lstMenu = [
            {
              nombre: 'Cuentas de medicos',
              icono: 'medication',
              ruta: '/admin/users'
            },
            {
              nombre: 'Cuentas de pacientes',
              icono: 'people',
              ruta: '/admin/categories'
            },
            {
              nombre: 'Registro medico',
              icono: 'add',
              ruta: '/admin/reports'
            },
            {
              nombre: 'Registrar horario',
              icono: 'schedule',
              ruta: '/admin/reports'
            }
          ];
        } else if(rol == 'ventas') {
          this.lstMenu = [
            {
              nombre: 'Otros',
              icono: 'help_outline',
              ruta: '/ventas/ventas'
            }
          ];
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }

  onClose(): void {
    this.utilsSvc.openSidebar(false);
  }

  onExit(): void {
    this.authSvc.logout();
    this.onClose();
  }

}
