import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
    {path: "", component: MainComponent},
    {path: "calculator", component: CalculatorComponent},
    {path: "editor", component: TextEditorComponent},
    {path: "weather", component: WeatherComponent}
];
