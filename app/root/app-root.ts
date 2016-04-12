import {Component} from 'angular2/core';
import {MapComponent} from '../map/map';
import {LocationDetailComponent} from '../location-detail/location-detail';
import {HomeComponent} from '../home/home';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app/root/app-root.html',
    directives: [ROUTER_DIRECTIVES, HomeComponent, MapComponent, LocationDetailComponent]
})

@RouteConfig(
    [
        {path: '/', component:HomeComponent, as: 'Home'},
        {path: '/map', component:MapComponent, as: 'Map'},
        {path: '/location', component:LocationDetailComponent, as: 'LocationDetail'}
    ]
)

export default class RootComponent {}
