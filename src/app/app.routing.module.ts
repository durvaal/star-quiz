import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { WelcomeComponent } from "./components/welcome/welcome.component";
import { GameComponent } from "./components/game/game.component";

export const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: WelcomeComponent },
    { path: 'game', component: GameComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}