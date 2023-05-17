import {NgModule} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {DataService} from "src/app/srv/data.service";
import {DataSourceService} from "src/app/srv/dataSource.service";
import {Logger} from "src/app/srv/logger.service";
import {ShareService} from "src/app/srv/share.service";


//------------------------------------------------------------------------------
/**
 * Employee management-UI test module.
 */


//------------------------------------------------------------------------------
@NgModule
({
  providers:
  [
    DataService,
    DataSourceService,
    Logger,
    ShareService,
    MatDialog,
  ]
})
export class CommonTestModule {}